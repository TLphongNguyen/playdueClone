import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Loading({ loading }) {
	const customIcon = <LoadingOutlined style={{ fontSize: 24, color: 'red' }} spin />;
	return (
		<div className="p-6 absolute w-[100%] h-[100%]">
			<Spin spinning={loading} indicator={customIcon}>
				<div className="bg-gray-200 p-4 rounded-md"></div>
			</Spin>
		</div>
	);
}

export default Loading;
