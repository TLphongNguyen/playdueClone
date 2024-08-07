import ReCAPTCHA from 'react-google-recaptcha';
function Register({ toggleComponent }) {
	function onChange(value) {
		console.log('Captcha value:', value);
	}
	return (
		<div className="wrap-content">
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
					<input
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[15px] border-[1px] border-solid border-[#444] opacity-80 text-[#333] px-[15px]"
						placeholder="Nhập lại mật khẩu"
					/>
					<ReCAPTCHA className="mx-auto w-[100%]" sitekey="Your client site key" onChange={onChange} />,
					<button
						type="submit"
						className="h-[42px] w-[100%] rounded-[10px] mb-[7px] mt-[25px] px-[15px] bg-[#f0564a] text-[#fff] text-[15px] font-[600] hover:bg-[#ef4b3f]"
					>
						Đăng kí tài khoản
					</button>
				</form>
				<div className="flex justify-between items-center">
					<span onClick={toggleComponent} className="mb-[15px] w-[100%] text-left block">
						<span className="text-[#1e1f24] hover:text-[#f0564a] underline">Đăng nhập tài khoản</span>
					</span>
					<span className="w-[100%] text-right block mb-[10px]">
						<a href="/" className="text-[#1e1f24] hover:text-[#f0564a]">
							Quên mật khẩu?
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Register;
