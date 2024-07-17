import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EyeOutlined } from '@ant-design/icons';
function Story({ avt, storyUrl, view, name }) {
	return (
		<div className="border-[1px] border-solid border-[#e6e5ea] rounded-[15px] mx-[5px] hover:border-[#bdbdbd] cursor-pointer">
			<div className="relative h-[190px] m-[3px] w-[130px]">
				<img
					src={storyUrl}
					alt=""
					className="w-[220px] h-[100%] object-cover top-0 absolute rounded-t-[15px]"
				/>

				<div className="absolute text-right text-[#fff] text-[14px] bottom-[-18px] w-[100%] right-[10px] h-[20%]">
					<EyeOutlined />
					<span className="ml-1">{view}</span>
				</div>
			</div>
			<div className="pt-[15px] pb-[5px] text-center flex items-center">
				<img src={avt} alt="" className="w-[30px] h-[30px] rounded-[50%] p-[2px] mx-[2px]" />
				<span className="text-[14px] text-[#000] line-clamp-1">{name}</span>
			</div>
		</div>
	);
}

export default Story;
