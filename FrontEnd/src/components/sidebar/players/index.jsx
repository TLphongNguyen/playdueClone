import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
function Player() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const handleClick = () => {
		document.getElementById('input-story').click();
	};
	return (
		<div className="wrap-content">
			<div className="flex items-center px-[10px] pb-[20px] cursor-pointer" onClick={showModal}>
				<div className="flex justify-center items-center w-[36px] h-[36px] bg-[#d9d9d9] mr-[5px] border-[1px] border-solid border-[#f0564a] rounded-[50%]">
					<FontAwesomeIcon className="text-[18px] text-[#fff] font-[700]" icon={faPlus} />
				</div>
				<p className="text-[14px] text-[#333] leading-[1.42857143] hover:text-[#f0564a]">Đăng Story của bạn</p>
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
		</div>
	);
}

export default Player;
