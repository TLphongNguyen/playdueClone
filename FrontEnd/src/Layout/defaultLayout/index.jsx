import Header from '~/Layout/components/header';
import Sidebar from './sidebar';

function DefaultLayout({ children }) {
	return (
		<div className="w-[100%]">
			<Header />
			<div className="wrap-body flex">
				<Sidebar />
				<div className="wrap-content">{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
