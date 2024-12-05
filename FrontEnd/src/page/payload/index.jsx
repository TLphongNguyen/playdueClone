import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faWallet } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatPrice } from '~/sevices/formatPrice';
import ModalPayLoad from './modalPayload';

function PayLoad() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [databank, setDatabank] = useState([]);
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

	const fetchDataBank = async () => {
		try {
			const response = await axios.get('https://api.vietqr.io/v2/banks');
			setDatabank(response.data.data);
		} catch (err) {
			console.log(err);
		} finally {
			console.log(databank);
		}
	};
	useEffect(() => {
		fetchDataBank();
	}, []);
	return (
		<div className="px-[45px] py-[30px] ">
			<h1 className="text-[24px] block text-[#354052] mt-[10px] mb-[20px]">Ví</h1>
			<div className="row mt-[30px] mb-[40px] mx-[-15px]">
				<div className=" w-[50%] rounded-[5px] border-[1px] border-solid border-[#e6eaee] flex">
					<div className="w-[50%] py-[18px] px-[15px]">
						<label htmlFor="" className="text-[#354052] text-[12px] mb-[10px] uppercase font-[700]">
							Số dư hiện tại
						</label>
						<span className="text-[24px] text-[#f0564a]">{formatPrice(userInfo.money)}</span>
					</div>
					<div className="w-[25%]">
						<button onClick={showModal} className="w-full h-full text-[18px] py-[18px] px-[15px] bg-[#fff]">
							<FontAwesomeIcon icon={faWallet} />
							<label className="text-[13px] text-[#f0564a] font-[700] mt-2" htmlFor="">
								Nạp thêm
							</label>
						</button>
						<Modal
							title="Nạp tiền vào player duo"
							open={isModalOpen}
							onOk={handleOk}
							onCancel={handleCancel}
							width={'600px'}
							footer={false}
							confirmLoading={true}
						>
							<ModalPayLoad />
						</Modal>
					</div>
					<div className="w-[25%] ">
						<button className="w-full h-full text-[18px] py-[18px] px-[15px] bg-[#fff]">
							<FontAwesomeIcon icon={faMoneyBill} />
							<label className="text-[13px] text-[#f0564a] font-[700] mt-2" htmlFor="">
								Rút tiền
							</label>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PayLoad;
