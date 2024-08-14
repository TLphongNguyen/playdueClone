import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faHeart, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'antd';
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
			src: 'https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__c109bb10-34da-11ef-a76a-7b840fde9bfc__player_album.jpg',
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
			<div className="info-center flex-1 pt-[30px]">
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
						<ul className="list-img flex">
							{imgs.map((img, index) => (
								<li key={index} className="mr-[5px]">
									<Image className="object-cover" width={121} height={121} src={img.src} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="info-right w-[25%]"></div>
		</div>
	);
}

export default Profile;
