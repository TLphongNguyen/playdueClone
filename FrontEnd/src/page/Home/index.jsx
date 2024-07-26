import { useState } from 'react';
import Stories from '~/components/stories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

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
		<div className="wrap-content mt-[34px] flex">
			<div
				onClick={showModal}
				className="border-[1px] border-solid border-[#e6e5ea] rounded-[15px] mr-[5px] hover:border-[#bdbdbd] cursor-pointer"
			>
				<div className="relative h-[190px] m-[3px] w-[130px]">
					<img
						src="https://files.playerduo.net/production/images/avatar44.png"
						alt=""
						className="w-[220px] h-[100%] object-cover top-0 absolute"
					/>

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
				<form className="h-[100%] flex" action="">
					<div className="flex-1 mt-[35px] mr-[25px] mb-[35px] ml-[35px]">
						<div className="pb-[15px]">
							<h2 className="mb-[5px] font-[700] text-[14px] clock">Mô tả *</h2>

							<textarea
								className="border-[1px] border-solid border-[#e3e3e3] h-[120px] rounded-[4px] text-[#565656] px-3 py-2 w-[100%] align-top resize-none focus:border-[#cbcbcb] outline-none"
								name=""
								id=""
							></textarea>
						</div>
						<div className="mb-[112px]">
							<h2 className="mb-[5px] font-[700] text-[14px] ">Hashtags</h2>
							<input
								className="border-[1px] border-solid border-[#e3e3e3] rounded-[4px] text-[#565656] px-3 py-2 w-[100%]  focus:border-[#cbcbcb]"
								type="text"
							/>
						</div>
						<button
							className="bg-[#fb404b] w-[100%] p-[5px] text-[14px] text-[#fff] font-[600] rounded-[4px]"
							onOk={handleOk}
						>
							Đăng
						</button>
					</div>
					<div className="post-video w-[45%]">
						<input type="file" name="" id="input-story" hidden />
						<div
							onClick={handleClick}
							className="h-[365px] mt-[35px] ml-[25px] mr-[35px] mb-[35px] bg-gradient-to-b from-[#2eaefd] to-[#f0c281] rounded-[15px] py-[55%] cursor-pointer"
						>
							<div className="text-center text-[#fff] font-[700]">
								<PlayCircleOutlined className="text-[30px]  mb-2" />
								<h2>Đăng Story</h2>
							</div>
						</div>
					</div>
				</form>
			</Modal>

			<Stories />
		</div>
	);
}

export default Home;
