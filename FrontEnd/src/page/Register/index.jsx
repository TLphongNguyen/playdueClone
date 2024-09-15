import { useState } from 'react';
import Login from '~/components/Login';
import Register from '~/components/Register';

function Registers() {
	const [isLogin, setIsLogin] = useState(true);
	const toggleComponent = () => {
		setIsLogin(!isLogin);
	};
	return (
		<div className="wrap-content bg-[#eaebef] pt-[100px] h-[100%]">
			<div className="container flex">
				<div className="left-content w-[59.33333333%] px-[15px]">
					<div className="">
						<img className="w-[100%]" src="https://playerduo.net/favicons/banner_login.png" alt="" />
					</div>
				</div>
				<div className="right-content w-[40.66666667%] px-[30px]">
					{isLogin ? (
						<Login toggleComponent={toggleComponent} />
					) : (
						<Register toggleComponent={toggleComponent} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Registers;
