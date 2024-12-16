import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
import { Table, Tag, Typography } from 'antd';
import { formatDate } from '~/sevices/fomatDate';
import dayjs from 'dayjs';
function ManagerBill() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const fethdata = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getbill`);
			const formatData = response.data.map((item) => {
				return {
					...item,
					...item.player,
					...item.customers,
				};
			});
			setData(formatData);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	const columns = [
		{ title: 'Tên khách hàng', dataIndex: ['customers', 'fullName'], key: 'customerName' },
		{ title: 'Tên người chơi', dataIndex: ['player', 'fullName'], key: 'playerName' },
		{ title: 'Số giờ', dataIndex: 'hour', key: 'hour' },
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			key: 'status',
			render: (status) => {
				let color = 'blue';
				if (status === 'accepted') color = 'green';
				else if (status === 'completed') color = 'gold';
				else if (status === 'canceled') color = 'red';

				return <Tag color={color}>{status.toUpperCase()}</Tag>;
			},
		},
	];
	const expandedRowRender = (record) => {
		const detailsColumns = [
			{
				title: 'Giờ bắt đầu',
				dataIndex: 'startTime',
				key: 'startTime',
				render: (startTime) => (startTime ? dayjs(startTime).format('HH:mm DD/MM/YYYY ') : 'N/A'),
			},
			{
				title: 'Giờ kết thúc',
				dataIndex: 'endTime',
				key: 'endTime',
				render: (endTime) => (endTime ? dayjs(endTime).format('HH:mm DD/MM/YYYY ') : 'N/A'),
			},
			{
				title: 'Tổng tiền',
				dataIndex: 'totalPrice',
				key: 'totalPrice',
			},
			{
				title: 'Đánh giá',
				dataIndex: 'Rating',
				key: 'Rating',
				render: (rating) => rating || 'N/A',
			},
			{
				title: 'Comment',
				dataIndex: 'comment',
				key: 'comment',
				render: (comment) => comment || 'No Comment',
			},
		];

		return (
			<Table columns={detailsColumns} dataSource={record.rentDetails} pagination={false} rowKey="rentDetailsId" />
		);
	};
	useEffect(() => {
		fethdata();
	}, [data.length]);
	return (
		<div className="">
			<div className="px-16 py-10 w-[100%] h-[100%]">
				<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<h2 className="text-[26px] leading-[30px] font-bold text-black">Quản lý đơn thuê</h2>
					<div className=""></div>
				</div>

				<div className="table w-[100%]">
					<Table
						columns={columns}
						dataSource={data}
						rowKey="rentId"
						loading={loading}
						expandable={{ expandedRowRender }}
					/>
				</div>
			</div>
		</div>
	);
}

export default ManagerBill;
