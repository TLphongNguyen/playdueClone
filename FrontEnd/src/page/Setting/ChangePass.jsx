import { useState } from 'react';
import { Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AUTH_URL } from '~/config';
import Button from '~/components/button';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { notification } from 'antd';

function ChangePass() {
	const [loading, setLoading] = useState(false);
	const userInfo = useSelector((state) => state.user.userInfo || '');
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
	const onSubmit = async (data) => {
		setLoading(true);
		const formatData = {
			...data,
			accountId: userInfo.accountId,
		};
		try {
			const response = await axios.post(`${AUTH_URL}/updatepassword`, formatData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response.data);
			openNotificationWithIcon('success', 'Success', 'Thay đổi mật khẩu thành công');
			reset();
		} catch (err) {
			console.log(err);
			openNotificationWithIcon('error', 'Error', 'thay đổi mật khẩu thất bại, kiểm tra lại thông tin');
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="wrap-content px-[45px] py-[30px]">
			<h2 className="text-[26px] text-[#354052] mb-[30px] mt-[10px] font-[300]">Cài đặt bảo mật tài khoản</h2>
			<div className="w-[50%] flex justify-between items-top h-[54px]">
				<span className="text-[17px] text-[#333] leading-[1.5]">
					Yêu cầu xác thực lại 2 bước để đảm bảo an toàn
				</span>
				<Switch
					className="bg-[#f0564a]"
					checkedChildren={<CheckOutlined />}
					unCheckedChildren={<CloseOutlined />}
					defaultChecked
				/>
			</div>
			<hr className="border-t-[1px] border-[#eee] border-solid my-[20px]" />

			<h2 className="text-[26px] text-[#354052] mb-[30px] mt-[10px] font-[300]">Cài đặt mật khẩu</h2>
			<form onSubmit={handleSubmit(onSubmit)} action="" className="w-[50%]">
				<div className="mb-[22px]">
					<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
						Tên đăng nhập:
					</label>
					<input
						{...register('email', { required: true })}
						className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
					/>
				</div>
				<div className="mb-[22px]">
					<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
						Mật khẩu mới :
					</label>
					<input
						{...register('password', { required: true })}
						type="password"
						className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
					/>
					{errors.password && <p className="text-red-500 text-[12px]">Thông tin này cần phải nhập</p>}
				</div>
				<div className="mb-[22px]">
					<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
						Xác nhận lại mật khẩu:
					</label>
					<input
						{...register('againpassword', { required: true })}
						type="password"
						className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
					/>
					{errors.againpassword && <p className="text-red-500 text-[12px]">Thông tin này cần phải nhập</p>}
				</div>
				<Button type="submit" text={'Cập nhật tài khoản'} />
			</form>
			{loading && <CircularProgress />}
		</div>
	);
}

export default ChangePass;
