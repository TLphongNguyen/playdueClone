import { useState, useEffect } from 'react';
import { Tabs } from 'antd';
function Notification({ data, onChange }) {
	console.log(data);

	const items = [
		{
			key: '1',
			label: 'Chính',
			children: (
				<ul className="overflow-y-scroll">
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
		{
			key: '2',
			label: 'Khác',
			children: 'Content of Tab Pane 2',
		},
	];
	return (
		<div className="absolute w-[500px] h-[468px] z-10 right-1 bg-[#fff] rounded-[4px] box-shadow overflow-y-scroll">
			<div className="px-2 pt-2 border-b-[1px] border-solid border-[#dcdcdc]">
				<h2 className="text-[18px] text-[#000] mb-2 text-center">Thông báo</h2>
			</div>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</div>
	);
}

export default Notification;
