import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker, Radio, Drawer } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { storage } from '~/config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AUTH_URL, SERVICE_URL } from '~/config';
import { updateUserInfo } from '~/redux/slice/userSlice';
import Button from '~/components/button';
import DetailPlayer from '~/components/detailPlayer';
import Loading from '~/components/loading';
import GoongMap from '~/components/goongmap';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { formatPrice } from '~/sevices/formatPrice';

function InfoPlayer() {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.user.userInfo || '');
	const [imageSrc, setImageSrc] = useState(userInfo.avt);
	const [img, setImg] = useState('');
	const [birthday, setBirthday] = useState(userInfo.birthday);
	const [gender, setGender] = useState(userInfo.gender ? userInfo.gender : '');
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [sumAmout, setSumAmout] = useState('');
	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			fullName: userInfo.fullName,
			nickname: userInfo.nickname,
			birthday: userInfo.birthday,
			address: userInfo.address,
		},
	});
	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImageSrc(reader.result);
			};
			reader.readAsDataURL(file);
			setImg(file);
		}
	};
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};
	const fetchdata = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getGames`);
			setData(response.data);
			return response;
		} catch (err) {
			console.log(err);
		}
	};
	const fetchSumAmount = async (id) => {
		console.log(id);

		try {
			const response = await axios.get(`${SERVICE_URL}/getsumrecharge/${id}`);
			setSumAmout(response.data.data);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchSumAmount(userInfo.customerId);
		console.log(sumAmout);
	}, [sumAmout]);
	useEffect(() => {
		fetchdata();
	}, []);
	const onSubmit = async (data) => {
		setLoading(true);
		let imageUrl = '';

		if (img) {
			const imageFile = img;
			const storageRef = ref(storage, `avatar/${imageFile.name}`);
			const snapshot = await uploadBytes(storageRef, imageFile);
			imageUrl = await getDownloadURL(snapshot.ref);
		}
		const formattedData = {
			...data,
			customerId: userInfo.customerId,
			birthday: birthday || userInfo.birthday,
			gender: gender || userInfo.gender,
			avt: imageUrl || userInfo.avt,
		};
		try {
			const response = await axios.post(`${AUTH_URL}/updateCustomer`, formattedData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			dispatch(updateUserInfo(response.data));
			console.log('Response:', response.data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	const onChangeDate = (date, dateString) => {
		console.log(dateString);

		setBirthday(dateString);
	};
	const onChange = (e) => {
		setGender(e.target.value);
	};
	const handleClick = () => {
		document.querySelector('#inputimg').click();
	};
	return (
		<div className="wrap-content px-[45px] py-[30px]">
			<div className="flex">
				<div className="pr-[15px] w-[33.33333%]">
					<div className="border-[1px] border-solid border-[#e6eaee]	py-[20px] rounded-[5px] text-center">
						<p className="text-[#90959c] text-[11px] font-[700]">TỔNG TIỀN ĐÃ NẠP</p>
						<span className="text-[#f0564a] text-[30px]">{formatPrice(sumAmout)}</span>
					</div>
				</div>
				<div className="px-[15px] w-[33.33333%]">
					<div className="border-[1px] border-solid border-[#e6eaee]	py-[20px] rounded-[5px] text-center">
						<p className="text-[#90959c] text-[11px] font-[700]">TỔNG TIỀN ĐÃ DONATE</p>
						<span className="text-[#f0564a] text-[30px]">0đ</span>
					</div>
				</div>
				<div className="pl-[15px] w-[33.33333%]">
					<div className="border-[1px] border-solid border-[#e6eaee]	py-[20px] rounded-[5px] text-center">
						<p className="text-[#90959c] text-[11px] font-[700]">SỐ GIỜ ĐÃ THUÊ</p>
						<span className="text-[#f0564a] text-[30px]">0đ</span>
					</div>
				</div>
			</div>
			<div className="flex">
				<div className="w-[50%]">
					{loading ? (
						<Loading />
					) : (
						<form onSubmit={handleSubmit(onSubmit)} className="">
							<div className="">
								<h1 className="text-[24px] mt-5 mb-[30px] ">Thông tin cá nhân</h1>
								<div className="flex items-center my-[30px]">
									{imageSrc ? (
										<img
											className="w-[96px] h-[96px] rounded-[50%] object-cover"
											src={imageSrc}
											alt=""
										/>
									) : (
										<div className="text-[14px] w-[96px] h-[96px] rounded-[50%] flex items-center mt-7 ml-2">
											<p>chọn ảnh đại diện của bạn</p>
										</div>
									)}
									<div onClick={handleClick} className="ml-[30px] cursor-pointer select-none">
										<span className="text-[16px] text-[#f0564a] font-[600]">Thay đổi</span>
										<p className="text-[13px] text-[#90959c]">JPG, GIF or PNG, 5 MB. </p>
										<input
											type="file"
											name=""
											id="inputimg"
											accept="image/png, image/jpeg, image/gif"
											onChange={handleImageChange}
											hidden
										/>
									</div>
								</div>
							</div>
							<div className="mb-[22px]">
								<label
									className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]"
									htmlFor="fullName"
								>
									Họ và tên
								</label>
								<input
									{...register('fullName')}
									className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
									type="text"
								/>
							</div>

							<div className="mb-[22px]">
								<label
									className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]"
									htmlFor="nickname"
								>
									Biệt danh
								</label>
								<input
									{...register('nickname')}
									className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
									type="text"
								/>
							</div>

							<div className="mb-[22px]">
								<label
									className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]"
									htmlFor="birthday"
								>
									Ngày sinh
								</label>
								<Controller
									control={control}
									name="birthday"
									defaultValue={dayjs('2015/01/01', 'YYYY-MM-DD')}
									render={({ field }) => (
										<DatePicker
											className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
											onChange={onChangeDate}
										/>
									)}
								/>
							</div>

							<div className="mb-[22px]">
								<label
									className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]"
									htmlFor="address"
								>
									Địa chỉ
								</label>
								<input
									{...register('address')}
									className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
									type="text"
								/>
								{/* <GoongMap /> */}
							</div>

							<div className="mb-[22px]">
								<label
									className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]"
									htmlFor="gender"
								>
									Giới tính
								</label>
								<Controller
									control={control}
									name="gender"
									render={({ field }) => (
										<Radio.Group
											{...field}
											className="flex w-[100%] justify-around h-[54px] items-center text-[16px] text-[#354052]"
											onChange={onChange}
											value={gender}
										>
											<Radio value="Nam">Nam</Radio>
											<Radio value="Nữ">Nữ</Radio>
										</Radio.Group>
									)}
								/>
							</div>

							<div className="border-t-[1px] border-solid border-[#eee] my-5"></div>
							<Button text={'Cập nhật'} />
						</form>
					)}
				</div>
				<div className="w-[50%] mt-5 px-10">
					<button className="px-4 py-3 bg-[#f0564a] text-[#fff] rounded-[4px]" onClick={showDrawer}>
						Thông tin chi tiết
						<FontAwesomeIcon className="ml-[8px]" icon={faPenToSquare} />
					</button>
					<Drawer width={'50%'} title="Basic Drawer" onClose={onClose} open={open}>
						<DetailPlayer data={data} close={onClose} />
					</Drawer>
				</div>
			</div>
		</div>
	);
}

export default InfoPlayer;
