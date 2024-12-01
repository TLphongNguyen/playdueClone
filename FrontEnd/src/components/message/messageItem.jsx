function MessageItem({ name, avt, content }) {
	// console.log(name, avt, content);

	return (
		<div className="flex items-center mb-3">
			<div className="w-[42px] h-[42px] mr-2">
				<img
					src={avt}
					alt=""
					className="max-h-[100%] min-w-[100%] overflow-hidden rounded-[100%] object-cover"
				/>
			</div>
			<div className="bg-[#dfdfdf] table-cell align-middle rounded-[8px] p-[5px] w-[100%] mr-1 h-[45px]">
				<p className="float-left inline text-[13px] mb-0 mr-1">
					<strong className="inline text-[#5f67f8]">
						<span>{name}</span>:
					</strong>
				</p>
				<p className="text-left text-[13px] text-[#333] line-clamp-2">{content}</p>
			</div>
		</div>
	);
}

export default MessageItem;
