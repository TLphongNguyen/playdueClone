import { useState, useRef } from 'react';
import ViewStory from '../viewStory';
import { EyeOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { SERVICE_URL } from '~/config';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Story({ avt, storyUrl, view, name, time, caption, hastag, stories, index }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [viewCount, setViewCount] = useState(view);
	const [currentStoryIndex, setCurrentStoryIndex] = useState(index);
	const [isLiked, setIsLiked] = useState(false); // Trạng thái đã like
	const userInfo = useSelector((state) => state.user.userInfo);

	const videoRef = useRef(null);
	const showModal = async () => {
		setIsModalOpen(true);
		setCurrentStoryIndex(index);
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.onloadeddata = () => {
				videoRef.current.play();
			};
		}
		const currentStoryId = stories[index].storyId; // Lấy storyId của story hiện tại
		increaseViewCount(currentStoryId);
		checkIfLiked(currentStoryId);
	};
	const checkIfLiked = async (storyId) => {
		const customerId = userInfo.customerId;
		try {
			const response = await axios.post(`${SERVICE_URL}/checkLikeStatus`, { storyId, customerId });
			setIsLiked(response.data.isLiked); // Cập nhật trạng thái like
		} catch (error) {
			console.error('Lỗi khi kiểm tra trạng thái thích:', error);
		}
	};

	const increaseViewCount = async (id) => {
		try {
			await axios.post(
				`${SERVICE_URL}/updateViewCount`,
				{ storyId: id },
				{
					headers: { 'Content-Type': 'application/json' },
				},
			);
			setViewCount(viewCount + 1);
		} catch (error) {
			console.error('Lỗi khi tăng lượt xem:', error);
		}
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		if (videoRef.current) {
			videoRef.current.pause();
		}
		setIsModalOpen(false);
	};
	const handlePrev = () => {
		const prevIndex = (currentStoryIndex - 1 + stories.length) % stories.length;
		setCurrentStoryIndex(prevIndex);
		const prevStoryId = stories[prevIndex].storyId; // Lấy storyId của story trước đó
		increaseViewCount(prevStoryId);
		checkIfLiked(prevStoryId);
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.src = stories[prevIndex].urlStory; // Cập nhật nguồn video
			videoRef.current.onloadeddata = () => {
				videoRef.current.play();
			};
		}
	};
	const handleNext = () => {
		const nextIndex = (currentStoryIndex + 1) % stories.length;
		setCurrentStoryIndex(nextIndex);
		const nextStoryId = stories[nextIndex].storyId; // Lấy storyId của story tiếp theo
		increaseViewCount(nextStoryId);
		checkIfLiked(nextStoryId);
		if (videoRef.current) {
			videoRef.current.currentTime = 0;
			videoRef.current.src = stories[nextIndex].urlStory; // Cập nhật nguồn video
			videoRef.current.onloadeddata = () => {
				videoRef.current.play();
			};
		}
	};

	const currentStory = stories[currentStoryIndex];
	return (
		<div>
			<div
				onClick={showModal}
				className="border-[1px] border-solid border-[#e6e5ea] rounded-[15px] mx-[5px] hover:border-[#bdbdbd] cursor-pointer"
			>
				<div className="relative h-[190px] m-[3px] w-[130px]">
					<video
						src={storyUrl}
						alt=""
						className="w-[220px] h-[100%] object-cover top-0 absolute rounded-t-[15px]"
					/>
					<div className="absolute text-right text-[#fff] text-[14px] bottom-[-18px] w-[100%] right-[10px] h-[20%]">
						<EyeOutlined />
						<span className="ml-1">{viewCount}</span>
					</div>
				</div>
				<div className="pt-[15px] pb-[5px] text-center flex items-center">
					<img src={avt} alt="" className="w-[30px] h-[30px] rounded-[50%] p-[2px] mx-[2px] object-cover" />
					<span className="text-[14px] text-[#000] line-clamp-1">{name}</span>
				</div>
			</div>
			<Modal
				footer={false}
				open={isModalOpen}
				height={'892px'}
				width={'1306px'}
				onOk={handleOk}
				onCancel={handleCancel}
				closeIcon={null}
				style={{ top: '30px', borderRadius: '0px' }}
			>
				<ViewStory
					videoRefs={videoRef}
					storyUrl={storyUrl}
					avt={avt}
					name={name}
					view={viewCount}
					hastag={hastag}
					time={time}
					caption={caption}
					handleNext={handleNext}
					handlePrev={handlePrev}
					currentStory={currentStory}
					isLiked={isLiked}
				/>
			</Modal>
		</div>
	);
}

export default Story;
