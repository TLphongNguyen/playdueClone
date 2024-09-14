import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { AUTH_URL } from '~/config';
import { notification } from 'antd';
function Register({ toggleComponent }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
	} = useForm();

	const password = watch('password');

	const openNotificationWithIcon = (type, message, description) => {
		notification[type]({
			message: message,
			description: description,
		});
	};
	const onSubmit = async (data) => {
		console.log(data);
		try {
			const response = await axios.post(`${AUTH_URL}/register`, data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			openNotificationWithIcon('success', 'Success', 'Đăng kí thành công');
			console.log('Đăng ký thành công:', response.data);
		} catch (err) {
			openNotificationWithIcon('error', 'Error', 'Đăng kí thất bại, kiểm tra lại thông tin');
			console.log(err);
		}
	};
	const onReCAPTCHAChange = (value) => {
		setValue('recaptcha', value);
	};

	return (
		<div className="wrap-content">
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
						{...register('email', {
							required: 'Email là bắt buộc',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Địa chỉ email không hợp lệ',
							},
						})}
						type="email"
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
						placeholder="Email"
					/>
					{errors.email && <p className="text-red-500">{errors.email.message}</p>}

					<input
						{...register('password', {
							required: 'Mật khẩu là bắt buộc',
						})}
						type="password"
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
						placeholder="Mật khẩu"
					/>
					{errors.password && <p className="text-red-500">{errors.password.message}</p>}

					<input
						{...register('confirmPassword', {
							required: 'Nhập lại mật khẩu là bắt buộc',
							validate: (value) => value === password || 'Mật khẩu không khớp',
						})}
						type="password"
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
						placeholder="Nhập lại mật khẩu"
					/>
					{errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

					<ReCAPTCHA
						className="mx-auto w-[100%] mt-[15px]"
						sitekey="Your client site key"
						onChange={onReCAPTCHAChange}
					/>
					{errors.recaptcha && <p className="text-red-500">Vui lòng xác minh rằng bạn không phải là robot</p>}
				</form>
				<div className="flex justify-between items-center">
					<span onClick={toggleComponent} className="mb-[15px] w-[100%] text-left block">
						<span className="text-[#1e1f24] hover:text-[#f0564a] underline">Đăng nhập tài khoản</span>
					</span>
					<span className="w-[100%] text-right block mb-[10px]">
						<a href="/" className="text-[#1e1f24] hover:text-[#f0564a]">
							Quên mật khẩu?
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
export default Register;
