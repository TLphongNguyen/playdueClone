import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { faHeart, faMessage } from '@fortawesome/free-solid-svg-icons';
import ViewStory from '../viewStory';
function StoryPage({ avt, storyUrl, view, name }) {
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

	return (
		<div className="">
			<div className="w-[196px] h-[310px]" onClick={showModal}>
				<div className="wrap-story relative cursor-pointer">
					<img src={storyUrl} alt="" className="h-[310px] w-[196px] object-cover rounded-[10px]" />
					<ul className="flex justify-between absolute bottom-0 rounded-b-[10px] px-2 pb-2 w-[100%] bg-gradient-to-b from-transparent via-[#0000001a] via-[#0000004d] via-[#00000080] via-[#000000b3] to-[#000c]">
						<div className=" text-[#fff] text-[15px] items-center">
							<EyeOutlined className="mr-[10px] text-[16px]" />
							{view}
						</div>
						<div className=" text-[#fff] text-[15px] items-center">
							<FontAwesomeIcon icon={faMessage} className="mr-[10px] text-[16px]" />0
						</div>
						<div className=" text-[#fff] text-[15px] items-center">
							<FontAwesomeIcon icon={faHeart} className="mr-[10px] text-[16px]" />0
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
				<ViewStory storyUrl={storyUrl} avt={avt} name={name} view={view} />
			</Modal>
		</div>
	);
}

export default StoryPage;
