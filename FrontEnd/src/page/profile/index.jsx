import { faPlay } from '@fortawesome/free-solid-svg-icons';
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
			</div>
			<div className="info-center flex-1"></div>
			<div className="info-right w-[25%]"></div>
		</div>
	);
}

export default Profile;
