import Comment from '~/components/comment';
import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faGift, faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import { EyeOutlined } from '@ant-design/icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { formatDate } from '~/sevices/fomatDate';
import axios from 'axios';
import { SERVICE_URL, SOCKET_URL } from '~/config';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import io from 'socket.io-client';
const socket = io(SOCKET_URL);

function ViewStory({ videoRefs, handleNext, handlePrev, currentStory, isLiked, storyId }) {
	const [likeCount, setLikeCount] = useState(currentStory.likes || 0);
	const [like, setLike] = useState(isLiked);
	const userInfo = useSelector((state) => state.user.userInfo);
	const [dataComment, setDataComment] = useState([]);
	const [showPicker, setShowPicker] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const handleLike = async (storyId) => {
		try {
			if (like === false) {
				// Tăng số lượt thích trên backend
				await axios.post(`${SERVICE_URL}/likeStory`, { storyId, customerId: userInfo.customerId });

				// Cập nhật trạng thái giao diện
				setLike(true);
				setLikeCount(likeCount + 1);
			} else {
				// Nếu đã "like" thì giảm số lượt thích
				await axios.post(`${SERVICE_URL}/unlikeStory`, { storyId, customerId: userInfo.customerId });

				// Cập nhật trạng thái giao diện
				setLike(false);
				setLikeCount(likeCount - 1);
			}
		} catch (error) {
			console.error('Lỗi khi thả tim:', error);
		}
		console.log('chitiet', like);
	};
	const handleSelectEmoji = (emoji) => {
		setInputValue(inputValue + emoji.native);
		setShowPicker(false);
	};
	const fetchData = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getdataComment/${storyId}`);
			const datacomment = response.data;
			const combinedComments = datacomment.map((comment) => {
				return {
					...comment,
					...comment.customers,
				};
			});
			setDataComment(combinedComments);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		setDataComment([]);
		fetchData();
	}, [storyId]);
	useEffect(() => {
		socket.on('commentReceived', (newComment) => {
			setDataComment((prevComments) => [...prevComments, newComment]);
		});

		return () => {
			socket.off('commentReceived');
		};
	});

	const onSubmit = async (data) => {
		const customerId = userInfo.customerId;
		const fullName = userInfo.fullName;
		const avt = userInfo.avt;
		const ownerId = currentStory?.customers?.customerId;
		const formartData = {
			content: inputValue,
			storyId: storyId,
			customerId: customerId,
			ownerId: ownerId,
			fullName,
			avt,
			time: new Date(),
		};
		try {
			const response = await axios.post(`${SERVICE_URL}/createComment`, formartData, {
				headers: { 'Content-Type': 'application/json' },
			});
			setInputValue('');
			socket.emit('newComment', formartData);
			const notificationData = {
				ownerId: ownerId,
				customerId: customerId,
				avt,
				content: `${fullName} đã bình luận về story của bạn.`,
				typeId: 1,
				time: new Date(),
			};
			if (ownerId !== customerId) {
				const notificationResponse = await axios.post(`${SERVICE_URL}/createNotification`, notificationData, {
					headers: { 'Content-Type': 'application/json' },
				});
				socket.emit('newNotification', notificationData, ownerId);
				console.log(notificationResponse.data);
			}
		} catch (error) {
			console.error('Error creating notification:', error.response?.data || error.message);
		}
	};
	return (
		<div className="flex h-[892px]">
			<div className="w-[65%] flex relative">
				<button
					onClick={handlePrev}
					className="absolute w-[45px] h-[45px] bg-[#e3e3e3] text-[#7e7e7e] rounded-[50%] left-[140px] top-[50%] hover:text-[#fff] hover:bg-[#ed6056] "
				>
					<FontAwesomeIcon icon={faChevronLeft} className="leading-[45px] text-center text-[20px]" />
				</button>
				<div className="h-[90%] mt-[5%] w-[452px] mx-auto">
					<video
						ref={videoRefs}
						src={currentStory.urlStory}
						alt=""
						className="w-[100%] h-[100%] object-cover"
						controls
						loop
					/>
				</div>
				<button
					onClick={handleNext}
					className="absolute w-[45px] h-[45px] bg-[#e3e3e3]  text-[#7e7e7e] rounded-[50%] right-[140px] top-[50%] hover:text-[#fff]	hover:bg-[#ed6056]"
				>
					<FontAwesomeIcon icon={faChevronRight} className="leading-[45px] text-center text-[20px]" />
				</button>
				<div className="absolute right-[140px] bottom-[46px] ">
					<button
						onClick={() => handleLike(currentStory.storyId)}
						className="block w-[45px] h-[45px] bg-[#e3e3e3]  text-[#696969] rounded-[50%] mb-[12px] hover:text-[#333]	"
					>
						{like ? (
							<FontAwesomeIcon
								icon={faHeart}
								className={'leading-[45px] text-center text-[20px]  text-red-600 '}
							/>
						) : (
							<FontAwesomeIcon icon={faHeart} className={'leading-[45px] text-center text-[20px]'} />
						)}
					</button>
					<button className="block w-[45px] h-[45px] bg-[#e3e3e3]  text-[#696969] rounded-[50%] mb-[12px] hover:text-[#333]	">
						<FontAwesomeIcon icon={faGift} className="leading-[45px] text-center text-[20px]" />
					</button>
					<button className="block w-[45px] h-[45px] bg-[#e3e3e3]  text-[#696969] rounded-[50%] hover:text-[#333]	">
						<FontAwesomeIcon icon={faShare} className="leading-[45px] text-center text-[20px]" />
					</button>
				</div>
			</div>
			<div className="w-[35%] bg-[#eeeeee] py-[15px] px-[10px] h-[100%]">
				<div className="header-comment flex item-center justify-between">
					<div className="text-center flex items-center">
						<img
							src={currentStory.customers.avt}
							alt=""
							className="w-[42px] h-[42px] rounded-[50%] p-[2px] mr-[10px] mx-[2px] object-cover"
						/>
						<div className="">
							<span className="text-[14px] text-[#5f67f8] font-[600] block leading-5">
								{currentStory.customers.fullName}
							</span>
							<span className="text-[12px] text-[#999] ">{formatDate(currentStory.time)}</span>
						</div>
					</div>
					<div className="">
						<button className="bg-[#ee756c] rounded-[15px] text-[#fff] py-[6px] px-[22px] w-[78px] font-[600] hover:bg-[#f0564a]">
							Thuê
						</button>
					</div>
				</div>
				<div className="interact flex justify-around py-[15px]">
					<div className=" text-[#636363] text-[15px] items-center">
						<EyeOutlined className="mr-[10px] text-[16px]" />
						{currentStory.views}
					</div>
					<div className=" text-[#636363] text-[15px] items-center">
						<FontAwesomeIcon icon={faMessage} className="mr-[10px] text-[16px]" />
						{dataComment?.length}
					</div>
					<div className=" text-[#636363] text-[15px] items-center">
						<FontAwesomeIcon icon={faHeart} className="mr-[10px] text-[16px]" />
						{currentStory.likes}
					</div>
				</div>
				<div className="caption pb-[5px] border-b-[1px] border-solid border-[#dcdcdc]">
					<div className="mb-[10px]">
						<span className="text-[14px] text-[#333] leading-[1.5]">{currentStory.caption}</span>
					</div>
					<div className="mb-[10px]">
						<span className="text-[14px] text-[#333] leading-[1.5]">{currentStory.hagtag}</span>
					</div>
				</div>
				<div className="py-[15px] h-comment overflow-scroll">
					{dataComment ? (
						dataComment.map((comment, index) => (
							<Comment
								key={index}
								name={comment.fullName}
								avt={comment.avt}
								time={formatDate(comment?.time)}
								content={comment.content}
								customerId={comment.customerId}
								tacgia={currentStory.customers.customerId}
							/>
						))
					) : (
						<p className="">chưa có bình luận nào</p>
					)}
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
							placeholder="Comment.."
							className="h-[100%] w-[100%] focus:border-[#ccc]"
							type="text"
						/>
						<button type="button" onClick={() => setShowPicker(!showPicker)} className="mr-2">
							😀
						</button>
						<button type="submit">
							<FontAwesomeIcon icon={faPaperPlane} className="text-[20px]" />
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
	);
}

export default ViewStory;
