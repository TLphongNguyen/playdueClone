import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
function Notification({ data, onChange }) {
	const items = [
		{
			key: '1',
			label: 'Thông báo',
			children: (
				<ul className="">
					{data?.map((item) => (
						<div className="px-5 py-2 mb-3 cursor-pointer">
							<div className="flex items-center">
								<img
									src={item.avt}
									alt=""
									className="w-[48px] h-[48px] rounded-[50%] mr-2 object-cover"
								/>
								<div className="text-left text-[16px] text-[#333] font-[400]">
									<p className="text-[14px] line-clamp-2 mb-1">{item.content}</p>
									<span className="text-[#ef574c] text-[13px] block">1 giờ trước</span>
								</div>
							</div>
						</div>
					))}
				</ul>
			),
		},
	];
	return (
		<div className="absolute w-[500px] h-[468px] z-10 right-1 bg-[#fff] rounded-[4px] box-shadow overflow-y-scroll">
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</div>
	);
}

export default Notification;
