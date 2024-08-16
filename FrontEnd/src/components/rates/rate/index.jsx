import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Rate() {
	return (
		<div className="wrap-content mt-[23px]">
			<div className="flex justify-between">
				<div className="info-player flex">
					<div className="w-[52px] h-[52px] mr-[10px]">
						<img
							className="w-[100%] h-[100%] rounded-[50%]"
							src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/454233584_2132161577184054_7389241553987889197_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=E_bsEexhIEAQ7kNvgHMHacK&_nc_ht=scontent.fhan5-11.fna&oh=00_AYDLsqE_K4eb6_X7Y4nRQRQ9JF8F9SjTRxLysmYBMurWOw&oe=66C32B8A"
							alt=""
						/>
					</div>
					<div className="">
						<span className="block text-[15px] text-[#5f67f8] font-[600] leading-[1.13] mb-[5px]">
							Phong Nguyen
						</span>
						<span className="block text-[12px] text-[#616770] font-[400] mb-[5px]">19:01:44 9/8/2024</span>
					</div>
				</div>
				<div className="rating-time">
					<div className="rate text-[#ff9948] mb-[5px]">
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
					</div>
					<div className="time text-[#000] text-[12px] font-[400]">(Thuê 4h)</div>
				</div>
			</div>
			<div className="content-rate ml-[62px] text-[14px] leading-[1.5] border-b-[1px] border-solid border-[#e2e6ea] pb-[10px]">
				cute lam
			</div>
		</div>
	);
}

export default Rate;
