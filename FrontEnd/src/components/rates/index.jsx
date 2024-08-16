import Rate from './rate';
import { Pagination } from 'antd';
function Rates() {
	return (
		<div className="wrap-content">
			<Rate />
			<Rate />
			<Pagination className="mb-[50px] mt-[20px] mx-auto flex justify-center" size="default" total={50} />
		</div>
	);
}

export default Rates;
