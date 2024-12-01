import MessageItem from '~/components/message/messageItem';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Picker from '@emoji-mart/react';
import { useForm } from 'react-hook-form';
import data from '@emoji-mart/data';
import io from 'socket.io-client';
import { SOCKET_URL, SERVICE_URL } from '~/config';
import axios from 'axios';
import { useSelector } from 'react-redux';

const socket = io(SOCKET_URL);

function HomeMessage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [inputValue, setInputValue] = useState('');
	const [showPicker, setShowPicker] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const userInfo = useSelector((state) => state.user.userInfo);
	const [messages, setMessages] = useState([]);
	const containerRef = useRef(null);
	const handleSelectEmoji = (emoji) => {
		setInputValue(inputValue + emoji.native);
		setShowPicker(false);
	};

	const handleOpen = () => {
		setShowModal(!showModal);
	};

	const onSubmit = async () => {
		if (inputValue.trim()) {
			const formatdata = {
				content: inputValue,
				senderId: userInfo.customerId,
			};
			try {
				const response = await axios.post(`${SERVICE_URL}/chatall`, formatdata, {
					headers: { 'Content-Type': 'application/json' },
				});
			} catch (e) {
				console.log(e.message);
			}
			socket.emit('sendMessage', {
				content: inputValue,
				senderId: userInfo.customerId,
				avt: userInfo.avt,
				fullName: userInfo.fullName,
			});
			setInputValue('');
		} else {
			alert('vui lòng nhập tin nhắn');
		}
	};
	const fetchMessages = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getchatall`);
			const datachat = response.data;
			const formatData = datachat.map((data) => {
				return {
					...data,
					...data.sender,
				};
			});
			setMessages(formatData);
			console.log(messages);
		} catch (err) {
			console.log(err);
		} finally {
			// console.log(messages);
		}
	};

	const scrollToBottom = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight;
		} else {
			console.log('Container ref is null');
		}
	};
	useEffect(() => {
		fetchMessages();
	}, []);
	useEffect(() => {
		socket.on('receiveMessage', (data) => {
			setMessages((prevMessages) => [...prevMessages, data]);
			scrollToBottom();
		});

		return () => {
			socket.off('receiveMessage');
		};
	}, [socket]);
	useEffect(() => {
		scrollToBottom();
	}, [messages]);
	return (
		<div className="w-[100%]">
			<div
				className={`absolute text-[14px] ease-in-out top-0 rounded-t-[15px] text-[#fff] flex text-center 
					transition-all duration-300 transform ${showModal ? 'translate-x-[935px]' : 'translate-x-[1385px]'}`}
			>
				<div className="m-auto w-[80px]">
					<button
						onClick={handleOpen}
						className="rotate-[270deg] cursor-pointer rounded-t-[15px] font-[600px] bg-[#f19790] py-2 px-[15px] hover:bg-[#f17b73] w-[120px]"
					>
						Trò chuyện
					</button>
				</div>
				<div className="modal h-[930px] w-[450px]">
					<div ref={containerRef} className="bg-[#eeeeee] p-[10px] h-[calc(100%-68px)] overflow-auto">
						{messages.map((msg, index) => (
							<MessageItem key={index} content={msg.content} avt={msg?.avt} name={msg?.fullName} />
						))}
					</div>
					<div className="w-[100%] py-[10px] border-t-[1px] border-solid border-[#dcdcdc]">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex px-4 py-2 h-10 border-[1px] border-solid border-[#e3e3e3] bg-[#fff] transition-[0.3s] ease-linear "
						>
							<input
								{...register('contentComment')}
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								placeholder="Message.."
								className="h-[100%] w-[100%] focus:border-[#ccc] text-[#333]"
								type="text"
							/>
							<button type="button" onClick={() => setShowPicker(!showPicker)} className="mr-2">
								😀
							</button>
							<button type="submit">
								<FontAwesomeIcon icon={faPaperPlane} className="text-[20px] text-[#333]" />
							</button>
						</form>
						{showPicker && (
							<div style={{ position: 'absolute', bottom: '60px', right: '40px' }}>
								<Picker data={data} onEmojiSelect={handleSelectEmoji} />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeMessage;
