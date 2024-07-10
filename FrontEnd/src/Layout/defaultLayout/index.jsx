import Header from '~/Layout/components/header';
import Sidebar from './sidebar';

function DefaultLayout({ children }) {
	return (
		<div className="w-[100%]">
			<Header />
			<div className="wrap-body flex h-[93vh]">
				<Sidebar />
				<div className="wrap-content">{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
