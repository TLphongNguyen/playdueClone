import { useState } from 'react';
import Stories from '~/components/stories';
import Players from '~/components/players';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, Select, Button, Slider, Popover, Input } from 'antd';
import { PlayCircleOutlined, SearchOutlined } from '@ant-design/icons';

function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeButton, setActiveButton] = useState(null);
	const [activeButton1, setActiveButton1] = useState(null);

	const handleClickBtn = (button) => {
		setActiveButton((prev) => (prev === button ? null : button));
	};
	const handleClickBtn1 = (button) => {
		setActiveButton1((prev) => (prev === button ? null : button));
	};
	const handleClick = () => {
		document.getElementById('input-story').click();
	};
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const handleChangeGender = (value) => {
		console.log(`selected ${value}`);
	};
	const handleChangeCategory = (value) => {
		console.log(`selected ${value}`);
	};
	const slider = (
		<div style={{ padding: '10px' }}>
			<h4>Khoảng giá</h4>
			<Slider range defaultValue={[5000, 500000]} min={5000} max={500000} />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<span>5,000</span>
				<span>đến</span>
				<span>500,000</span>
			</div>
		</div>
	);
	const data = [
		{
			name: 'Thỏ Mini 🐰',
			avt: 'https://files.playerduo.net/production/images/b2c92a50-90ee-4a69-9bb0-750fa27f8017__6be71870-39d1-11ef-a76a-7b840fde9bfc__player_avatar.jpg',
			price: '80000',
			des: 'san sang choi game',
			rate: '5',
			quantity: '90',
		},
		{
			name: '𝙈𝙨𝙪',
			avt: 'https://files.playerduo.net/production/images/56b6d587-8058-4d27-a1fe-3924a4dbc4b4__e54042b0-4759-11ef-8bd0-31c0a9baf30a__player_avatar.jpg',
			price: '80000',
			des: 'Y tá thách đấu',
			rate: '5',
			quantity: '120',
		},
		{
			name: '🌺 Tiểu Lươn 🍀',
			avt: 'https://files.playerduo.net/production/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__a7b36400-01fd-11ef-9524-4bb33b42dae7__player_avatar.jpg',
			price: '80000',
			des: 'Đến và Lấy cắp trái tym em đi ♥',
			rate: '5',
			quantity: '527',
		},
		{
			name: 'Hanny',
			avt: 'https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__f9aec060-5144-11ef-9376-b533eb6f1b4c__player_avatar.jpg',
			price: '80000',
			des: 'vitamin cool ♡₍ᐢ. ̫ .⑅ᐢ₎',
			rate: '5',
			quantity: '90',
		},
		{
			name: '𝙈𝙨𝙪',
			avt: 'https://files.playerduo.net/production/images/56b6d587-8058-4d27-a1fe-3924a4dbc4b4__e54042b0-4759-11ef-8bd0-31c0a9baf30a__player_avatar.jpg',
			price: '80000',
			des: 'Y tá thách đấu',
			rate: '5',
			quantity: '120',
		},
		{
			name: '🌺 Tiểu Lươn 🍀',
			avt: 'https://files.playerduo.net/production/images/9623b48d-0f8e-416a-bef9-dc4efefb6779__a7b36400-01fd-11ef-9524-4bb33b42dae7__player_avatar.jpg',
			price: '80000',
			des: 'Đến và Lấy cắp trái tym em đi ♥',
			rate: '5',
			quantity: '527',
		},
	];
	return (
		<div className="wrap-content mt-[34px]">
			<div className="flex overflow-x-auto no-scrollbar">
				<div
					onClick={showModal}
					className="border-[1px] border-solid border-[#e6e5ea] rounded-[15px] mr-[5px] hover:border-[#bdbdbd] cursor-pointer"
				>
					<div className="relative h-[190px] m-[3px] w-[130px]">
						<img
							src="https://files.playerduo.net/production/images/avatar44.png"
							alt=""
							className="w-[220px] h-[100%] object-cover top-0 absolute"
						/>

						<div className="absolute bg-[#1f1b1b66] text-center text-[#fff] rounded-t-[12px] text-[50px] pt-[58%] w-[100%] h-[100%]">
							<FontAwesomeIcon className="m-auto" icon={faPlus} />
						</div>
					</div>
					<div className="pt-[15px] pb-[5px] text-center">
						<span className="text-[14px] text-[#000]">Đăng story</span>
					</div>
				</div>
				<Modal
					width={'600px'}
					footer={null}
					height={'430px'}
					open={isModalOpen}
					onCancel={handleCancel}
					className="ant-modal-content"
					closeIcon={null}
					confirmLoading={true}
					style={{ top: '30px' }}
				>
					<form className="h-[100%] flex" action="">
						<div className="flex-1 mt-[35px] mr-[25px] mb-[35px] ml-[35px]">
							<div className="pb-[15px]">
								<h2 className="mb-[5px] font-[700] text-[14px] clock">Mô tả *</h2>

								<textarea
									className="border-[1px] border-solid border-[#e3e3e3] h-[120px] rounded-[4px] text-[#565656] px-3 py-2 w-[100%] align-top resize-none focus:border-[#cbcbcb] outline-none"
									name=""
									id=""
								></textarea>
							</div>
							<div className="mb-[112px]">
								<h2 className="mb-[5px] font-[700] text-[14px] ">Hashtags</h2>
								<input
									className="border-[1px] border-solid border-[#e3e3e3] rounded-[4px] text-[#565656] px-3 py-2 w-[100%]  focus:border-[#cbcbcb]"
									type="text"
								/>
							</div>
							<button
								className="bg-[#fb404b] w-[100%] p-[5px] text-[14px] text-[#fff] font-[600] rounded-[4px]"
								onOk={handleOk}
							>
								Đăng
							</button>
						</div>
						<div className="post-video w-[45%]">
							<input type="file" name="" id="input-story" hidden />
							<div
								onClick={handleClick}
								className="h-[365px] mt-[35px] ml-[25px] mr-[35px] mb-[35px] bg-gradient-to-b from-[#2eaefd] to-[#f0c281] rounded-[15px] py-[55%] cursor-pointer"
							>
								<div className="text-center text-[#fff] font-[700]">
									<PlayCircleOutlined className="text-[30px]  mb-2" />
									<h2>Đăng Story</h2>
								</div>
							</div>
						</div>
					</form>
				</Modal>

				<Stories />
			</div>
			<div className="search mt-9">
				<form action="" className="flex justify-between">
					<div className="flex ml-2">
						<Select
							className="select mx-1"
							defaultValue="Giới tính"
							style={{ width: 85, height: 32 }}
							onChange={handleChangeGender}
							options={[
								{ value: '', label: 'Giới tính' },
								{ value: 'Nam', label: 'Nam' },
								{ value: 'Nu', label: 'Nữ' },
							]}
						/>
						<Select
							className="select mx-1"
							defaultValue="Thể loại"
							style={{ width: 100, height: 32 }}
							onChange={handleChangeCategory}
							options={[
								{ value: '', label: 'Thể loại' },
								{ value: 'new', label: 'Người mới' },
								{ value: 'Hot', label: 'Hot' },
								{ value: 'Vip', label: 'Vip' },
							]}
						/>
						<Button
							onClick={() => handleClickBtn('active')}
							className={`p-2 rounded-[25px] border-[1px] border-solid mx-1 border-[#e3e3e3] text-[11px] w-20  ${
								activeButton === 'active'
									? 'bg-[#f0564a] text-[#fff] hover:bg-[#f0564a]'
									: 'hover:bg-[#f9e6e5]'
							}`}
						>
							Sẵn sàng
						</Button>
						<Button
							onClick={() => handleClickBtn1('active')}
							className={`p-2 rounded-[25px] border-[1px] border-solid mx-1 border-[#e3e3e3] text-[11px] w-20 ${
								activeButton1 === 'active'
									? 'bg-[#f0564a] text-[#fff] hover:bg-[#f0564a]'
									: 'hover:bg-[#f9e6e5]'
							}`}
						>
							Online
						</Button>
						<Popover
							className="rounded-[25px] mx-1 text-[11px] w-[135px]"
							placement="bottom"
							content={slider}
							title="Khoảng giá"
							trigger="click"
						>
							<Button>Khoảng giá</Button>
						</Popover>
						<Select
							className="select mx-1"
							defaultValue="Sống tại"
							style={{ width: 160, height: 32 }}
							onChange={handleChangeGender}
							options={[
								{ value: '', label: 'Việt Nam' },
								{ value: 'Hưng Yên', label: 'Hưng Yên' },
								{ value: 'Hà Nội', label: 'Hà Nội' },
								{ value: 'Thái Bình', label: 'Thái Bình' },
								{ value: 'Nam Định', label: 'Nam Định' },
								{ value: 'Hòa Bình', label: 'Hòa Bình' },
								{ value: 'Thanh Hóa', label: 'Thanh Hóa' },
							]}
						/>
						<Input
							className="mx-1"
							style={{ width: 160, height: 32 }}
							placeholder="Tên/Url Player"
							autoComplete="off"
						/>
						<Input
							className="mx-1"
							style={{ width: 160, height: 32 }}
							placeholder="Tên game"
							autoComplete="off"
						/>
					</div>
					<button
						type="submit"
						className="w-[100px] h-[32px] text-[11px] font-[600] rounded-[25px] bg-[#f2796e] text-[#fff7ef] hover:bg-[#f0564a] hover:text-[#fff]"
					>
						<SearchOutlined className="mr-[10px]" />
						Tìm Kiếm
					</button>
				</form>
			</div>
			<div className="list-player">
				<div className="refresh flex justify-between mt-[25px] mb-[15px]">
					<h1 className="text-[#f0564a] text-[18px] font-[700]">VIP PLAYERS</h1>
					<button className="w-[100px] h-[32px] text-[11px] font-[600] border-[1px] border-solid border-[#e9e9e9] rounded-[25px] bg-[#fff] text-[#f0564a] hover:bg-[#f3f3f3] hover:text-[#f0564a]">
						Tìm Kiếm
						<FontAwesomeIcon className="ml-[10px] text-[#333]" icon={faArrowsRotate} />
					</button>
				</div>
				<Players data={data} />
			</div>
		</div>
	);
}

export default Home;
