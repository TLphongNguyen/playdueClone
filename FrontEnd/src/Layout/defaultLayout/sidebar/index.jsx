import { useState } from 'react';

function Sidebar() {
	return (
		<div className="bg-[#eeeeee] w-[224px] h-[100%] pt-5 pb-[60px]">
			<div className="pl-[14px] pb-[5px]">
				<h3 className="text-[14px] mb-[10px] text-[#bcbcbc] font-[700]">Danh mục game</h3>
			</div>
			<div className="">
				<ul className="">
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__a844a8e0-34cf-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Đấu Trường Chân Lý</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__c5802ad0-33e2-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Pubg PC</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__3b5dac30-34d0-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Quân Mobile</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
					<li className=" py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] hover:bg-[#f9e6e5] ">
						<button className="items-center flex">
							<img
								className="w-[35px] rounded-[5px] mr-[10px]"
								src="https://files.playerduo.net/production/game_avatars/715867c6-698f-411a-b4f9-1e9093130b60__f364f2e0-34ce-11ed-838c-b120e70abb59__game_avatars.jpg"
								alt=""
							/>
							<div className="">
								<span>Liên Minh Huyền Thoại</span>
							</div>
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
