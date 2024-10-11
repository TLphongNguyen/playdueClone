import Sidebar from '../defaultLayout/sidebar';
import HeaderAdmin from '../components/headerAdmin';
function AdminLayout({ children, showSidebar = true, sidebar }) {
	const SideBarItem = sidebar;
	return (
		<div className="w-[100%] flex">
			{showSidebar && <Sidebar content={<SideBarItem />} className="fixed top-0 bottom-0 left-0" />}
			<div className="wrap-body h-[100vh] w-[100%]">
				<HeaderAdmin className="fixed top-0" />
				<div className="bg-[#f1f4f9] h-[100%] ml-[290px] mt-[80px]">{children}</div>
			</div>
		</div>
	);
}

export default AdminLayout;
