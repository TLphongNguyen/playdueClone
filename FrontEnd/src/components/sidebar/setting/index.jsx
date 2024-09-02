import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
	faUsers,
	faSliders,
	faClockRotateLeft,
	faWallet,
	faCreditCard,
	faLink,
	faUserGroup,
	faCalendarDays,
	faBan,
	faBook,
	faGear,
} from '@fortawesome/free-solid-svg-icons';
function Setting() {
	const items = [
		{
			key: 'sub1',
			label: 'TÀI KHOẢN',
			children: [
				{
					key: '1',
					label: 'Thông tin cá nhân',
					icon: <UserOutlined />,
				},
				{
					key: '2',
					label: 'Theo dõi Players',
					icon: <FontAwesomeIcon icon={faUsers} />,
				},
				{
					key: '3',
					label: ' Thống kê',
					icon: <FontAwesomeIcon icon={faSliders} />,
				},
				{
					key: 'sub11',
					label: 'Cài Đặt',
					icon: <FontAwesomeIcon icon={faGear} />,
					children: [
						{
							key: '21',
							label: 'Email',
						},
						{
							key: '22',
							label: 'Tài khoản và mật khẩu',
						},
						{
							key: '23',
							label: 'Khoá bảo vệ',
						},
						{
							key: '24',
							label: 'Vip',
						},
						{
							key: '25',
							label: 'Hiển thị',
						},
						{
							key: '26',
							label: 'Cài đặt nhận thông báo',
						},
					],
				},
				{
					key: '4',
					label: 'Lịch sử giao dịch',
					icon: <FontAwesomeIcon icon={faClockRotateLeft} />,
					children: [
						{
							key: '41',
							label: 'Lịch sử donate',
						},
						{
							key: '42',
							label: 'Lịch sử duo',
						},
						{
							key: '43',
							label: 'Lịch sử tạo code',
						},
						{
							key: '44',
							label: 'Biến động số dư',
						},
						{
							key: '45',
							label: 'Lịch sử mua thẻ',
						},
					],
				},
				{
					key: '5',
					label: 'Thanh toán',
					icon: <FontAwesomeIcon icon={faCreditCard} />,
				},
				{
					key: '6',
					label: 'Ví',
					icon: <FontAwesomeIcon icon={faWallet} />,
				},
			],
		},
		{
			type: 'divider',
		},
		{
			key: 'sub2',
			label: 'VÍ ĐIỆN TỬ ',
			children: [
				{
					key: 'sub3',
					label: 'Cài Đặt',
					icon: <FontAwesomeIcon icon={faCreditCard} />,
					children: [
						{
							key: 'sub31',
							label: 'Thông tin',
						},
						{
							key: 'sub32',
							label: 'Lịch sử',
						},
					],
				},
				{
					key: 'sub22',
					label: ' Link Pay',
					icon: <FontAwesomeIcon icon={faLink} />,
				},
			],
		},
		{
			type: 'divider',
		},
		{
			key: 'sub4',
			label: 'PLAYER',
			children: [
				{
					key: '9',
					label: 'Tổng quan',
					icon: <UserOutlined />,
				},
				{
					key: '10',
					label: 'Khách hàng thân thiết',
					icon: <FontAwesomeIcon icon={faUserGroup} />,
				},
				{
					key: 'sub13',
					label: 'Cài Đặt',
					icon: <FontAwesomeIcon icon={faGear} />,
					children: [
						{
							key: '131',
							label: 'Url',
						},
						{
							key: '132',
							label: 'Thông tin Player',
						},
						{
							key: '133',
							label: 'Albums Player',
						},
						{
							key: '134',
							label: 'Cài đặt Duo',
						},
						{
							key: '135',
							label: 'Khác',
						},
					],
				},
				{
					key: '12',
					label: 'Lịch sử nhận Duo, Donate',
					icon: <FontAwesomeIcon icon={faCalendarDays} />,
					children: [
						{
							key: '121',
							label: 'Lịch sử nhận duo',
						},
						{
							key: '122',
							label: 'Lịch sử nhận donate',
						},
					],
				},
				{
					key: '13',
					label: 'Danh sách chặn User',
					icon: <FontAwesomeIcon icon={faBan} />,
				},
				{
					key: '14',
					label: 'Hướng Dẫn Player',
					icon: <FontAwesomeIcon icon={faBook} />,
				},
				{
					key: '15',
					label: 'Link Player',
					icon: <FontAwesomeIcon icon={faLink} />,
				},
			],
		},
		{
			key: 'grp',
			label: 'DONATE',

			children: [
				{
					key: 'subSetting',
					label: 'Cài Đặt',
					icon: <FontAwesomeIcon icon={faGear} />,
				},
			],
		},
	];
	return (
		<div className="wrap-content w-[476px] bg-[#fafafa] h-[100%] pt-5">
			<Menu
				style={{
					backgroundColor: '#fafafa',
				}}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				items={items}
			/>
		</div>
	);
}

export default Setting;
