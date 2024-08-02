import Player from './player/player';
function Players({ data }) {
	return (
		<div className="flex flex-wrap mx-[-8px]">
			{data.map((item, index) => (
				<Player
					key={index}
					avt={item.avt}
					name={item.name}
					price={item.price}
					des={item.des}
					rate={item.rate}
					quantity={item.quantity}
				/>
			))}
		</div>
	);
}

export default Players;
