import { Layout, theme } from 'antd';
const { Header } = Layout;
function HeaderAdmin() {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<div className="h-[80px] shadow-xl fixed top-0 right-0 left-0 ml-[290px]">
			<Header className="h-[100%] bg-[#fff]">
				<div className="flex w-[100%] justify-between px-[30px] items-center h-[100%]">
					<div className="logo w-[45px] h-auto flex items-center">
						<img
							className="w-[100%] h-[100%] mr-[10px]"
							src="https://files.playerduo.net/production/static-files/logo.png"
							alt="anh logo"
						/>
						<p className="text-[#ec574c] leading-[1.3] min-w-[170px] font-[600] text-[18px]">
							Player Duo Admin
						</p>
					</div>
					<div className="flex items-center ">
						<div className="text-right">
							<p className="text-[#1c2434] leading-[1.3]">Xin chào</p>
							<p className="text-[#ec574c] leading-[1.3] text-[13px]">Admin</p>
						</div>
						<img
							className="w-[45px] h-auto rounded-[50%] ml-[10px]"
							src="https://files.playerduo.net/production/images/6687fab6-208e-43f4-adc0-1a73fcfe7720__29be9b80-84d6-11ef-9376-b533eb6f1b4c__player_avatar.jpg"
							alt=""
						/>
					</div>
				</div>
			</Header>
		</div>
	);
}

export default HeaderAdmin;
