import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPlus, faUserShield, faUserTie } from '@fortawesome/free-solid-svg-icons';

import { HomeOutlined, TrophyOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Tippy from '@tippyjs/react';
import { faBell } from '@fortawesome/free-regular-svg-icons';

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
				<div className="flex mr-[180px]">
					<Tippy
						content={
							<span
								style={{
									color: '#fff',
									fontSize: '14px',
									backgroundColor: '#333',
									padding: '2px 10px ',
									fontWeight: '700',
									borderRadius: '4px',
								}}
							>
								Trang chủ
							</span>
						}
						animation="scale"
						theme="light-border"
						arrow={true}
						delay={[300, 0]}
					>
						<div className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
							<a className="block h-[45px] w-[45px]" href="#">
								<HomeOutlined
									className="text-[#f0564a] h-[100%] hover:text-[#f0564a]"
									style={{ fontSize: '24px' }}
								/>
							</a>
						</div>
					</Tippy>
					<Tippy
						content={
							<span
								style={{
									color: '#fff',
									fontSize: '14px',
									backgroundColor: '#333',
									padding: '2px 10px ',
									fontWeight: '700',
									borderRadius: '4px',
								}}
							>
								Stories
							</span>
						}
						animation="scale"
						theme="light-border"
						arrow={true}
						delay={[300, 0]}
					>
						<div className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
							<a className="block h-[45px] w-[45px] " href=" #">
								<VideoCameraOutlined
									className="h-[100%]  hover:text-[#f0564a]"
									style={{ fontSize: '24px' }}
								/>
							</a>
						</div>
					</Tippy>
					<div className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className="block h-[45px] w-[45px] " href=" #">
							<TrophyOutlined className="h-[100%]  hover:text-[#f0564a]" style={{ fontSize: '24px' }} />
						</a>
					</div>
				</div>
				<div className="flex">
					<Tippy
						content={
							<span
								style={{
									color: '#fff',
									fontSize: '14px',
									backgroundColor: '#333',
									padding: '2px 10px ',
									fontWeight: '700',
									borderRadius: '4px',
								}}
							>
								Chính sách
							</span>
						}
						animation="scale"
						theme="light-border"
						arrow={true}
						delay={[300, 0]}
					>
						<div className="mx-[2px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
							<a className=" h-[45px] w-[45px] flex " href=" #">
								<FontAwesomeIcon
									className="text-[20px] items-center text-center m-auto  hover:text-[#f0564a]"
									icon={faUserShield}
								/>
							</a>
						</div>
					</Tippy>
					<div className="mx-[2px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className=" h-[45px] w-[45px] flex " href=" #">
							<FontAwesomeIcon
								className="text-[22px] items-center text-center m-auto hover:text-[#f0564a]"
								icon={faBell}
							/>
						</a>
					</div>
					<div className="mx-[2px] bg-[#e8e8e8] rounded-[25px] w-[62px] h-[45px] text-center px-[10px]">
						<a className=" h-[45px] w-[100%] flex  hover:text-[#f0564a] items-center" href=" #">
							<FontAwesomeIcon
								className="text-[16px] items-center text-center m-auto mr-[3px]"
								icon={faPlus}
							/>
							<span className="text-[16px]">0 đ</span>
						</a>
					</div>
					<div className="mx-[2px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className=" h-[45px] w-[45px] flex " href=" #">
							<FontAwesomeIcon
								className="text-[24px] items-center text-center m-auto hover:text-[#f0564a]"
								icon={faUserTie}
							/>
						</a>
					</div>
					<div className="mx-[2px] border-l-1px border-solid border-[#ececec]  w-[45px] h-[45px] text-center">
						<a className=" h-[45px] w-[45px] flex  hover:text-[#f0564a] items-center" href=" #">
							<FontAwesomeIcon className="text-[24px] items-center text-center m-auto" icon={faMoon} />
						</a>
					</div>
					<div className=""></div>
				</div>
			</div>
		</div>
	);
}

export default Header;
