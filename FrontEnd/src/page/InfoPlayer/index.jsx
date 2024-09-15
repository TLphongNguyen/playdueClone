function InfoPlayer() {
	return (
		<div className="wrap-content px-[45px] py-[30px]">
			<div className="flex">
				<div className="pr-[15px] w-[33.33333%]">
					<div className="border-[1px] border-solid border-[#e6eaee]	py-[20px] rounded-[5px] text-center">
						<p className="text-[#90959c] text-[11px] font-[700]">TỔNG TIỀN ĐÃ NẠP</p>
						<span className="text-[#f0564a] text-[30px]">0đ</span>
					</div>
				</div>
				<div className="px-[15px] w-[33.33333%]">
					<div className="border-[1px] border-solid border-[#e6eaee]	py-[20px] rounded-[5px] text-center">
						<p className="text-[#90959c] text-[11px] font-[700]">TỔNG TIỀN ĐÃ DONATE</p>
						<span className="text-[#f0564a] text-[30px]">0đ</span>
					</div>
				</div>
				<div className="pl-[15px] w-[33.33333%]">
					<div className="border-[1px] border-solid border-[#e6eaee]	py-[20px] rounded-[5px] text-center">
						<p className="text-[#90959c] text-[11px] font-[700]">SỐ GIỜ ĐÃ THUÊ</p>
						<span className="text-[#f0564a] text-[30px]">0đ</span>
					</div>
				</div>
			</div>
			<div className="">
				<h1 className="text-[24px] mt-5 mb-[30px] ">Thông tin cá nhân</h1>
			</div>
		</div>
	);
}

export default InfoPlayer;
