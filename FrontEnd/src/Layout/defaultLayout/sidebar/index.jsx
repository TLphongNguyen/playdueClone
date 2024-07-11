import { useState } from 'react';

function Sidebar() {
	const [activeIndex, setActiveIndex] = useState(null);
	const games = [
		{
			name: 'Liên Minh Huyền Thoại',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Đấu Trường Chân Lý',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Pubg PC',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Liên minh tốc chiến',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Đấu Trường Chân Lý',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__99a18050-34d5-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Pubg PC',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Liên Minh Huyền Thoại',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Đấu Trường Chân Lý',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Pubg PC',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Liên Minh Huyền Thoại',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Đấu Trường Chân Lý',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
		{
			name: 'Pubg PC',
			imgSrc: 'https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__53121480-33e3-11ed-838c-b120e70abb59__game_avatars.jpg',
		},
	];
	return (
		<div className="bg-[#eeeeee] w-[224px] h-[100%] pt-5 pb-[60px]">
			<div className="pl-[14px] pb-[5px]">
				<h3 className="text-[14px] mb-[10px] text-[#bcbcbc] font-[700]">Danh mục game</h3>
			</div>
			<div className="">
				<ul>
					{games.map((game, index) => (
						<li
							key={index}
							className={`py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] font-[600]  hover:bg-[#f9e6e5] ${activeIndex === index ? 'bg-[#f0564a] text-[#fff] hover:bg-[#f0564a]' : ''}`}
							onClick={() => setActiveIndex(index)}
						>
							<button className="items-center flex">
								<img className="w-[35px] rounded-[5px] mr-[10px]" src={game.imgSrc} alt="" />
								<div>
									<span>{game.name}</span>
								</div>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
