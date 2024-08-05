import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faPlus, faUserShield, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'antd';
import { HomeOutlined, TrophyOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Tippy from '@tippyjs/react';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
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
					{/* <div className="mx-[2px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
						<a className=" h-[45px] w-[45px] flex " href=" #">
							<FontAwesomeIcon
								className="text-[24px] items-center text-center m-auto hover:text-[#f0564a]"
								icon={faUserTie}
							/>
						</a>
					</div> */}
					<div className="mx-[2px] bg-[#e8e8e8] rounded-[25px] leading-[45px] w-[110px] h-[45px] text-center">
						<button onClick={showModal} className="font-[600]">
							Đăng nhập
						</button>
						<Modal
							width={'446px'}
							height={'552px'}
							open={isModalOpen}
							onOk={handleOk}
							onCancel={handleCancel}
							footer={null}
							closable={false}
						>
							<div className="py-[10px] px-[30px] h-[100%]">
								<div className="mt-[30px] mb-[50px] text-center">
									<img
										className="w-[55px] bg-[#f0564a] rounded-[10px] mx-auto"
										src="https://files.playerduo.net/production/static-files/logo.png"
										alt=""
									/>
									<h1 className="my-[10px] text-[20px] text-[#f0564a] font-[600]">PlayerDuo</h1>
								</div>
								<form action="" className="">
									<input
										className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
										placeholder="Tên đăng nhập hoặc email"
									/>
									<input
										className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
										placeholder="Mật khẩu"
									/>
									<span className="w-[100%] text-right block mt-[5px] mb-[10px]">
										<a href="/" className="text-[#1e1f24] hover:text-[#f0564a]">
											Quên mật khẩu?
										</a>
									</span>
									<button
										type="submit"
										className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[25px] px-[15px] bg-[#f0564a] text-[#fff] text-[15px] font-[600] hover:bg-[#ef4b3f]"
									>
										Đăng nhập
									</button>
								</form>
								<button
									type="submit"
									className="h-[42px] leading-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] px-[15px] border-[1px] border-solid border-[#444] text-[#444] text-[15px]"
								>
									<FontAwesomeIcon className="mr-2 text-[#3f5ead] text-[25px]" icon={faFacebook} />
									Đăng nhập bằng FaceBook
								</button>
								<span className="mt-[60px] mb-[15px] w-[100%] text-center block">
									<a href="" className="text-[#1e1f24] hover:text-[#f0564a] underline">
										Đăng ký tài khoản
									</a>
								</span>
							</div>
						</Modal>
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
