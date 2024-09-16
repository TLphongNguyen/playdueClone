import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DatePicker, Select } from 'antd';
function InfoPlayer() {
	const userInfo = useSelector((state) => state.user.userInfo);
	const [imageSrc, setImageSrc] = useState(userInfo.avt);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImageSrc(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
	// console.log(imageSrc);
	const options = [
		{ value: 'an_giang', label: 'An Giang' },
		{ value: 'ba_ria_vung_tau', label: 'Bà Rịa - Vũng Tàu' },
		{ value: 'bac_giang', label: 'Bắc Giang' },
		{ value: 'bac_kan', label: 'Bắc Kạn' },
		{ value: 'bac_lieu', label: 'Bạc Liêu' },
		{ value: 'bac_ninh', label: 'Bắc Ninh' },
		{ value: 'ben_tre', label: 'Bến Tre' },
		{ value: 'binh_duong', label: 'Bình Dương' },
		{ value: 'binh_dinh', label: 'Bình Định' },
		{ value: 'binh_phuoc', label: 'Bình Phước' },
		{ value: 'binh_thuan', label: 'Bình Thuận' },
		{ value: 'ca_mau', label: 'Cà Mau' },
		{ value: 'can_tho', label: 'Cần Thơ' },
		{ value: 'cao_bang', label: 'Cao Bằng' },
		{ value: 'da_nang', label: 'Đà Nẵng' },
		{ value: 'dak_lak', label: 'Đắk Lắk' },
		{ value: 'dak_nong', label: 'Đắk Nông' },
		{ value: 'dien_bien', label: 'Điện Biên' },
		{ value: 'dong_nai', label: 'Đồng Nai' },
		{ value: 'dong_thap', label: 'Đồng Tháp' },
		{ value: 'gia_lai', label: 'Gia Lai' },
		{ value: 'ha_giang', label: 'Hà Giang' },
		{ value: 'ha_nam', label: 'Hà Nam' },
		{ value: 'ha_noi', label: 'Hà Nội' },
		{ value: 'ha_tinh', label: 'Hà Tĩnh' },
		{ value: 'hai_duong', label: 'Hải Dương' },
		{ value: 'hai_phong', label: 'Hải Phòng' },
		{ value: 'hau_giang', label: 'Hậu Giang' },
		{ value: 'hoa_binh', label: 'Hòa Bình' },
		{ value: 'hung_yen', label: 'Hưng Yên' },
		{ value: 'khanh_hoa', label: 'Khánh Hòa' },
		{ value: 'kien_giang', label: 'Kiên Giang' },
		{ value: 'kon_tum', label: 'Kon Tum' },
		{ value: 'lai_chau', label: 'Lai Châu' },
		{ value: 'lam_dong', label: 'Lâm Đồng' },
		{ value: 'lang_son', label: 'Lạng Sơn' },
		{ value: 'lao_cai', label: 'Lào Cai' },
		{ value: 'long_an', label: 'Long An' },
		{ value: 'nam_dinh', label: 'Nam Định' },
		{ value: 'nghe_an', label: 'Nghệ An' },
		{ value: 'ninh_binh', label: 'Ninh Bình' },
		{ value: 'ninh_thuan', label: 'Ninh Thuận' },
		{ value: 'phu_tho', label: 'Phú Thọ' },
		{ value: 'phu_yen', label: 'Phú Yên' },
		{ value: 'quang_binh', label: 'Quảng Bình' },
		{ value: 'quang_nam', label: 'Quảng Nam' },
		{ value: 'quang_ngai', label: 'Quảng Ngãi' },
		{ value: 'quang_ninh', label: 'Quảng Ninh' },
		{ value: 'quang_tri', label: 'Quảng Trị' },
		{ value: 'soc_trang', label: 'Sóc Trăng' },
		{ value: 'son_la', label: 'Sơn La' },
		{ value: 'tay_ninh', label: 'Tây Ninh' },
		{ value: 'thai_binh', label: 'Thái Bình' },
		{ value: 'thai_nguyen', label: 'Thái Nguyên' },
		{ value: 'thanh_hoa', label: 'Thanh Hóa' },
		{ value: 'thua_thien_hue', label: 'Thừa Thiên Huế' },
		{ value: 'tien_giang', label: 'Tiền Giang' },
		{ value: 'tp_ho_chi_minh', label: 'TP Hồ Chí Minh' },
		{ value: 'tra_vinh', label: 'Trà Vinh' },
		{ value: 'tuyen_quang', label: 'Tuyên Quang' },
		{ value: 'vinh_long', label: 'Vĩnh Long' },
		{ value: 'vinh_phuc', label: 'Vĩnh Phúc' },
		{ value: 'yen_bai', label: 'Yên Bái' },
	];
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};
	const onChange = (date, dateString) => {
		console.log(date, dateString);
	};
	const handleClick = () => {
		document.querySelector('#inputimg').click();
	};
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
			<div className="w-[50%]">
				<div className="">
					<h1 className="text-[24px] mt-5 mb-[30px] ">Thông tin cá nhân</h1>
					<div className="flex items-center my-[30px]">
						<img className="w-[96px] h-[96px] rounded-[50%] object-cover" src={imageSrc} alt="" />
						<div onClick={handleClick} className="ml-[30px] cursor-pointer select-none">
							<span className="text-[16px] text-[#f0564a] font-[600]">Thay đổi</span>
							<p className="text-[13px] text-[#90959c]">JPG, GIF or PNG, 5 MB. </p>
							<input
								type="file"
								name=""
								id="inputimg"
								accept="image/png, image/jpeg, image/gif"
								onChange={handleImageChange}
								hidden
							/>
						</div>
					</div>
				</div>
				<form action="" className="">
					<div className=" mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="">
							Họ và tên
						</label>
						<input
							defaultValue={userInfo.fullName}
							className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className=" mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="">
							Biệt danh
						</label>
						<input
							defaultValue={userInfo.nickname}
							className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							type="text"
						/>
					</div>
					<div className=" mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="">
							Ngày sinh
						</label>
						<DatePicker
							className="h-[54px] px-[15px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							onChange={onChange}
						/>
					</div>
					<div className=" mb-[22px]">
						<label className="text-[#90959c] text-[15px] font-[550] uppercase mb-[10px]" htmlFor="">
							Địa chỉ
						</label>
						<Select
							className="h-[54px] border-[1px] border-[#e6eaee] border-solid text-[15px] text-[#333] w-[100%] mb-[7px] rounded-[5px]"
							defaultValue="Thành phố"
							style={{ fontSize: 16 }}
							onChange={handleChange}
							options={options}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

export default InfoPlayer;
