import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Select, Modal } from 'antd';
import { formatPrice } from '~/sevices/formatPrice';
import { useSelector } from 'react-redux';
import ModalPayLoad from '~/page/payload/modalPayload';
function RentModal({ name, price }) {
	const options = [];
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPrice, setIsPrice] = useState(price);
	const userInfo = useSelector((state) => state.user.userInfo);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	for (let i = 1; i <= 24; i++) {
		options.push({
			value: `${i} `,
			label: `${i} giờ`,
		});
	}
	const handleChange = (value) => {
		setIsPrice(value * price);
	};
	return (
		<div>
			<div className="p-[15px]">
				<div className="w-[100%] flex justify-between">
					<span className="w-[40%] block text-[14px] text-[#354052] font-[600] p-[10px]">Player:</span>
					<span className="w-[40%] block text-[14px] text-[#354052] font-[600] p-[10px]">{name}</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="block w-[40%] text-[14px] text-[#354052] font-[600] p-[10px]">
						Thời gian muốn thuê
					</span>
					<div className="p-[10px] w-[40%]">
						<Select
							defaultValue="1 giờ"
							style={{
								width: '100%',
								height: '100%',
								border: '1px solid rgba(0,0,0,0.1)',
								borderRadius: '5px',
								fontSize: '12px',
							}}
							options={options}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span className="block w-[40%] text-[14px] text-[#354052] font-[600] p-[10px]">Chi phí :</span>
					<div className="p-[10px] w-[40%]">
						<p className="">{formatPrice(isPrice)}</p>
					</div>
				</div>
				<div className="w-[100%] flex justify-between	">
					<span className="w-[40%] block text-[14px] text-[#354052] font-[600] p-[10px]">
						Số dư hiện tại:
					</span>
					<button className="p-[10px] w-[40%] flex">
						<span className="text-[#f0564a]">{formatPrice(userInfo.money)}</span>
						<div
							onClick={showModal}
							className="bg-[#f0564a] text-[#fff] py-[1.5px] px-[6px] text-center rounded-[50%] ml-[10px]"
						>
							<FontAwesomeIcon className="" icon={faPlus} />
						</div>
					</button>
				</div>

				<div className="p-[10px]">
					<textarea
						className="h-[100px] w-[100%] py-2 px-3 border-[1px] border-[#e3e3e3] border-solid outline-none resize-none rounded-[4px] focus:border-[#333] transition-all"
						placeholder="Message"
						name=""
						id=""
					></textarea>
				</div>
			</div>
			<div className="p-[15px] border-t-[1px] border-[#e3e3e3] border-solid text-right">
				<button
					type="submit"
					className="bg-[#f0564a] text-[#fff] text-[13px] font-[600] py-2 px-4 rounded-[4px]"
				>
					Thuê
				</button>
				<button
					type="button"
					className="bg-[#fff] text-[13px] ml-[5px] text-[#354052] border-[1px] border-[#e3e3e3] border-solid  py-2 px-4 rounded-[4px]"
				>
					Đóng
				</button>
			</div>
			<Modal
				title="Nạp tiền vào player duo"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				width={'600px'}
				footer={false}
			>
				<ModalPayLoad />
			</Modal>
		</div>
	);
}

export default RentModal;
