import { useState } from 'react';
import Stories from '~/components/stories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Home() {
	return (
		<div className="wrap-content mt-[34px] flex">
			<div className="border-[1px] border-solid border-[#e6e5ea] rounded-[15px] mr-[5px] hover:border-[#bdbdbd] ">
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
			<Stories />
		</div>
	);
}

export default Home;
