import { useState, useEffect } from 'react';
import { Drawer, Table, Image, Upload, Space, Button } from 'antd';
import { useForm } from 'react-hook-form';
import { PlusOutlined } from '@ant-design/icons';
import { storage } from '~/config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { SERVICE_URL } from '~/config';

import Input from '~/components/input';
import ButtonComponent from '~/components/button';
import Loading from '~/components/loading';

function Games() {
	const [open, setOpen] = useState(false);
	const [previewOpen, setPreviewOpen] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [fileList, setFileList] = useState([]);
	const [data, setData] = useState([]);
	const [typeEdit, setTypeEdit] = useState(false);
	const [gameId, setGameId] = useState(0);
	const [loading, setLoading] = useState(false);
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm();

	const showDrawer = (record) => {
		if (record.gameName) {
			setValue('gameName', record.gameName);
			setGameId(record.gameId);
			setFileList([
				{
					uid: '-1',
					name: record.gameName,
					status: 'done',
					url: record.gameImg,
				},
			]);
			setTypeEdit(true);
			setOpen(true);
		} else {
			setValue('gameName', '');
			setTypeEdit(false);
			setFileList([]);
			setOpen(true);
		}
	};

	const onClose = () => {
		setOpen(false);
	};
	const columns = [
		{
			title: 'Game ID',
			dataIndex: 'gameId',
			key: 'gameId',
		},
		{
			title: 'Game Name',
			dataIndex: 'gameName',
			key: 'gameName',
		},
		{
			title: 'Game Image',
			dataIndex: 'gameImg',
			key: 'gameImg',
			render: (text) => <img src={text} alt="Game" style={{ width: '60px' }} />,
		},
		{
			title: 'Action',
			key: 'action',
			align: 'center',
			render: (_, record) => (
				<Space size="middle">
					<Button onClick={() => showDrawer(record)}>edit</Button>
					<Button danger>delete</Button>
				</Space>
			),
		},
	];
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
	const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
	const fetchdata = async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${SERVICE_URL}/getGames`);
			setData(response.data);
			return response;
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchdata();
	}, [data]);
	const onSubmit = async (data) => {
		setLoading(true);

		let imageUrl = '';
		const img = fileList[0]?.originFileObj;
		if (img) {
			const imageFile = img;
			const storageRef = ref(storage, `ListImgGame/${imageFile.name}`);
			const snapshot = await uploadBytes(storageRef, imageFile);
			imageUrl = await getDownloadURL(snapshot.ref);
		} else {
			imageUrl = fileList[0].url;
		}
		const formatData = {
			...data,
			imageUrl,
			gameId,
		};
		if (typeEdit) {
			try {
				const response = await axios.put(`${SERVICE_URL}/updateGame`, formatData, {
					headers: {
						'Content-Type': 'application/json',
					},
				});
				setOpen(false);
				reset();
				setFileList([]);
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		} else {
			try {
				const response = await axios.post(`${SERVICE_URL}/creategame`, formatData, {
					headers: {
						'Content-Type': 'application/json',
					},
				});
				setOpen(false);
				reset();
				setFileList([]);
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		}
	};
	return (
		<div className="px-16 py-10 w-[100%] h-[100%]">
			<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<h2 className="text-[26px] leading-[30px] font-bold text-black">Games Table</h2>
				<button
					onClick={showDrawer}
					className="flex w-[200px] justify-center rounded bg-[#3c50e0] p-3 font-medium text-[#eff4fb] hover:bg-opacity-90"
				>
					Thêm games mới
				</button>
			</div>

			<Drawer title={typeEdit ? 'Cập nhật game' : 'Thêm mới game'} width={'40%'} onClose={onClose} open={open}>
				<form action="" onSubmit={handleSubmit(onSubmit)}>
					<Input
						name="gameName"
						control={control}
						label="Tên Game"
						placeholder="Nhập tên của game"
						rules={{ required: 'Tên Game là bắt buộc' }}
					/>
					<Upload
						action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
						listType="picture-card"
						fileList={fileList}
						onPreview={handlePreview}
						onChange={handleChange}
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
					<div className="w-[60%]">
						<ButtonComponent text={typeEdit ? 'Cập nhật' : 'Thêm mới'} />
					</div>
				</form>
			</Drawer>
			<div className="table w-[100%]">
				<Table columns={columns} dataSource={data} rowKey={(record) => record.gameId} />
			</div>
		</div>
	);
}

export default Games;
