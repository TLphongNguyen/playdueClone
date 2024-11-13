import Player from './player/player';
function Players({ data }) {
	return (
		<div className="flex flex-wrap mx-[-8px]">
			{data.map((item, index) => (
				<Player
					key={index}
					avt={item.avt}
					name={item.fullName}
					price={item.price}
					des={item.description}
					rate={item.rate}
					quantity={item.quantity}
					customerId={item.customerId}
				/>
			))}
		</div>
	);
}

export default Players;
