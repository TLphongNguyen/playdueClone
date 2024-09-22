import Header from '~/Layout/components/header';
import Sidebar from './sidebar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '~/redux/slice/userSlice'; // Giả sử đây là slice của bạn
import axios from 'axios';
import { AUTH_URL } from '~/config';

function DefaultLayout({ children, showSidebar = true, sidebar }) {
	const dispatch = useDispatch();

	useEffect(() => {
		// Lấy token từ localStorage khi ứng dụng khởi chạy
		const token = localStorage.getItem('token');
		if (token) {
			// Gọi API để lấy lại thông tin người dùng và cập nhật vào Redux
			const fetchCustomer = async () => {
				try {
					const response = await axios.get(`${AUTH_URL}/customer`, {
						headers: {
							authorization: token,
						},
					});

					// Cập nhật thông tin người dùng vào Redux
					dispatch(setUserInfo(response.data));
				} catch (error) {
					console.error('Error fetching customer:', error);
					// Nếu có lỗi, có thể muốn xoá token hoặc điều hướng lại đến trang đăng nhập
					localStorage.removeItem('token');
				}
			};

			fetchCustomer();
		}
	}, [dispatch]); // Chỉ chạy một lần khi ứng dụng khởi chạy
	const SideBarItem = sidebar;
	return (
		<div className="w-[100%]">
			<Header className="fixed" />
			<div className="wrap-body flex h-[93vh]">
				{showSidebar && <Sidebar content={<SideBarItem />} className="fixed" />}
				<div
					className={`wrap-content w-[100%] overflow-y-auto no-scrollbar ${showSidebar ? 'ml-[sidebar-width]' : ''}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
