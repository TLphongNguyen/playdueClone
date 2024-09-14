import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMoon,
	faPlus,
	faUserShield,
	faUserTie,
	faMinus,
	faCreditCard,
	faUserLock,
	faClock,
	faUserGroup,
	faGears,
	faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Menu, Dropdown, Modal, Avatar, Button } from 'antd';
import { HomeOutlined, TrophyOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Login from '~/components/Login';
import Register from '~/components/Register';
import Rankings from '~/components/Rankings';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setUserInfo, logout } from '~/redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
	const userInfo = useSelector((state) => state.user.userInfo);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpenRanking, setIsModalOpenRanking] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
	const showModal = () => {
		setIsLogin(true);
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const showRankings = () => {
		setIsModalOpenRanking(true);
	};

	const handleOkRankings = () => {
		setIsModalOpenRanking(false);
	};

	const handleCancelRankings = () => {
		setIsModalOpenRanking(false);
	};
	const toggleComponent = () => {
		setIsLogin(!isLogin);
	};
	useEffect(() => {
		const fetchCustomer = async () => {
			try {
				const token = sessionStorage.getItem('token');

				const response = await axios.get('http://localhost:3003/api/auth/customer', {
					headers: {
						authorization: token,
					},
				});
				dispatch(setUserInfo(response.data));
			} catch (error) {
				console.error('Error fetching customer:', error);
			}
		};
		fetchCustomer();
	}, [dispatch]);
	// const items = [
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[55px] h-[55px] mr-[10px]">
	// 					<img className="w-[100%] h-[100%] rounded-[50%]" src={userInfo.avt} alt="" />
	// 				</div>
	// 				<div className="">
	// 					<span className="block text-[16px] font-[600] leading-[1.1]">{userInfo.fullName}</span>
	// 					<span className="block">{userInfo.email}</span>
	// 					<span className="block text-[#90959c] text-[11px]">Xem trang player của bạn</span>
	// 				</div>
	// 			</div>
	// 		),
	// 		key: '01',
	// 	},
	// 	{
	// 		type: 'divider',
	// 	},
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[30px] h-[30px] rounded-[50%] bg-[#dcdcdc] pl-[3px] mr-[8px]">
	// 					<span className="h-[100%] block">
	// 						<FontAwesomeIcon icon={faMinus} className="py-[7px] mx-auto block" />
	// 					</span>
	// 				</div>
	// 				<span className="text-[15px] font-[550] ">Rút tiền</span>
	// 			</div>
	// 		),
	// 		key: '0',
	// 	},
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[30px] h-[30px] rounded-[50%] bg-[#dcdcdc] pl-[3px] mr-[8px]">
	// 					<span className="h-[100%] block">
	// 						<FontAwesomeIcon icon={faCreditCard} className="py-[7px] mx-auto block" />
	// 					</span>
	// 				</div>
	// 				<span className="text-[15px] font-[550] ">Mua thẻ</span>
	// 			</div>
	// 		),
	// 		key: '1',
	// 	},
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[30px] h-[30px] rounded-[50%] bg-[#dcdcdc] pl-[3px] mr-[8px]">
	// 					<span className="h-[100%] block">
	// 						<FontAwesomeIcon icon={faUserLock} className="py-[7px] mx-auto block" />
	// 					</span>
	// 				</div>
	// 				<span className="text-[15px] font-[550] ">Tạo khóa bảo vệ</span>
	// 			</div>
	// 		),
	// 		key: '2',
	// 	},
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[30px] h-[30px] rounded-[50%] bg-[#dcdcdc] pl-[3px] mr-[8px]">
	// 					<span className="h-[100%] block">
	// 						<FontAwesomeIcon icon={faClock} className="py-[7px] mx-auto block" />
	// 					</span>
	// 				</div>
	// 				<span className="text-[15px] font-[550] ">Lịch sử giao dịch</span>
	// 			</div>
	// 		),
	// 		key: '3',
	// 	},
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[30px] h-[30px] rounded-[50%] bg-[#dcdcdc] pl-[3px] mr-[8px]">
	// 					<span className="h-[100%] block">
	// 						<FontAwesomeIcon icon={faUserGroup} className="py-[7px] mx-auto block" />
	// 					</span>
	// 				</div>
	// 				<span className="text-[15px] font-[550] ">Theo dõi Player</span>
	// 			</div>
	// 		),
	// 		key: '4',
	// 	},
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[30px] h-[30px] rounded-[50%] bg-[#dcdcdc] pl-[3px] mr-[8px]">
	// 					<span className="h-[100%] block">
	// 						<FontAwesomeIcon icon={faGears} className="py-[7px] mx-auto block" />
	// 					</span>
	// 				</div>
	// 				<span className="text-[15px] font-[550] ">Cài đặt tài khoản</span>
	// 			</div>
	// 		),
	// 		key: '5',
	// 	},
	// 	{
	// 		label: (
	// 			<div className="flex items-center">
	// 				<div className="w-[30px] h-[30px] rounded-[50%] bg-[#dcdcdc] pl-[3px] mr-[8px]">
	// 					<span className="h-[100%] block">
	// 						<FontAwesomeIcon icon={faPowerOff} className="py-[7px] mx-auto block" />
	// 					</span>
	// 				</div>
	// 				<span className="text-[15px] font-[550] ">Đăng xuất</span>
	// 			</div>
	// 		),
	// 		key: '6',
	// 	},
	// 	{
	// 		type: 'divider',
	// 	},
	// ];
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
				<div className="flex ml-[200px]">
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
							<Link to="/" className="block h-[45px] w-[45px]" href="#">
								<HomeOutlined
									className="text-[#f0564a] h-[100%] hover:text-[#f0564a]"
									style={{ fontSize: '24px' }}
								/>
							</Link>
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
							<Link to="/story" className="block h-[45px] w-[45px] " href=" #">
								<VideoCameraOutlined
									className="h-[100%]  hover:text-[#f0564a]"
									style={{ fontSize: '24px' }}
								/>
							</Link>
						</div>
					</Tippy>
					<div
						onClick={showRankings}
						className="mx-[10px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center"
					>
						<a className="block h-[45px] w-[45px] ">
							<TrophyOutlined className="h-[100%]  hover:text-[#f0564a]" style={{ fontSize: '24px' }} />
						</a>
					</div>
					<Modal
						title="Bảng xếp hạng đại gia"
						open={isModalOpenRanking}
						onOk={handleOkRankings}
						onCancel={handleCancelRankings}
						width={'600px'}
						height={'960px'}
						footer={false}
					>
						<Rankings />
					</Modal>
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
					{/* {userInfo ? (
						<Dropdown
							menu={{
								items,
							}}
							trigger={['click']}
						>
							<a onClick={(e) => e.preventDefault()}>
								<div className="mx-[2px] bg-[#e8e8e8] rounded-[50%] w-[45px] h-[45px] text-center">
									<a className=" h-[45px] w-[45px] flex " href=" #">
										<FontAwesomeIcon
											className="text-[24px] items-center text-center m-auto hover:text-[#f0564a]"
											icon={faUserTie}
										/>
									</a>
								</div>
							</a>
						</Dropdown>
					) : (
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
								{isLogin ? (
									<Login toggleComponent={toggleComponent} />
								) : (
									<Register toggleComponent={toggleComponent} />
								)}
							</Modal>
						</div>
					)} */}
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
