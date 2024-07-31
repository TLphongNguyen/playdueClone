import Player from './player/player';
function Players({ data }) {
	return (
		<div className="">
			{data.map((item, index) => {
				<Player />;
			})}
		</div>
	);
}

export default Players;
