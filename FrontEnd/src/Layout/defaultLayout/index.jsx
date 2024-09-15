import Header from '~/Layout/components/header';
import Sidebar from './sidebar';

function DefaultLayout({ children, showSidebar = true, sidebar }) {
	const SideBarItem = sidebar;
	return (
		<div className="w-[100%]">
			<Header className="fixed" />
			<div className="wrap-body flex h-[93vh]">
				{showSidebar && <Sidebar content={<SideBarItem />} className="fixed" />}
				<div
					className={`wrap-content w-[100%] overflow-y-auto no-scrollbar ${showSidebar ? 'ml-[sidebar-width]' : ''}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
