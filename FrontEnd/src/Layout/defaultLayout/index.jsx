import Header from '~/Layout/components/header';
import Sidebar from './sidebar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '~/redux/slice/userSlice'; // Giả sử đây là slice của bạn
import axios from 'axios';
import { AUTH_URL } from '~/config';
import Cookies from 'js-cookie';

function DefaultLayout({ children, showSidebar = true, sidebar }) {
	const dispatch = useDispatch();

	const fetchCustomer = async (token) => {
		try {
			const response = await axios.get(`${AUTH_URL}/customer`, {
				headers: {
					authorization: token,
				},
			});
			dispatch(setUserInfo(response.data));
		} catch (error) {
			console.error('Error fetching customer:', error);
			localStorage.removeItem('token');
		}
	};
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			fetchCustomer(token);
		}
	}, [dispatch]);
	const SideBarItem = sidebar;
	return (
		<div className="overflow-hidden no-scrollbar ">
			<Header className="fixed" />
			<div className="wrap-body flex h-[93vh]">
				{showSidebar && <Sidebar content={<SideBarItem />} className="fixed" />}
				<div
					className={`wrap-content  overflow-hidden overflow-y-auto no-scrollbar ${showSidebar ? 'ml-[sidebar-width] w-[1685px]' : 'w-full'}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
