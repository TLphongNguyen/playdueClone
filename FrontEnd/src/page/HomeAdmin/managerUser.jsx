import { useState, useEffect, useRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Switch } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Joe Black',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Jim Green',
		age: 32,
		address: 'Sydney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
	},
];
function ManagerUser() {
	const [searchText, setSearchText] = useState('');
	const [searchedColumn, setSearchedColumn] = useState('');
	const searchInput = useRef(null);
	const [dataUser, setDataUser] = useState([]);
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};
	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText('');
	};
	const fetchData = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getuser`);

			const data = response.data;
			const formatData = data.map((item, index) => {
				return {
					...item,
					...item.accountType,
					...item.customers[0],
				};
			});
			setDataUser(formatData);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchData();
		console.log(dataUser);
	}, [dataUser.length]);
	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div
				style={{
					padding: 8,
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: 'block',
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{
							width: 90,
						}}
					>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters)}
						size="small"
						style={{
							width: 90,
						}}
					>
						Reset
					</Button>
					<Button
						// type="link"
						size="small"
						onClick={() => {
							confirm({
								closeDropdown: false,
							});
							setSearchText(selectedKeys[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Filter
					</Button>
					<Button
						// type="link"
						size="small"
						onClick={() => {
							close();
						}}
					>
						close
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? '#1677ff' : undefined,
				}}
			/>
		),
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		filterDropdownProps: {
			onOpenChange(open) {
				if (open) {
					setTimeout(() => searchInput.current?.select(), 100);
				}
			},
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ffc069',
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	});
	const columns = [
		{
			title: 'Avatar',
			dataIndex: 'avt',
			key: 'avt',
			width: '10%',
			render: (text) => (
				<img src={text} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
			),
		},
		{
			title: 'Tên và Biệt danh',
			key: 'fullNameAndNickname',
			width: '15%',
			render: (text, record) => (
				<span>
					<strong>{record.fullName}</strong> ({record.nickname})
				</span>
			),
		},

		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			width: '15%',
			align: 'center',
			...getColumnSearchProps('email'),
		},
		{
			title: 'Địa chỉ',
			dataIndex: 'address',
			key: 'address',
			width: '15%',
			...getColumnSearchProps('address'),
		},
		{
			title: 'Giới tính',
			dataIndex: 'gender',
			key: 'gender',
			width: '10%',
			filters: [
				{ text: 'Nam', value: 'Nam' },
				{ text: 'Nữ', value: 'Nữ' },
			],
			onFilter: (value, record) => record.gender === value,
		},
		{
			title: 'Số tiền',
			dataIndex: 'money',
			key: 'money',
			width: '10%',
			sorter: (a, b) => a.money - b.money,
			render: (text) => `${text.toLocaleString()} VNĐ`,
		},
		{
			title: 'Loại tài khoản',
			dataIndex: 'accountTypeName',
			key: 'accountTypeName',
			width: '15%',
			...getColumnSearchProps('accountTypeName'),
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			key: 'status',
			width: '10%',
			render: (text, record) => (
				<Switch
					checked={text === 1} // Nếu trạng thái là 1, Switch sẽ được bật (active)
					onChange={(checked) => handleStatusChange(record.accountId, checked)} // Gọi hàm khi thay đổi trạng thái
				/>
			),
		},
	];
	const handleStatusChange = async (accountId, checked) => {
		const newStatus = checked ? 1 : 0;
	};
	return (
		<div className="px-16 py-10 w-[100%] h-[100%]">
			<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<h2 className="text-[26px] leading-[30px] font-bold text-black">Danh sách người dùng</h2>
				<div className=""></div>
			</div>
			<div className="w-full">
				<Table columns={columns} dataSource={dataUser} />
			</div>
		</div>
	);
}

export default ManagerUser;
