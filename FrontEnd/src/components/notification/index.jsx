import { useState, useEffect } from 'react';

import { Tabs } from 'antd';
function Notification() {
	const onChange = (key) => {
		console.log(key);
	};
	const items = [
		{
			key: '1',
			label: 'Chính',
			children: (
				<ul className="">
					<div className="px-5 py-2 mb-3 cursor-pointer">
						<div className="flex items-center">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/playerduo-5c5dd.appspot.com/o/avatar%2F6af93234f202be473e260d179a87bbcf.jpg?alt=media&token=c026a955-8d2e-4a46-8847-cb956fa15c1c"
								alt=""
								className="w-[48px] h-[48px] rounded-[50%] mr-2"
							/>
							<div className="text-left text-[16px] text-[#333] font-[400]">
								<p className="text-[14px] line-clamp-2 mb-1">
									phong nguyen da nhac den ban trong 1 binh luan
								</p>
								<span className="text-[#ef574c] text-[13px] block">1 giờ trước</span>
							</div>
						</div>
					</div>
					<div className="px-5 py-2 mb-3">
						<div className="flex items-center">
							<img
								src="https://firebasestorage.googleapis.com/v0/b/playerduo-5c5dd.appspot.com/o/avatar%2F6af93234f202be473e260d179a87bbcf.jpg?alt=media&token=c026a955-8d2e-4a46-8847-cb956fa15c1c"
								alt=""
								className="w-[48px] h-[48px] rounded-[50%] mr-2"
							/>
							<div className="text-left text-[16px] text-[#333] font-[400]">
								<p className="text-[14px] line-clamp-2 mb-1">
									phong nguyen da nhac den ban trong 1 binh luan
								</p>
								<span className="text-[#ef574c] text-[13px] block">1 giờ trước</span>
							</div>
						</div>
					</div>
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
		<div className="absolute w-[500px] h-[468px] z-10 right-1 bg-[#fff] rounded-[4px] box-shadow ">
			<div className="px-2 pt-2 border-b-[1px] border-solid border-[#dcdcdc]">
				<h2 className="text-[18px] text-[#000] mb-2 text-center">Thông báo</h2>
			</div>
			<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
		</div>
	);
}

export default Notification;
