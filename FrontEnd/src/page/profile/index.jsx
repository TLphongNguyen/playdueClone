import { useState, useEffect } from 'react';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
	faPlay,
	faHeart,
	faCamera,
	faStar,
	faMessage,
	faPlus,
	faHeartCircleMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image, Modal } from 'antd';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
import Rates from '~/components/rates';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}
function Profile() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenChat, setIsModalOpenChat] = useState(false);
	const [listPlayer, setListPlayer] = useState([]);
	const [dataImg, setDataImg] = useState([]);
	const [statusFollow, setStatusFollow] = useState(false);
	const userInfo = useSelector((state) => state.user.userInfo);

	const showModal = () => {
		setIsModalOpen(true);
	};
	const showModalChat = () => {
		setIsModalOpenChat(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const handleOkChat = () => {
		setIsModalOpenChat(false);
	};
	const handleCancelChat = () => {
		setIsModalOpenChat(false);
	};
	const query = useQuery();
	const id = query.get('id');
	const fetchdata = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getplayerbyId/${id}`);
			const dataplayer = response.data;
			const formartData = {
				...dataplayer,
				...dataplayer.detailCustomer,
				...dataplayer.detailCustomer.games,
			};
			setListPlayer(formartData);
			setDataImg(JSON.parse(formartData.Abum)); //
		} catch (error) {
			console.error('Error fetching customer:', error);
		}
	};
	const checkFollower = async () => {
		const data = {
			customerId: id,
			followerId: userInfo.customerId,
		};
		console.log(data);

		try {
			const response = await axios.post(`${SERVICE_URL}/checkfollow`, data, {
				headers: { 'Content-Type': 'application/json' },
			});
			setStatusFollow(response.data.status);
			console.log(statusFollow);

			return response.data.status;
		} catch (error) {
			console.log(error);
		}
	};
	const handleFollow = async () => {
		const data = {
			customerId: id,
			followerId: userInfo.customerId,
		};
		try {
			const response = await axios.post(`${SERVICE_URL}/handlefollow`, data, {
				headers: { 'Content-Type': 'application/json' },
			});
			setStatusFollow(!statusFollow);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchdata();
		checkFollower();
	}, []);
	return (
		<div className="wrap-content flex container">
			<div className="info-left w-[25%] pr-[30px] pt-[30px]">
				<div className="avt-player relative">
					<img src={listPlayer?.avt} alt="avt player" className="rounded-[8px] mx-auto" />
					<div className="sound-icon w-[30px] h-[30px] rounded-[50%] bg-[#f0564a] text-center leading-[30px] absolute bottom-4 left-[15px]">
						<FontAwesomeIcon className="text-[#fff]" icon={faPlay} />
					</div>
				</div>
				<div className="status mt-5 text-center">
					<p className="text-[#27ae60] text-[18px] h-[23px] font-[700]">Đang sẵn sàng</p>
				</div>
				{listPlayer.Facebook ? (
					<a
						href={listPlayer.Facebook}
						className="block w-[32px] h-[32px] bg-[#4267ae] rounded-[50%] text-center leading-8 text-[#fff] mx-auto mt-5"
					>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
				) : (
					<div className=""></div>
				)}

				<div className="date text-center mt-5">
					<span className="text-[#9298a1] mr-[5px] text-[12px] font-[400] uppercase">Ngày tham gia:</span>
					<span className="text-[#354052] text-[12px]">26/4/2020</span>
				</div>
			</div>
			<div className="info-center w-[50%] flex-1 pt-[30px]">
				<div className="name flex justify-between">
					<h2 className="text-[#354052] text-[28px] font-[700]">{listPlayer.fullName}</h2>
					<button
						onClick={handleFollow}
						className="text-[#fff] max-h-[29px] text-[14px] font-[700] bg-[#f0564a] border-[1px] border-solid border-[#f0564a] rounded-[20px] pt-[5px] px-[10px] pb-[2px] "
					>
						{statusFollow ? (
							<FontAwesomeIcon className="mr-1" icon={faHeart} />
						) : (
							<FontAwesomeIcon className="mr-1" icon={faHeartCircleMinus} />
						)}
						{statusFollow ? 'theo dõi' : 'hủy theo dõi'}
					</button>
				</div>
				<div className="info flex justify-between mt-[30px]">
					<div className="">
						<span className="text-[#354052] block text-[12px] uppercase opacity-70 font-[700]">
							Số người theo dõi
						</span>
						<span className="text-[#f0564a] text-[15px] ">176 người</span>
					</div>
					<div className="">
						<span className="text-[#354052] block text-[12px] uppercase opacity-70 font-[700]">
							Đã được thuê
						</span>
						<span className="text-[#f0564a] text-[15px] ">2044 giờ</span>
					</div>
					<div className="">
						<span className="text-[#354052] block text-[12px] uppercase opacity-70 font-[700]">
							Tỷ lệ hoàn thành
						</span>
						<span className="text-[#f0564a] text-[15px] ">98.48 %</span>
					</div>
					<div className="">
						<span className="text-[#354052] block text-[12px] uppercase opacity-70 font-[700]">
							Tình trạng thiết bị
						</span>
						<span className="text-[#f0564a] text-[15px] ">
							<FontAwesomeIcon icon={faCamera} />
						</span>
					</div>
				</div>
				<hr className="my-5 border-t-[1px] border-solid border-[#eee]" />
				<div className="game">
					<ul className="list-game flex flex-wrap">
						<li className="mr-2 mb-[6px]">
							<div className="rounded-[10px] overflow-hidden min-w-[100px] bg-[url('https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__c51b21f0-37c8-11ed-838c-b120e70abb59__game_backgrounds.jpg')] bg-no-repeat">
								<p className="text-center bg-[#000000bf] text-[#fff] text-[13px] font-[700] py-[13px] px-[16px] ">
									Liên Minh Huyền Thoại
								</p>
							</div>
						</li>
						<li className="mr-2 mb-[6px]">
							<div className="rounded-[10px] overflow-hidden min-w-[100px] bg-[url('https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__d23ea0a0-37c8-11ed-838c-b120e70abb59__game_backgrounds.jpg')] bg-no-repeat">
								<p className="text-center bg-[#000000bf] text-[#fff] text-[13px] font-[700] py-[13px] px-[16px] ">
									Đấu Trường Chân Lý
								</p>
							</div>
						</li>
						<li className="mr-2 mb-[6px]">
							<div className="rounded-[10px] overflow-hidden min-w-[100px] bg-[url('https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__8b5d5fe0-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg')] bg-no-repeat">
								<p className="text-center bg-[#000000bf] text-[#fff] text-[13px] font-[700] py-[13px] px-[16px] ">
									Tâm Sự
								</p>
							</div>
						</li>
						<li className="mr-2 mb-[6px]">
							<div className="rounded-[10px] overflow-hidden min-w-[100px] bg-[url('https://files.playerduo.net/production/game_backgrounds/715867c6-698f-411a-b4f9-1e9093130b60__90279220-37c9-11ed-838c-b120e70abb59__game_backgrounds.jpg')] bg-no-repeat">
								<p className="text-center bg-[#000000bf] text-[#fff] text-[13px] font-[700] py-[13px] px-[16px] ">
									Khác
								</p>
							</div>
						</li>
					</ul>
				</div>
				<hr className="my-5 border-t-[1px] border-solid border-[#eee]" />
				<div className="info-player">
					<h2 className="text-[#354052] text-[24px] mt-[30px] font-[700] ">Thông tin</h2>
					<div className="content mt-[15px]">
						<p className="text-[#354052] text-[14px] font-[400] leading-[1.6] mb-[10px]">
							{listPlayer.info}
						</p>
						<ul className="list-img flex my-[23px]">
							{dataImg.map((img, index) => (
								<li key={index} className="mr-[5px]">
									<Image className="object-cover" width={121} height={121} src={img} />
								</li>
							))}
						</ul>
						<div className="des">
							<p className="text-[14px] text-[#354052] font-[400] leading-[1.6] mb-[10px]">
								{listPlayer.description}
							</p>
						</div>
					</div>
					<hr className="my-5 border-t-[1px] border-solid border-[#eee]" />
					<div className="top-donate">
						<h2 className="text-[#354052] text-[24px] mt-[30px] font-[700] ">Top Donate Tháng</h2>
						<ul className="list-donate mt-8">
							<li className="flex mb-2">
								<div className="w-[8.33333333%] text-[#354052] font-[700]">#1</div>
								<div className="flex w-[58.33333333%] items-center cursor-pointer">
									<img
										className="w-[25px] h-[25px] rounded-[50%] object-cover mr-2"
										src="https://files.playerduo.net/production/images/56bf2506-6fdf-4565-a0e7-ae6c30c1d67c__4e8b1c50-bee2-11ee-9524-4bb33b42dae7__page_avatar.jpg"
										alt=""
									/>
									<span className="text-[13.5px] text-[#5f67f8]">_rlarlgus</span>
								</div>
								<div className="w-[33.33333333%] text-right">
									<span className="text-[#354052] font-[600] ">750,000 đ</span>
								</div>
							</li>
							<li className="flex mb-2">
								<div className="w-[8.33333333%] text-[#354052] font-[700]">#2</div>
								<div className="flex w-[58.33333333%] items-center cursor-pointer">
									<img
										className="w-[25px] h-[25px] rounded-[50%] object-cover mr-2"
										src="https://files.playerduo.net/production/images/38799154-7eb3-4f42-aab8-f7851403ae7b__f9adefc0-4e54-11ef-9d0b-ad86dd3aa890__page_avatar.jpg"
										alt=""
									/>
									<span className="text-[13.5px] text-[#5f67f8]">dmq</span>
								</div>
								<div className="w-[33.33333333%] text-right">
									<span className="text-[#354052] font-[600] ">420,000 đ</span>
								</div>
							</li>
							<li className="flex mb-2">
								<div className="w-[8.33333333%] text-[#354052] font-[700]">#3</div>
								<div className="flex w-[58.33333333%] items-center cursor-pointer">
									<img
										className="w-[25px] h-[25px] rounded-[50%] object-cover mr-2"
										src="https://files.playerduo.net/production/images/e01bc820-5e7e-4518-adad-6b1f3b05091e__21002560-edb3-11ed-a657-a54d6be1d46a__page_avatar.jpg"
										alt=""
									/>
									<span className="text-[13.5px] text-[#5f67f8]">Dev Nguyen</span>
								</div>
								<div className="w-[33.33333333%] text-right">
									<span className="text-[#354052] font-[600] ">300,000 đ</span>
								</div>
							</li>
							<li className="flex mb-2">
								<div className="w-[8.33333333%] text-[#354052] font-[700]">#4</div>
								<div className="flex w-[58.33333333%] items-center cursor-pointer">
									<img
										className="w-[25px] h-[25px] rounded-[50%] object-cover mr-2"
										src="https://files.playerduo.net/production/images/df325fed-fc54-446d-a181-0773cf39ec78__6b163bd0-3cae-11ef-906c-b3d37e9ba1d3__page_avatar.jpg"
										alt=""
									/>
									<span className="text-[13.5px] text-[#5f67f8]">band4band</span>
								</div>
								<div className="w-[33.33333333%] text-right">
									<span className="text-[#354052] font-[600] ">300,000 đ</span>
								</div>
							</li>
							<li className="flex mb-2">
								<div className="w-[8.33333333%] text-[#354052] font-[700]">#5</div>
								<div className="flex w-[58.33333333%] items-center cursor-pointer">
									<img
										className="w-[25px] h-[25px] rounded-[50%] object-cover mr-2"
										src="https://files.playerduo.net/production/images/avatar9.png"
										alt=""
									/>
									<span className="text-[13.5px] text-[#5f67f8]">Anh Yêu</span>
								</div>
								<div className="w-[33.33333333%] text-right">
									<span className="text-[#354052] font-[600] ">140,000 đ</span>
								</div>
							</li>
							<li className="flex mb-2">
								<div className="w-[8.33333333%] text-[#354052] font-[700]">#6</div>
								<div className="flex w-[58.33333333%] items-center cursor-pointer">
									<img
										className="w-[25px] h-[25px] rounded-[50%] object-cover mr-2"
										src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/454233584_2132161577184054_7389241553987889197_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=E_bsEexhIEAQ7kNvgHMHacK&_nc_ht=scontent.fhan5-11.fna&oh=00_AYDLsqE_K4eb6_X7Y4nRQRQ9JF8F9SjTRxLysmYBMurWOw&oe=66C32B8A"
										alt=""
									/>
									<span className="text-[13.5px] text-[#5f67f8]">Phong Nguyen</span>
								</div>
								<div className="w-[33.33333333%] text-right">
									<span className="text-[#354052] font-[600] ">50,000 đ</span>
								</div>
							</li>
						</ul>
					</div>
					<div className="rating">
						<h2 className="text-[#354052] text-[24px] mt-[30px] font-[700] ">Đánh giá</h2>
						<div className="mt-8">
							<Rates />
						</div>
					</div>
				</div>
			</div>
			<div className="info-right w-[25%] pl-[30px] pt-[30px]">
				<div className="w-[100%] h-auto border-[1px] border-solid border-[#e2e6ea] p-[10px] rounded-[15px]">
					<span className="text-[#f0564a] text-[26px] font-[700] mb-[10px] block">80,000 đ/h</span>
					<div className="rate flex mb-[5px]">
						<FontAwesomeIcon className="text-[#ff9948]" icon={faStar} />
						<FontAwesomeIcon className="text-[#ff9948]" icon={faStar} />
						<FontAwesomeIcon className="text-[#ff9948]" icon={faStar} />
						<FontAwesomeIcon className="text-[#ff9948]" icon={faStar} />
						<FontAwesomeIcon className="text-[#ff9948]" icon={faStar} />
						<span className="ml-2 text-[#9298a1] text-[13px] font-[400]">245 Đánh giá</span>
					</div>
					<div className="btn">
						<button className="w-[100%] h-[54px] text-[16px] mt-[10px] px-[6px] bg-[#f0564a] text-[#fff] rounded-[10px] font-[700] uppercase">
							Thuê
						</button>
						<button
							onClick={showModal}
							className="w-[100%] h-[54px] text-[16px] border-[1px] border-[#e2e6ea] border-solid text-[#354052] bg-[#fff] mt-[10px] px-[6px] rounded-[10px] font-[700] uppercase"
						>
							Donate
						</button>
						<button
							onClick={showModalChat}
							className="w-[100%] h-[54px] text-[16px] border-[1px] border-[#e2e6ea] border-solid text-[#354052] bg-[#fff] mt-[10px] px-[6px] rounded-[10px] font-[700] uppercase"
						>
							<FontAwesomeIcon className="mr-[5px]" icon={faMessage} />
							chat
						</button>
					</div>
					<Modal
						width={'600px'}
						height={'474px'}
						footer={false}
						title="Donate"
						open={isModalOpen}
						onOk={handleOk}
						onCancel={handleCancel}
					>
						<div className="p-[15px]">
							<div className="w-[100%] flex">
								<span className="w-[40%] block text-[14px] text-[#354052] font-[600] p-[10px]">
									Người nhận:
								</span>
								<span className="w-[60%] block text-[14px] text-[#354052] font-[600] p-[10px]">
									Hanny
								</span>
							</div>
							<div className="w-[100%] flex">
								<span className="w-[40%] block text-[14px] text-[#354052] font-[600] p-[10px]">
									Số dư hiện tại:
								</span>
								<button className="p-[10px] flex">
									<span className="text-[#f0564a]">0đ</span>
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
										className="w-[100%] h-10 bg-[#fff] py-2 px-3 text-[#354052] border-[1px] border-[#e3e3e3] border-solid rounded-[4px]"
										type="text"
									/>
								</div>
							</div>
							<div className="flex items-center">
								<span className="block w-[40%] text-[14px] text-[#354052] font-[600] p-[10px]">
									Tên hiển thị: :
								</span>
								<div className="p-[10px] w-[60%]">
									<input
										defaultValue={'Name'}
										className="w-[100%] h-10 bg-[#fff] py-2 px-3 text-[#354052] border-[1px] border-[#e3e3e3] border-solid rounded-[4px]"
										type="text"
									/>
								</div>
							</div>
							<div className="p-[10px]">
								<textarea
									className="h-[100px] w-[100%] py-2 px-3 border-[1px] border-[#e3e3e3] border-solid outline-none resize-none rounded-[4px] focus:border-[#333] transition-all"
									placeholder="Message"
									name=""
									id=""
								></textarea>
							</div>
						</div>
						<div className="p-[15px] border-t-[1px] border-[#e3e3e3] border-solid text-right">
							<button className="bg-[#f0564a] text-[#fff] text-[13px] font-[600] py-2 px-4 rounded-[4px]">
								Donate
							</button>
							<button className="bg-[#fff] text-[13px] ml-[5px] text-[#354052] border-[1px] border-[#e3e3e3] border-solid  py-2 px-4 rounded-[4px]">
								Đóng
							</button>
						</div>
					</Modal>
					<Modal
						width={'600px'}
						height={'474px'}
						title="Gửi tin nhắn đầu tiên"
						open={isModalOpenChat}
						onOk={handleOkChat}
						onCancel={handleCancelChat}
						footer={false}
					>
						<div className="">
							<div className="p-[25px]">
								<textarea
									className="h-[100px] w-[100%] py-2 px-3 border-[1px] border-[#e3e3e3] border-solid outline-none resize-none rounded-[4px] focus:border-[#333] transition-all"
									placeholder="Message"
									name=""
									id=""
								></textarea>
							</div>
							<div className="p-[15px] border-t-[1px] border-[#e3e3e3] border-solid text-right">
								<button className="bg-[#f0564a] text-[#fff] text-[13px] font-[600] py-2 px-4 rounded-[4px]">
									Gửi tin nhắn
								</button>
								<button className="bg-[#fff] text-[13px] ml-[5px] text-[#354052] border-[1px] border-[#e3e3e3] border-solid  py-2 px-4 rounded-[4px]">
									Đóng
								</button>
							</div>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default Profile;
