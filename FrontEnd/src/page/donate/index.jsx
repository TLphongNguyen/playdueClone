import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { SERVICE_URL } from '~/config';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatPrice } from '~/sevices/formatPrice';

function DonatePage() {
	const userInfo = useSelector((state) => state.user.userInfo);
	const [dataDonate, setDataDonate] = useState([]);
	const id = userInfo.customerId;
	const fetchdata = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/donatehistory/${id}`);
			const formatData = response.data.map((data) => {
				return {
					...data,
					...data.customers,
				};
			});
			setDataDonate(formatData);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchdata();
		console.log(dataDonate);
	}, [dataDonate.length]);
	const columns = [
		{
			title: 'PLAYER',
			dataIndex: 'fullName',
			key: 'player',
		},
		{
			title: 'SỐ TIỀN',
			dataIndex: 'money',
			key: 'amount',
			render: (money) => formatPrice(money),
		},
		{
			title: 'LỜI NHẮN',
			dataIndex: 'des',
			key: 'message',
		},
	];

	return (
		<div className="px-[45px] py-[30px]">
			<h1 className="text-[24px] text-[#354052] mb-[30px] mt-[20px] ">Lịch sử donate</h1>
			<div className="">
				<Table columns={columns} dataSource={dataDonate} bordered pagination={true} />
			</div>
		</div>
	);
}

export default DonatePage;
