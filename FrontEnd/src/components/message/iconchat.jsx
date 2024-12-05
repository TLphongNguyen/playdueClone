import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faMinus, faPaperPlane, faRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import io from 'socket.io-client';
import { SOCKET_URL, SERVICE_URL } from '~/config';
import { useSelector } from 'react-redux';

const socket = io(SOCKET_URL);
function IconChat({ position, bottom }) {
	const [showPicker, setShowPicker] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [isHidden, setIshidden] = useState(true);
	const [listUserChat, setListUserChat] = useState([]);
	const [activeIndex, setActiveIndex] = useState(null);
	const [datachat, setDataChat] = useState([]);
	const [receiverId, setReceiverId] = useState(null);
	const containerRef = useRef(null);
	const userInfo = useSelector((state) => state.user.userInfo);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const handleSelectEmoji = (emoji) => {
		setInputValue(inputValue + emoji.native);
		setShowPicker(false);
	};
	const scrollToBottom = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		} else {
			console.log('Container ref is null');
		}
	};
	const onSubmit = (data) => {
		const formatdata = {
			...data,
			senderId: userInfo.customerId,
			receiverId: receiverId,
		};
		try {
			const response = axios.post(`${SERVICE_URL}/chatwith`, formatdata, {
				headers: { 'Content-Type': 'application/json' },
			});
			reset();
			setInputValue('');
		} catch (err) {
			console.log(err);
		}
		socket.emit('sendMessagePrivate', {
			content: inputValue,
			senderId: userInfo.customerId,
		});
	};
	useEffect(() => {
		socket.on('receiveMessagePrivate', (data) => {
			setDataChat((prevMessages) => [...prevMessages, data]);
			scrollToBottom();
		});

		return () => {
			socket.off('receiveMessagePrivate');
		};
	}, [socket]);
	const onOpen = () => {
		setIshidden(false);
	};
	const onHiden = () => {
		setIshidden(true);
	};
	const handleClick = async (index, customerId) => {
		setActiveIndex(index);
		setDataChat([]);
		setReceiverId(customerId);
		const formatdata = {
			receiverId: customerId,
			senderId: userInfo.customerId,
		};
		fetchchatPrivate(formatdata);
	};
	const fetchchatPrivate = async (data) => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getprivatechat`, {
				params: data,
				headers: { 'Content-Type': 'application/json' },
			});
			setDataChat(response.data);
		} catch (e) {
			console.log(e);
		} finally {
			console.log(datachat);
		}
	};
	const fetchUserChat = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getchatby/${userInfo.customerId}`);

			setListUserChat(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			// console.log(listUserChat);
		}
	};
	const reload = () => {
		fetchUserChat();
	};
	useEffect(() => {
		fetchUserChat();
	}, []);
	useEffect(() => {
		scrollToBottom();
	}, [datachat]);
	return (
		<>
			<div className="fixed right-[10px] cursor-pointer z-10">
				<span onClick={onOpen}>
					<img src="https://playerduo.net/favicons/popup-chat.png" alt="" />
				</span>
			</div>

			<div
				className={`absolute z-10 modal-chat w-[750px] h-[575px] chat-shadow rounded-[10px] overflow-hidden ${isHidden ? 'hidden' : 'block'}`}
				style={{
					right: `${-position}px`,
					bottom: `${-bottom}px`,
				}}
			>
				<header className="bg-[#f5f5f5] h-[44px] border-b-[1px] border-solid border-[#dcdcdc] pt-[9px] px-[10px] pb-[5px] flex justify-between items-center">
					<div className="flex items-center ">
						<FontAwesomeIcon className="text-[28px] text-[#f0564a] mr-2" icon={faCommentDots} />
						<span className="">Tin nhắn</span>
					</div>
					<div className="flex">
						<span
							onClick={reload}
							className="mx-2 p-[6px] flex justify-center border-[#e2e2e2] border-[1px] border-solid rounded-[50%] text-[#f0564a] cursor-pointer hover:bg-[#f0564a] hover:text-[#fff] "
						>
							<FontAwesomeIcon icon={faRotate} />
						</span>
						<span
							onClick={onHiden}
							className="mx-2 px-[7px] py-[6px] flex justify-center border-[#e2e2e2] border-[1px] border-solid rounded-[50%] text-[#f0564a] cursor-pointer hover:bg-[#f0564a] hover:text-[#fff] "
						>
							<FontAwesomeIcon icon={faMinus} />
						</span>
					</div>
				</header>
				<div className="bg-[#fff] h-full flex">
					<div className="w-[35%] h-full border-r-[1px] border-solid border-[#dcdcdc] ">
						<ul className="overflow-y-auto ">
							{listUserChat.map((item, index) => (
								<li
									key={index}
									onClick={() => handleClick(index, item.customerId, item)}
									className={`pt-[12px] pb-[7px] px-[5px] flex items-center cursor-pointer ${activeIndex === index ? 'bg-[#f1f1f1]' : 'bg-transparent'} `}
								>
									<img
										className="w-[40px] h-[40px] mr-2 rounded-[50%] object-cover"
										src={item.avt}
										alt=""
									/>
									<div className="">
										<span className="text-[14px] text-[#333] font-[600]">{item.fullName}</span>
										<div className="text-[12px] text-[#808080]">content</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="w-[65%] h-full relative bg-white">
						<div className="w-full flex flex-col justify-between h-[calc(100%-50px)]">
							<div
								ref={containerRef}
								className="list-message overflow-y-auto p-2 space-y-2 h-[calc(100%)-90px]"
							>
								{datachat.map((message, index) => (
									<div
										key={index}
										className={`message ${
											message.senderId === userInfo.customerId ? 'sent' : 'received'
										} max-w-fit px-3 py-1 rounded-[20px] ${
											message.senderId === userInfo.customerId
												? 'bg-[#f0564a] text-white ml-auto'
												: 'bg-gray-200 text-[#333]'
										}`}
									>
										<p title={new Date(message?.sentAt).toLocaleTimeString()}>{message.content}</p>
									</div>
								))}
							</div>

							{/* Input */}
							<div className="w-full border-t border-[#dcdcdc] bg-white">
								<form onSubmit={handleSubmit(onSubmit)} className="w-full flex items-center p-3">
									<textarea
										{...register('content', {
											required: 'Tin nhắn không được để trống',
											maxLength: {
												value: 500,
												message: 'Tin nhắn không được vượt quá 500 ký tự',
											},
										})}
										className="flex-1 px-3 py-2 resize-none outline-none border border-gray-300 rounded-lg"
										placeholder="Type a message..."
										value={inputValue}
										onChange={(e) => setInputValue(e.target.value)}
									/>
									<button
										type="button"
										onClick={() => setShowPicker(!showPicker)}
										className="mx-3 text-lg"
									>
										😀
									</button>
									<button type="submit" className="text-blue-500 hover:text-blue-600 text-xl">
										<FontAwesomeIcon icon={faPaperPlane} />
									</button>
								</form>

								{/* Emoji Picker */}
								{showPicker && (
									<div className="absolute bottom-16 right-10 z-10">
										<Picker data={data} onEmojiSelect={handleSelectEmoji} />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default IconChat;
