import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import ButtonComponent from '../button';
import { Select, Image, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { storage } from '~/config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { AUTH_URL } from '~/config';
function DetailPlayer({ data, close }) {
	const { register, handleSubmit, control } = useForm();
	const [listId, setListID] = useState({});
	const [previewImage, setPreviewImage] = useState('');
	const [fileList, setFileList] = useState([]);
	const userInfo = useSelector((state) => state.user.userInfo || '');

	const getBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewOpen(true);
	};
	const handleChangeImg = ({ fileList: newFileList }) => setFileList(newFileList);
	const options = data.map((item, index) => {
		const value = item.gameName;
		return {
			label: value,
			value: item.gameId,
			disabled: index === 10,
		};
	});

	const handleChange = (value) => {
		console.log(listId);
		setListID(value);
	};
	const onSubmit = async (data) => {
		// console.log(data);
		let arrImg = [];
		const customerId = userInfo.customerId;
		if (fileList) {
			const promises = fileList.map(async (file) => {
				const imageFile = file.originFileObj;
				const storageRef = ref(storage, `album/${imageFile.name}`);
				const snapshot = await uploadBytes(storageRef, imageFile);
				return await getDownloadURL(snapshot.ref);
			});

			arrImg = await Promise.all(promises); // Đợi tất cả các promise hoàn thành và lưu URL
		}
		const jsonImg = JSON.stringify(arrImg);
		const formatdata = {
			...data,
			games: listId,
			img: jsonImg,
			customerId,
		};
		try {
			const response = await axios.post(`${AUTH_URL}/createDetalCustomer`, formatdata, {
				headers: { 'Content-Type': 'application/json' },
			});
			reset();
			close();
		} catch (err) {
			console.log(err);
		}
		console.log(formatdata);
	};
	return (
		<div className="">
			<form onSubmit={handleSubmit(onSubmit)} action="" className="">
				<h1 className="">Nhập thông tin chi tiết</h1>
				<div className="w-[70%]">
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							title
						</label>
						<input
							{...register('title')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							Link Facebook
						</label>
						<input
							{...register('linkfacebook')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							Link highlight
						</label>
						<input
							{...register('linkhighlight')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>

					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							describe
						</label>
						<input
							{...register('describe')}
							className="h-[36px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							game
						</label>
						<div className="">
							<FormControl
								className="border-[1px] border-[#e6eaee] border-solid"
								sx={{ width: '100%', height: 36 }}
							>
								<Select
									mode="multiple"
									style={{
										width: '100%',
										height: '38px',
										border: '1px solid #e6eaee',
										borderRadius: '5px',
										fontSize: '18px',
									}}
									placeholder="Chọn game "
									onChange={handleChange}
									options={options}
								/>
							</FormControl>
						</div>
					</div>
					<div className="mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="fullName">
							Abum
						</label>
						<Upload
							action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
							listType="picture-card"
							fileList={fileList}
							multiple
							onPreview={handlePreview}
							onChange={handleChangeImg}
						>
							<button
								style={{
									border: 0,
									background: 'none',
								}}
								type="button"
							>
								<PlusOutlined />
								<div
									style={{
										marginTop: 8,
									}}
								>
									Upload
								</div>
							</button>
						</Upload>
					</div>
					{previewImage && (
						<Image
							wrapperStyle={{
								display: 'none',
							}}
							preview={{
								visible: previewOpen,
								onVisibleChange: (visible) => setPreviewOpen(visible),
								afterOpenChange: (visible) => !visible && setPreviewImage(''),
							}}
							src={previewImage}
						/>
					)}
					<ButtonComponent text={' cập nhật '} />
				</div>
			</form>
		</div>
	);
}

export default DetailPlayer;
