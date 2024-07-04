import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
// import img from '~/assets/img';
import { HomeOutlined, TrophyOutlined, VideoCameraOutlined } from '@ant-design/icons';

function Header() {
	return (
		<div className="gwap-content h-[68px] py-[10px] px-[15px] border-b-[1px] border-solid border-[#dcdcdc]">
			<div className="hearder-content flex justify-between">
				<div className="logo w-[45px] h-auto">
					<img
						className="w-[100%] h-[100%]"
						src="https://files.playerduo.net/production/static-files/logo.png"
						alt="anh logo"
					/>
				</div>
				<div className="flex">
					<div className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className="block h-[45px] w-[45px] " href=" #">
							<HomeOutlined className="text-[#f0564a] h-[100%]" style={{ fontSize: '24px' }} />
						</a>
					</div>
					<div className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className="block h-[45px] w-[45px] " href=" #">
							<VideoCameraOutlined className="h-[100%]" style={{ fontSize: '24px' }} />
						</a>
					</div>
					<div className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className="block h-[45px] w-[45px] " href=" #">
							<TrophyOutlined className="h-[100%]" style={{ fontSize: '24px' }} />
						</a>
					</div>
				</div>
				<div className="">
					<div className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className=" h-[45px] w-[45px] flex " href=" #">
							<FontAwesomeIcon
								className="text-[24px] items-center text-center"
								icon={faUserShield}
								// style={{ fontSize: '24px' }}
							/>
						</a>
					</div>
					<div className=""></div>
					<div className=""></div>
					<div className=""></div>
					<div className=""></div>
				</div>
			</div>
		</div>
	);
}

export default Header;
