import Header from '~/Layout/components/header';
import Sidebar from './sidebar';

function DefaultLayout({ children }) {
	return (
		<div className="w-[100%]">
			<Header className="fixed" />
			<div className="wrap-body flex h-[93vh]">
				<Sidebar className="fixed" />
				<div className="wrap-content container overflow-y-auto no-scrollbar">{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
