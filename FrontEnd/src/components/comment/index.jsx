function Comment({ name, time, content, avt }) {
	return (
		<div className="flex mb-4">
			<div className="">
				<img
					className="w-[42px] h-[42px] rounded-[50%] p-[2px] mr-[10px] mx-[2px] object-cover cursor-pointer"
					src={avt}
					alt=""
				/>
			</div>
			<div className="">
				<span className="text-3 text-[#000] font-[600] cursor-pointer">{name}</span>
				<div className="text-[11px] text-[#808080]">
					<span className="time mr-2">{time} Gio truoc</span>
					<span className="cursor-pointer text-[#808080] hover:text-[#000]">Trả lời</span>
				</div>
				<div className="content-coment">
					<span className="text-[12px]">{content}</span>
				</div>
			</div>
		</div>
	);
}

export default Comment;
