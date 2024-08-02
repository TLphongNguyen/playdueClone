import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Player({ avt, price, name, des, rate, quantity }) {
	return (
		<div className="wrap-content px-2">
			<div className="content mb-[45px] border-[1px] border-solid border-[#e6e5ea] rounded-[10px] cursor-pointer overflow-hidden h-[356px]">
				<div className="avt w-[238px] h-[238px] relative">
					<img className="w-[100%] h-[100%] object-cover" src={avt} alt="anh dai dien" />
					<div className="price absolute right-[5px] bottom-[10px] bg-[#f0564a] rounded-[14px] text-[#fff] text-[13px] pt-[6px] px-[10px] py-1">
						{price} đ/h
					</div>
				</div>
				<div className="py-[15px] px-2">
					<h2 className="name text-[#000] font-[700]">{name}</h2>
					<p className="des text-[#9298a1] text-[12px] mt-[10px] mb-3">{des}</p>
					<div className="flex justify-between">
						<div className="game"></div>
						<div className="rate font-[700] text-[700]">
							<FontAwesomeIcon className="text-[#f0564a] mr-1" icon={faStar} />
							{rate}
							<i className="text-[14px] text-[#aaa] font-[100] ml-1">({quantity})</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Player;
