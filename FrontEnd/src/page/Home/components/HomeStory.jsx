import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stories from '~/components/stories';
import { useSelector } from 'react-redux';
import { storage } from '~/config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { PlayCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function HomeStory() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [selectedVideo, setSelectedVideo] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const userInfo = useSelector((state) => state.user.userInfo);
	const [videoFile, setVideoFile] = useState(null);
	const handleVideoChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setSelectedVideo(URL.createObjectURL(file));
			setVideoFile(file);
		}
	};

	const clearVideo = () => {
		setSelectedVideo(null);
		setVideoFile(null);
		document.getElementById('input-story').value = ''; // Clear the file input
	};
	const onSubmit = async (data) => {
		// console.log(data);
		let urlVideo = '';
		if (videoFile) {
			const videoFiles = videoFile;
			const storageRef = ref(storage, `story/${videoFiles.name}`);
			const snapshot = await uploadBytes(storageRef, videoFiles);
			urlVideo = await getDownloadURL(snapshot.ref);
		}
		const formatdata = {
			...data,
			src: urlVideo,
			customerId: userInfo.customerId,
		};
		try {
			const response = await axios.post(`${SERVICE_URL}/createstories`, formatdata, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			clearVideo();
			reset();
			setIsModalOpen(false);
		}
	};
	const handleClick = () => {
		document.getElementById('input-story').click();
	};
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<div className="flex overflow-x-auto no-scrollbar">
			<div
				onClick={showModal}
				className="border-[1px] border-solid border-[#e6e5ea] rounded-[15px] mr-[5px] hover:border-[#bdbdbd] cursor-pointer"
			>
				<div className="relative h-[190px] m-[3px] w-[130px]">
					<img src={userInfo?.avt} alt="" className="w-[220px] h-[100%] object-cover top-0 absolute" />

					<div className="absolute bg-[#1f1b1b66] text-center text-[#fff] rounded-t-[12px] text-[50px] pt-[58%] w-[100%] h-[100%]">
						<FontAwesomeIcon className="m-auto" icon={faPlus} />
					</div>
				</div>
				<div className="pt-[15px] pb-[5px] text-center">
					<span className="text-[14px] text-[#000]">Đăng story</span>
				</div>
			</div>
			<Modal
				width={'600px'}
				footer={null}
				height={'430px'}
				open={isModalOpen}
				onCancel={handleCancel}
				className="ant-modal-content"
				closeIcon={null}
				confirmLoading={true}
				style={{ top: '30px' }}
			>
				<form className="h-[100%] flex" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex-1 mt-[35px] mr-[25px] mb-[35px] ml-[35px]">
						<div className="pb-[15px]">
							<h2 className="mb-[5px] font-[700] text-[14px] clock">Mô tả *</h2>
							<textarea
								{...register('description', { required: true })}
								className="border-[1px] border-solid border-[#e3e3e3] h-[120px] rounded-[4px] text-[#565656] px-3 py-2 w-[100%] align-top resize-none focus:border-[#cbcbcb] outline-none"
							></textarea>
							{errors.description && <span className="text-red-500">Mô tả is required</span>}
						</div>

						<div className="mb-[112px]">
							<h2 className="mb-[5px] font-[700] text-[14px]">Hashtags</h2>
							<input
								{...register('hashtags')}
								className="border-[1px] border-solid border-[#e3e3e3] rounded-[4px] text-[#565656] px-3 py-2 w-[100%] focus:border-[#cbcbcb]"
								type="text"
							/>
						</div>

						<button
							type="submit"
							className="bg-[#fb404b] w-[100%] p-[5px] text-[14px] text-[#fff] font-[600] rounded-[4px]"
						>
							Đăng
						</button>
					</div>

					<div className="post-video w-[45%] relative">
						<input type="file" id="input-story" accept="video/*" hidden onChange={handleVideoChange} />
						{selectedVideo ? (
							<div className="h-[365px] mt-[35px] ml-[25px] mr-[35px] mb-[35px] rounded-[15px] relative">
								<video
									src={selectedVideo}
									controls
									className="w-full h-full object-cover rounded-[15px]"
								/>
								<button
									type="button"
									onClick={clearVideo}
									className="absolute w-[30px] top-2 right-2 bg-white p-1 rounded-full shadow-md"
								>
									<CloseOutlined className="text-[#fb404b]" />
								</button>
							</div>
						) : (
							<div
								onClick={() => document.getElementById('input-story').click()}
								className="h-[365px] mt-[35px] ml-[25px] mr-[35px] mb-[35px] bg-gradient-to-b from-[#2eaefd] to-[#f0c281] rounded-[15px] py-[55%] cursor-pointer"
							>
								<div className="text-center text-[#fff] font-[700]">
									<PlayCircleOutlined className="text-[30px] mb-2" />
									<h2>Đăng Story</h2>
								</div>
							</div>
						)}
					</div>
				</form>
			</Modal>

			<Stories />
		</div>
	);
}

export default HomeStory;
