import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faHeart, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Profile() {
	return (
		<div className="wrap-content flex">
			<div className="info-left w-[25%] pr-[30px] pt-[30px]">
				<div className="avt-player relative">
					<img
						src="https://files.playerduo.net/production/images/3854718d-9f59-4fa6-bf01-f6312fdf5924__f9aec060-5144-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
						alt="avt player"
						className="rounded-[8px]"
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
			</div>
			<div className="info-right w-[25%]"></div>
		</div>
	);
}

export default Profile;
