import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import ViewStory from '../viewStory';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
function StoryPage({ avt, storyUrl, view, name, time, caption, hastag, stories, index, likes }) {
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
	// console.log(currentStory);

	return (
		<div className="">
			<div className="w-[196px] h-[310px]" onClick={showModal}>
				<div className="wrap-story relative cursor-pointer">
					<video src={storyUrl} alt="" className="h-[310px] w-[196px] object-cover rounded-[10px]" />
					<ul className="flex justify-between absolute bottom-0 rounded-b-[10px] px-2 pb-2 w-[100%] bg-gradient-to-b from-transparent via-[#0000001a] via-[#0000004d] via-[#00000080] via-[#000000b3] to-[#000c]">
						<div className=" text-[#fff] text-[15px] items-center">
							<EyeOutlined className="mr-[10px] text-[16px]" />
							{viewCount}
						</div>
						<div className=" text-[#fff] text-[15px] items-center">
							<FontAwesomeIcon icon={faMessage} className="mr-[10px] text-[16px]" />0
						</div>
						<div className=" text-[#fff] text-[15px] items-center">
							<FontAwesomeIcon icon={faHeart} className="mr-[10px] text-[16px]" />
							{likes}
						</div>
					</ul>
				</div>
				<div className="wrap-info"></div>
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
					storyId={currentStoryIndex}
				/>
			</Modal>
		</div>
	);
}

export default StoryPage;
