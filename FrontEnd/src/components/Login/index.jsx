import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserInfo } from '~/redux/slice/userSlice';
import { AUTH_URL } from '~/config';
import { useDispatch } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import { notification } from 'antd';
import { SOCKET_URL } from '~/config';

import io from 'socket.io-client';
const socket = io(SOCKET_URL);

function Login({ toggleComponent }) {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	// const userInfo = useSelector((state) => state.user.userInfo);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const openNotificationWithIcon = (type, message, description) => {
		notification[type]({
			message: message,
			description: description,
		});
	};
	const navigate = useNavigate();
	const onSubmit = async (data) => {
		setLoading(true);
		try {
			const response = await axios.post('http://localhost:3003/api/auth/login', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const token = response.data;
			localStorage.setItem('token', token);
			openNotificationWithIcon('success', 'Success', 'Đăng nhập thành công');
			const userInfo = await fetchCustomer(token);
			// console.log(userInfo);

			socket.emit('registerUser', userInfo.customerId);
			if (userInfo.account.accountTypeId !== 1) {
				navigate('/');
			}

			navigate('/admin/home');
		} catch (error) {
			console.error('Lỗi khi đăng ký:', error.response ? error.response.data : error.message);
			openNotificationWithIcon('error', 'Error', 'Đăng nhập thất bại, kiểm tra lại thông tin');
		} finally {
			setLoading(false);
		}
	};
	const fetchCustomer = async (token) => {
		try {
			const response = await axios.get(`${AUTH_URL}/customer`, {
				headers: {
					authorization: token,
				},
			});

			dispatch(setUserInfo(response.data));
			return response.data;
		} catch (error) {
			console.error('Error fetching customer:', error);
		}
	};

	return (
		<div className="wrap-content bg-[#fff] rounded-[8px] shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]">
			<div className="py-[10px] px-[30px] h-[100%]">
				<div className="mt-[30px] mb-[50px] text-center">
					<img
						className="w-[55px] bg-[#f0564a] rounded-[10px] mx-auto"
						src="https://files.playerduo.net/production/static-files/logo.png"
						alt=""
					/>
					<h1 className="my-[10px] text-[20px] text-[#f0564a] font-[600]">PlayerDuo</h1>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="">
					<input
						{...register('email', { required: true })}
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
						placeholder="Tên đăng nhập hoặc email"
					/>
					{errors.email && <p className="text-red-500">vui lòng nhập email</p>}

					<input
						{...register('password', { required: true })}
						type="password"
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
						placeholder="Mật khẩu"
					/>
					{errors.password && <p className="text-red-500">This field is required</p>}

					<span className="w-[100%] text-right block mt-[5px] mb-[10px]">
						<a href="/" className="text-[#1e1f24] hover:text-[#f0564a]">
							Quên mật khẩu?
						</a>
					</span>

					<button
						type="submit"
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[25px] px-[15px] bg-[#f0564a] text-[#fff] text-[15px] font-[600] hover:bg-[#ef4b3f]"
					>
						Đăng nhập
					</button>
				</form>
				<button
					type="submit"
					className="h-[42px] leading-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] px-[15px] border-[1px] border-solid border-[#444] text-[#444] text-[15px]"
				>
					<FontAwesomeIcon className="mr-2 text-[#3f5ead] text-[25px]" icon={faFacebook} />
					Đăng nhập bằng FaceBook
				</button>
				<span onClick={toggleComponent} className="mt-[60px] mb-[15px] w-[100%] text-center block">
					<span className="text-[#1e1f24] hover:text-[#f0564a] underline cursor-pointer">
						Đăng ký tài khoản
					</span>
				</span>
			</div>
			{loading && <LinearProgress />}
		</div>
	);
}

export default Login;
