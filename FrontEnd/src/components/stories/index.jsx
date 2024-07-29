import Story from './story';

function Stories() {
	const fakeData = [
		{
			id: 1,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/966b1e60-24fc-47cf-8c76-334eaf976082__00ede527-0f9d-47cb-a80f-6e56a1ef1bef__post_video.jpg',
			views: 12,
			avatarSrc:
				'https://files.playerduo.net/production/thumbs/videos/966b1e60-24fc-47cf-8c76-334eaf976082__00ede527-0f9d-47cb-a80f-6e56a1ef1bef__post_video.jpg',
			username: 'JohnDoe',
		},
		{
			id: 2,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/8417f782-1657-44b0-8dfc-71c4c567a626__b3f92fd8-7b9a-4258-a196-e279a4133c14__post_video.jpg',
			views: 8,
			avatarSrc:
				'https://files.playerduo.net/production/images/8417f782-1657-44b0-8dfc-71c4c567a626__b920f370-ac11-11ee-bb52-71a964ce84e0__page_avatar.jpg',
			username: 'Tô Bảo Ngọc nè 🍓',
		},
		{
			id: 3,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/dde16a36-06c7-4e97-8863-73ebecb2b53e__cc3ddf00-bfcb-4c1c-9763-0651cb4253c3__post_video.jpg',
			views: 15,
			avatarSrc:
				'https://files.playerduo.net/production/thumbs/videos/dde16a36-06c7-4e97-8863-73ebecb2b53e__cc3ddf00-bfcb-4c1c-9763-0651cb4253c3__post_video.jpg',
			username: 'Xukie',
		},
		{
			id: 4,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/947ae266-ae81-44c0-a0f4-ed3df7c79652__81044243-460d-46b8-bce8-1de2c9237f01__post_video.jpg',
			views: 20,
			avatarSrc: 'https://playerduo.net/rank/3.png',
			username: 'Thẻo Phưn 🐰',
		},
		{
			id: 5,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/91b4bc64-9d5d-499b-a999-22d195bca0f0__29196143-d7f5-4f88-9d4b-1f61d4df2736__post_video.jpg',
			views: 7,
			avatarSrc:
				'https://files.playerduo.net/production/images/91b4bc64-9d5d-499b-a999-22d195bca0f0__beca4a50-3867-11ef-a76a-7b840fde9bfc__page_avatar.jpg',
			username: 'Thuy Linh',
		},
		{
			id: 6,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/e6bf00b0-2fc2-4005-90d5-5f90727442ec__524f5a22-85be-4ece-adbd-4790bbcf66bd__post_video.jpg',
			views: 9,
			avatarSrc:
				'https://files.playerduo.net/production/images/e6bf00b0-2fc2-4005-90d5-5f90727442ec__11556280-3f40-11ef-906c-b3d37e9ba1d3__page_avatar.jpg',
			username: 'Yen nhiii',
		},
		{
			id: 7,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/a9dd1d3c-37b0-43bc-8845-456246fe5d61__1d789814-a544-4331-9f80-c8eb117e7ecc__post_video.jpg',
			views: 11,
			avatarSrc:
				'https://files.playerduo.net/production/images/a9dd1d3c-37b0-43bc-8845-456246fe5d61__5077d630-0243-11ef-9524-4bb33b42dae7__page_avatar.jpg',
			username: 'Yulia',
		},
		{
			id: 8,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/e0bad276-1dd1-4caf-9fe7-285274c5aac4__a237a21e-4868-4d6a-890d-191a2521a4a8__post_video.jpg',
			views: 5,
			avatarSrc:
				'https://files.playerduo.net/production/thumbs/videos/e0bad276-1dd1-4caf-9fe7-285274c5aac4__a237a21e-4868-4d6a-890d-191a2521a4a8__post_video.jpg',
			username: 'Sakura02',
		},
		{
			id: 9,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/0adf55e0-39cc-4ac7-bd1f-cb413364cf11__cf147355-498c-4018-b3a3-1f4f7e3663fe__post_video.jpg',
			views: 13,
			avatarSrc: 'https://playerduo.net/rank/5.png',
			username: 'Bé Pun ciute ♥',
		},
		{
			id: 10,
			videoSrc:
				'https://files.playerduo.net/production/thumbs/videos/f6966c7d-9815-4513-a9bf-f8497f08dd29__07f44d3e-fd1a-49ba-9445-679e2d6f5d59__post_video.jpg',
			views: 14,
			avatarSrc:
				'https://files.playerduo.net/production/images/f6966c7d-9815-4513-a9bf-f8497f08dd29__e6c9b2c0-4280-11ef-906c-b3d37e9ba1d3__page_avatar.jpg',
			username: 'Quỳnh Bủm',
		},
	];

	return (
		<div className="wrap-content flex">
			{fakeData.map((data) => (
				<Story
					key={data.id}
					storyUrl={data.videoSrc}
					avt={data.avatarSrc}
					name={data.username}
					view={data.views}
				/>
			))}
		</div>
	);
}

export default Stories;
