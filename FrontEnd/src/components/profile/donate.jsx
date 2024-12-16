import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '~/sevices/formatPrice';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfo } from '~/redux/slice/userSlice';
import { SERVICE_URL } from '~/config';
function Donate({ name, user, price, id, customerId }) {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();

	const onSubmit = async (data) => {
		const des = data.displayName + ': ' + data.message;
		const formatData = {
			customerId,
			id,
			des,
			money: data.amount,
		};
		console.log(formatData);

		try {
			const response = await axios.post(`${SERVICE_URL}/donate`, formatData, {
				headers: { 'Content-Type': 'application/json' },
			});
			dispatch(updateUserInfo(response.data));
		} catch (err) {
			console.log(err);
		} finally {
			reset();
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="p-[15px]">
				<div className="w-[100%] flex">
					<span className="w-[40%] block text-[14px] text-[#354052] font-[600] p-[10px]">Người nhận:</span>
					<span className="w-[60%] block text-[14px] text-[#354052] font-[600] p-[10px]">{name}</span>
				</div>
				<div className="w-[100%] flex">
					<span className="w-[40%] block text-[14px] text-[#354052] font-[600] p-[10px]">
						Số dư hiện tại:
					</span>
					<button className="p-[10px] flex" type="button">
						<span className="text-[#f0564a]">{formatPrice(price)}</span>
						<div className="bg-[#f0564a] text-[#fff] py-[1.5px] px-[6px] text-center rounded-[50%] ml-[10px]">
							<FontAwesomeIcon className="" icon={faPlus} />
						</div>
					</button>
				</div>
				<div className="flex items-center">
					<span className="block w-[40%] text-[14px] text-[#354052] font-[600] p-[10px]">
						Số tiền muốn Donate :
					</span>
					<div className="p-[10px] w-[60%]">
						<input
							{...register('amount', { required: 'Vui lòng nhập số tiền', pattern: /^[0-9]+$/ })}
							className="w-[100%] h-10 bg-[#fff] py-2 px-3 text-[#354052] border-[1px] border-[#e3e3e3] border-solid rounded-[4px]"
							type="text"
						/>
						{errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
					</div>
				</div>
				<div className="flex items-center">
					<span className="block w-[40%] text-[14px] text-[#354052] font-[600] p-[10px]">Tên hiển thị:</span>
					<div className="p-[10px] w-[60%]">
						<input
							defaultValue={user}
							{...register('displayName', { required: 'Vui lòng nhập tên hiển thị' })}
							className="w-[100%] h-10 bg-[#fff] py-2 px-3 text-[#354052] border-[1px] border-[#e3e3e3] border-solid rounded-[4px]"
							type="text"
						/>
						{errors.displayName && (
							<p className="text-red-500 text-sm mt-1">{errors.displayName.message}</p>
						)}
					</div>
				</div>
				<div className="p-[10px]">
					<textarea
						{...register('message')}
						className="h-[100px] w-[100%] py-2 px-3 border-[1px] border-[#e3e3e3] border-solid outline-none resize-none rounded-[4px] focus:border-[#333] transition-all"
						placeholder="Message"
					></textarea>
				</div>
			</div>
			<div className="p-[15px] border-t-[1px] border-[#e3e3e3] border-solid text-right">
				<button
					type="submit"
					className="bg-[#f0564a] text-[#fff] text-[13px] font-[600] py-2 px-4 rounded-[4px]"
				>
					Donate
				</button>
				<button
					type="button"
					className="bg-[#fff] text-[13px] ml-[5px] text-[#354052] border-[1px] border-[#e3e3e3] border-solid  py-2 px-4 rounded-[4px]"
				>
					Đóng
				</button>
			</div>
		</form>
	);
}

export default Donate;
