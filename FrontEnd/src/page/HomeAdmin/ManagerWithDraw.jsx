import { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
import { Table, Tabs, Tag, Popconfirm, Button } from 'antd';
import { formatDate } from '~/sevices/fomatDate';
function ManagerWithDraw() {
	const { TabPane } = Tabs;
	const [data, setData] = useState([]);
	const [pendingData, setPendingData] = useState([]);
	const fetchData = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getbillwithstatus`);
			const formatdata = response.data.map((data) => {
				return {
					...data,
					...data.customer,
				};
			});
			setPendingData(formatdata);
		} catch (error) {
			console.log(error);
		}
	};
	const fetchDataAll = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getbillall`);
			const formatdata = response.data.map((data) => {
				return {
					...data,
					...data.customer,
				};
			});
			setData(formatdata);
		} catch (error) {
			console.log(error);
		}
	};
	const confirmDelete = async (key) => {
		const data = {
			customerId: key.customerId,
			status: 3,
			id: key.withdrawalId,
			amount: key.amount,
		};
		console.log(data);

		try {
			await axios.post(`${SERVICE_URL}/upadateStatus`, data, {
				headers: { 'Content-Type': 'application/json' },
			});
			fetchData();
		} catch (error) {
			console.log(error);
		}
	};

	const confirmAction = async (key) => {
		const data = {
			status: 2,
			id: key.withdrawalId,
		};
		try {
			await axios.post(`${SERVICE_URL}/upadateStatus`, data, {
				headers: { 'Content-Type': 'application/json' },
			});
			fetchData();
		} catch (error) {
			console.log(error);
		}
	};

	const cancel = () => {
		console.log('Canceled action');
	};
	const columns = [
		{
			title: 'Avatar',
			dataIndex: 'avt',
			key: 'avt',
			render: (text) => (
				<img src={text} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
			),
		},
		{
			title: 'Tên người rút',
			dataIndex: 'fullName',
			key: 'Name',
			render: (text) => <span style={{ fontWeight: 'bold' }}>{text}</span>,
		},
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
			title: 'Actions',
			key: 'actions',
			align: 'center',
			render: (_, record) => (
				<div style={{ display: 'flex', gap: '8px', width: '100%', justifyContent: 'center' }}>
					<Popconfirm
						title="Xác nhận hóa đơn rút?"
						onConfirm={() => confirmAction(record)}
						onCancel={cancel}
						okText="Yes"
						cancelText="No"
					>
						<Button type="primary">Xác nhận</Button>
					</Popconfirm>

					<Popconfirm
						title="Xác nhận từ chối ?"
						onConfirm={() => confirmDelete(record)}
						onCancel={cancel}
						okText="Yes"
						cancelText="No"
					>
						<Button danger>Từ chối</Button>
					</Popconfirm>
				</div>
			),
		},
	];
	const columns2 = [
		{
			title: 'Avatar',
			dataIndex: 'avt',
			key: 'avt',
			// width: '10%',
			render: (text) => (
				<img src={text} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
			),
		},
		{
			title: 'Tên người rút',
			dataIndex: 'fullName',
			key: 'Name',
			render: (text) => <span style={{ fontWeight: 'bold' }}>{text}</span>,
		},
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

	useEffect(() => {
		fetchData();
	}, [pendingData.lenght]);
	useEffect(() => {
		fetchDataAll();
	}, [data.lenght]);
	return (
		<div className="px-16 py-10 w-[100%] h-[100%]">
			<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<h2 className="text-[26px] leading-[30px] font-bold text-black">Quản lý rút tiền</h2>
				<div className=""></div>
			</div>
			<div className="table w-[100%]">
				<Tabs defaultActiveKey="1">
					<TabPane tab="Đơn rút đang chờ xác nhận" key="1">
						<div className="table w-[100%]">
							<Table
								columns={columns}
								dataSource={pendingData}
								rowKey={(record) => record.withdrawalId}
							/>
						</div>
					</TabPane>
					<TabPane tab="Tất cả hóa đơn rút" key="2">
						<div className="table w-[100%]">
							<Table columns={columns2} dataSource={data} rowKey={(record) => record.withdrawalId} />
						</div>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

export default ManagerWithDraw;
