import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faWallet } from '@fortawesome/free-solid-svg-icons';
import { Modal, Table, Tag } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatPrice } from '~/sevices/formatPrice';
import ModalPayLoad from './modalPayload';
import ModalWithdrawal from './modalWithdrawal';
import { SERVICE_URL } from '~/config';
import { formatDate } from '~/sevices/fomatDate';
function PayLoad() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const [databank, setDatabank] = useState([]);
	const [dataBill, setDataBill] = useState([]);
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
	const showModal2 = () => {
		setIsModalOpen2(true);
	};

	const handleOk2 = () => {
		setIsModalOpen2(false);
	};

	const handleCancel2 = () => {
		setIsModalOpen2(false);
	};
	const fetchDataBill = async () => {
		const id = userInfo.customerId;
		try {
			const response = await axios.get(`${SERVICE_URL}/getbillwithdraw/${id}`);
			console.log(response.data);
			setDataBill(response.data);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchDataBill();
	}, [dataBill.length]);
	const columns = [
		{
			title: 'THỜI GIAN',
			dataIndex: 'dateWithdraw',
			key: 'time',
			render: (text) => <span style={{ fontWeight: 'bold' }}>{formatDate(text)}</span>,
		},
		{
			title: 'RÚT VỀ',
			dataIndex: 'banks',
			key: 'bank',
		},
		{
			title: 'TÀI KHOẢN',
			dataIndex: 'numberBank',
			key: 'account',
		},
		{
			title: 'SỐ TIỀN',
			dataIndex: 'amount',
			key: 'amount',
			render: (amount) => `${amount.toLocaleString()} VNĐ`,
		},
		{
			title: 'TÌNH TRẠNG',
			dataIndex: 'status',
			key: 'status',
			align: 'center',
			render: (status) => {
				let color = status === 2 ? 'green' : status === 1 ? 'orange' : 'red';
				let text = status === 2 ? 'Hoàn thành' : status === 1 ? 'Đang xử lý' : 'Từ chối';
				return <Tag color={color}>{text}</Tag>;
			},
		},
	];

	const fetchDataBank = async () => {
		try {
			const response = await axios.get('https://api.vietqr.io/v2/banks');
			setDatabank(response.data.data);
		} catch (err) {
			console.log(err);
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
							<ModalPayLoad close={handleCancel} />
						</Modal>
					</div>
					<div className="w-[25%] ">
						<button
							onClick={showModal2}
							className="w-full h-full text-[18px] py-[18px] px-[15px] bg-[#fff]"
						>
							<FontAwesomeIcon icon={faMoneyBill} />
							<label className="text-[13px] text-[#f0564a] font-[700] mt-2" htmlFor="">
								Rút tiền
							</label>
						</button>
						<Modal
							title="Rút tiền "
							open={isModalOpen2}
							onOk={handleOk}
							onCancel={handleCancel2}
							width={'600px'}
							footer={false}
							confirmLoading={true}
						>
							<ModalWithdrawal close={handleCancel2} refreshData={fetchDataBill} />
						</Modal>
					</div>
				</div>
			</div>
			<h1 className="text-[24px] block text-[#354052] mt-[10px] mb-[20px]">Lịch sử rút tiền</h1>
			<span className="text-[#354052] text-[15px] mb-4 block">
				Các lệnh rút tiền sẽ được chốt lúc 9:00 và duyệt từ 9:00 đến 17:00 hàng ngày. Trừ thứ 7, Chủ Nhật và các
				ngày lễ.
			</span>
			<Table columns={columns} dataSource={dataBill} pagination={false} />
		</div>
	);
}

export default PayLoad;
