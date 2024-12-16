import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SERVICE_URL } from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '~/redux/slice/userSlice';
import { notification } from 'antd';

function ModalWithdrawal({ close, refreshData }) {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.user.userInfo);
	const [databank, setDatabank] = useState([]);
	const [loading, setLoading] = useState(false);

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
			customerId: userInfo.customerId,
			banks: data.bank,
			amount: data.amount,
			numberBank: data.account,
		};
		try {
			const response = await axios.post(`${SERVICE_URL}/withdraw`, formatData, {
				headers: { 'Content-Type': 'application/json' },
			});
			openNotificationWithIcon('success', 'Success', 'Gửi yêu cầu rút tiền thành công');

			dispatch(updateUserInfo(response.data));
			refreshData();
			close();
		} catch (e) {
			openNotificationWithIcon('error', 'Error', 'Gửi yêu cầu rút tiền thất bại, kiểm tra lại thông tin');
			console.log(e);
		} finally {
			setLoading(false);
		}
	};
	const fetchDataBank = async () => {
		try {
			const response = await axios.get('https://api.vietqr.io/v2/banks');
			setDatabank(response.data.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchDataBank();
	}, []);
	return (
		<div className="p-[15px]">
			<div className="  border-[1px] border-solid border-[#ddd] rounded-t-[3px]">
				<div className="flex items-center bg-[#f5f5f5] py-[10px] px-[15px]">
					<img
						src="https://files.playerduo.net/production/static-files/icon/qr_code.png"
						alt=""
						className="w-[30px] "
					/>
					<div className="ml-[15px]">
						<p className="text-[13px] text-[#333] font-[700] text-left">
							Chuyển khoản trực tiếp ngân hàng, MoMo qua QR code
							<span className="ml-[5px] text-[#ff0000]">(Khuyến nghị)</span>
						</p>
						<p className="text-[11px] text-[#333] text-left font-[300]">
							Nạp dưới 100k phí 1k, trên 100k miễn phí, hoạt động 24/7
						</p>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="p-[15px] bg-[#fff]">
					<div>
						<label htmlFor="bank" className="">
							Ngân hàng
						</label>
						<div className="border-[1px] border-solid border-[#ddd] h-[40px] w-full leading-[40px] rounded-[6px] mb-[20px]">
							<select
								{...register('bank', { required: 'Vui lòng chọn ngân hàng' })}
								className="leading-[40px] outline-none w-full px-[12px]"
							>
								<option value="">Chọn ngân hàng</option>
								{databank.map((data, index) => (
									<option value={data.shortName} key={index}>
										{data.name}
									</option>
								))}
							</select>
							{errors.bank && <p className="text-red-500 text-[12px] mt-[5px]">{errors.bank.message}</p>}
						</div>
					</div>

					<div>
						<label htmlFor="account" className="">
							Số tài khoản
						</label>
						<div className="border-[1px] border-solid border-[#ddd] h-[40px] w-full leading-[40px] rounded-[6px] mb-[20px]">
							<input
								{...register('account', { required: 'Vui lòng nhập số tài khoản' })}
								className="px-[15px] w-full"
								placeholder="Số tài khoản của bạn"
							/>
							{errors.account && (
								<p className="text-red-500 text-[12px] mt-[5px]">{errors.account.message}</p>
							)}
						</div>
					</div>

					<div>
						<label htmlFor="amount" className="">
							Số tiền
						</label>
						<div className="border-[1px] border-solid border-[#ddd] h-[40px] w-full leading-[40px] rounded-[6px] mb-[20px]">
							<input
								{...register('amount', {
									required: 'Vui lòng nhập số tiền',
									pattern: {
										value: /^[0-9]+$/,
										message: 'Số tiền phải là số nguyên dương',
									},
								})}
								className="px-[15px] w-full"
								placeholder="Số tiền muốn Rút (vnd)"
							/>
							{errors.amount && (
								<p className="text-red-500 text-[12px] mt-[5px]">{errors.amount.message}</p>
							)}
						</div>
					</div>

					<div>
						<button
							type="submit"
							disabled={loading}
							className="bg-[#937432] py-2 px-4 w-full text-[#fff] rounded-[6px]"
						>
							{loading ? 'Đang xử lý...' : 'Rút tiền'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ModalWithdrawal;
