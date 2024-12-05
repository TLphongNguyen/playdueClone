import { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

function CreateChat({ id }) {
	const userInfo = useSelector((state) => state.user.userInfo);
	// console.log(userInfo);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		const formatdata = {
			...data,
			senderId: userInfo.customerId,
			receiverId: id,
		};
		try {
			const response = axios.post(`${SERVICE_URL}/chatwith`, formatdata, {
				headers: { 'Content-Type': 'application/json' },
			});
			return response.data;
		} catch (err) {
			console.log(err);
		} finally {
			reset();
		}
		// console.log('Dữ liệu gửi đi:', formatdata);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="p-[25px]">
				<textarea
					{...register('content', {
						required: 'Tin nhắn không được để trống',
						maxLength: {
							value: 500,
							message: 'Tin nhắn không được vượt quá 500 ký tự',
						},
					})}
					className="h-[100px] w-[100%] py-2 px-3 border-[1px] border-[#e3e3e3] border-solid outline-none resize-none rounded-[4px] focus:border-[#333] transition-all"
					placeholder="Message"
				></textarea>
				{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
			</div>
			<div className="p-[15px] border-t-[1px] border-[#e3e3e3] border-solid text-right">
				<button
					type="submit"
					className="bg-[#f0564a] text-[#fff] text-[13px] font-[600] py-2 px-4 rounded-[4px]"
				>
					Gửi tin nhắn
				</button>
			</div>
		</form>
	);
}

export default CreateChat;
