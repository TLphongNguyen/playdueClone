import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faHeart, faCamera, faStar, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'antd';

import Rates from '~/components/rates';
function Profile() {
	const imgs = [
		{
			src: 'https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__c4f67bb0-480c-11ef-8bd0-31c0a9baf30a__player_album.jpg',
		},
		{
			src: 'https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__bb8e0930-480c-11ef-8bd0-31c0a9baf30a__player_album.jpg',
		},
		{
			src: 'https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__92c3fe00-3fc5-11ef-906c-b3d37e9ba1d3__player_album.jpg',
		},
		{
			src: 'https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__87b5c940-34d9-11ef-a76a-7b840fde9bfc__player_album.jpg',
		},
		{
			src: 'https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__233220c0-1f05-11ef-9524-4bb33b42dae7__player_album.jpg',
		},
	];
	return (
		<div className="wrap-content flex">
			<div className="info-left w-[25%] pr-[30px] pt-[30px]">
				<div className="avt-player relative">
					<img
						src="https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__f9aec060-5144-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
						alt="avt player"
						className="rounded-[8px] mx-auto"
					/>
					<div className="sound-icon w-[30px] h-[30px] rounded-[50%] bg-[#f0564a] text-center leading-[30px] absolute bottom-4 left-[15px]">
						<FontAwesomeIcon className="text-[#fff]" icon={faPlay} />
					</div>
				</div>
				<div className="status mt-5 text-center">
					<p className="text-[#27ae60] text-[18px] h-[23px] font-[700]">Đang sẵn sàng</p>
				</div>
				<a
					href=""
					className="block w-[32px] h-[32px] bg-[#4267ae] rounded-[50%] text-center leading-8 text-[#fff] mx-auto mt-5"
				>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<div className="date text-center mt-5">
					<span className="text-[#9298a1] mr-[5px] text-[12px] font-[400] uppercase">Ngày tham gia:</span>
					<span className="text-[#354052] text-[12px]">26/4/2020</span>
				</div>
			</div>
			<div className="info-center w-[50%] flex-1 pt-[30px]">
				<div className="name flex justify-between">
					<h2 className="text-[#354052] text-[28px] font-[700]">Hanny</h2>
					<button className="text-[#fff] max-h-[29px] text-[14px] font-[700] bg-[#f0564a] border-[1px] border-solid border-[#f0564a] rounded-[20px] pt-[5px] px-[10px] pb-[2px] ">
						<FontAwesomeIcon className="mr-1" icon={faHeart} />
						Theo dõi
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
							Xinh đẹp có thừa
						</p>
						<ul className="list-img flex my-[23px]">
							{imgs.map((img, index) => (
								<li key={index} className="mr-[5px]">
									<Image className="object-cover" width={121} height={121} src={img.src} />
								</li>
							))}
						</ul>
						<div className="des">
							<p className="text-[14px] text-[#354052] font-[400] leading-[1.6] mb-[10px]">
								Tớ tên Bảo Hân. ٩(ˊᗜˋ*)و ♡
							</p>
							<p className="text-[14px] text-[#354052] font-[400] leading-[1.6] mb-[10px]">
								Full champ aram, 5vs5 all lane
							</p>
							<p className="text-[14px] text-[#354052] font-[400] leading-[1.6] mb-[10px]">
								Valorant silver, for fun thui
							</p>
							<p className="text-[14px] text-[#354052] font-[400] leading-[1.6] mb-[10px]">On cam</p>
							<p className="text-[14px] text-[#354052] font-[400] leading-[1.6] mb-[10px]">
								Mic nhà không ồn
							</p>
							<p className="text-[14px] text-[#354052] font-[400] leading-[1.6] mb-[10px]">
								Yêu anh Phong
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
						<button className="w-[100%] h-[54px] text-[16px] border-[1px] border-[#e2e6ea] border-solid text-[#354052] bg-[#fff] mt-[10px] px-[6px] rounded-[10px] font-[700] uppercase">
							Donate
						</button>
						<button className="w-[100%] h-[54px] text-[16px] border-[1px] border-[#e2e6ea] border-solid text-[#354052] bg-[#fff] mt-[10px] px-[6px] rounded-[10px] font-[700] uppercase">
							<FontAwesomeIcon className="mr-[5px]" icon={faMessage} />
							chat
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
