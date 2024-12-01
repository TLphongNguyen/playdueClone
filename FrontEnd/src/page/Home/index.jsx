import { useEffect, useState, lazy } from 'react';

import Players from '~/components/players';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { Select, Button, Slider, Popover, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
const HomeStory = lazy(() => import('./components/HomeStory'));
const HomeMessage = lazy(() => import('./components/HomeMessage'));

function Home() {
	const [activeButton, setActiveButton] = useState(null);
	const [activeButton1, setActiveButton1] = useState(null);
	const [listPlayer, setListPlayer] = useState([]);

	const handleClickBtn = (button) => {
		setActiveButton((prev) => (prev === button ? null : button));
	};
	const handleClickBtn1 = (button) => {
		setActiveButton1((prev) => (prev === button ? null : button));
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

	const fetchData = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getallplayer`, {
				headers: { 'Content-Type': 'application/json' },
			});

			const dataplayer = response.data;
			const formartData = dataplayer.map((data) => {
				return {
					...data,
					...data.detailCustomer,
					...data.detailCustomer.games,
				};
			});
			setListPlayer(formartData);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="wrap-content mt-[34px] container w-[100%] relative">
			<HomeStory />
			<div className="search mt-9">
				<form action="" className="flex justify-between">
					<div className="flex ml-2">
						<Select
							size="small"
							className="select mx-1 rounded-[25px] text-[11px] border-[1px] border-solid border-[#d9d9d9] overflow-hidden"
							defaultValue="Giới tính"
							style={{ width: 85, height: 32, fontSize: 11 }}
							onChange={handleChangeGender}
							options={[
								{ value: '', label: 'Giới tính' },
								{ value: 'Nam', label: 'Nam' },
								{ value: 'Nu', label: 'Nữ' },
							]}
						/>
						<Select
							className="select mx-1 rounded-[25px] text-[11px] border-[1px] border-solid border-[#d9d9d9] overflow-hidden"
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
							className="select mx-1 rounded-[25px] text-[11px] border-[1px] border-solid border-[#d9d9d9] overflow-hidden"
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
							className="mx-1 rounded-[25px] text-[11px]"
							style={{ width: 160, height: 32 }}
							placeholder="Tên/Url Player"
							autoComplete="off"
						/>
						<Input
							className="mx-1 rounded-[25px] text-[11px]"
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
				<Players data={listPlayer} />
			</div>
			<HomeMessage />
		</div>
	);
}

export default Home;
