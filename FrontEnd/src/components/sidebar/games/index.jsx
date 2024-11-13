import { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
function Game() {
	const [activeIndex, setActiveIndex] = useState(null);
	const [data, setData] = useState([]);
	const fetchdata = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getGames`);
			setData(response.data);
			return response;
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchdata();
	}, []);
	return (
		<div className="wrap-content w-[224px] bg-[#eeeeee] h-[100%] pt-5">
			<div className="pl-[14px] pb-[5px]">
				<h3 className="text-[14px] mb-[10px] text-[#bcbcbc] font-[700]">Danh mục game</h3>
			</div>
			<div className="">
				<ul>
					{data.map((game, index) => (
						<li
							key={index}
							className={`py-2 px-[10px] cursor-pointer text-[13px] text-[#6c6c6c] font-[600]  ${activeIndex === index ? 'bg-[#f0564a] text-[#fff] hover:bg-[#f0564a]' : ' hover:bg-[#f9e6e5]'}`}
							onClick={() => setActiveIndex(index)}
						>
							<button className="items-center flex">
								<img className="w-[35px] rounded-[5px] mr-[10px]" src={game.gameImg} alt="" />
								<div>
									<span>{game.gameName}</span>
								</div>
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Game;
