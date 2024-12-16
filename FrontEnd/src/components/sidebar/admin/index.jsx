import React from 'react';
import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	ListItemSuffix,
	Chip,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react';
import {
	PresentationChartBarIcon,
	ShoppingBagIcon,
	UserCircleIcon,
	Cog6ToothIcon,
	InboxIcon,
	PowerIcon,
} from '@heroicons/react/24/solid';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '~/redux/slice/userSlice';

function Admin() {
	const [open, setOpen] = React.useState(0);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};
	const handleLogout = () => {
		dispatch(logout());
		localStorage.removeItem('token');
		navigate('/register');
	};

	return (
		<Card className=" h-[110vh] w-[290px] p-4 border-t-[1px] border-solid border-[#ccc] block bg-[#1c2333] fixed">
			<div className="mb-2 p-4 text-[#dee4ee]">
				<Typography variant="h5" color="blue-gray">
					Trang quản trị
				</Typography>
			</div>
			<List className="block">
				<Accordion
					open={open === 1}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? 'rotate-180' : ''}`}
						/>
					}
				>
					<ListItem className="p-3" selected={open === 1}>
						<ListItemPrefix className="mr-[10px]">
							<PresentationChartBarIcon className="h-5 w-5 text-[#dee4ee]" />
						</ListItemPrefix>
						<Link to="/admin/home" color="blue-gray" className="mr-auto font-normal text-[#dee4ee]">
							Dashboard
						</Link>
					</ListItem>
				</Accordion>
				<Accordion
					open={open === 2}
					icon={
						<ChevronDownIcon
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? 'rotate-180' : ''}`}
						/>
					}
				>
					<ListItem className="p-0" selected={open === 2}>
						<AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 text-[#dee4ee]">
							<ListItemPrefix className="mr-[10px]">
								<ShoppingBagIcon className="h-5 w-5" />
							</ListItemPrefix>
							<Typography color="blue-gray" className="mr-auto font-normal">
								Quản lí tác vụ
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody className="py-1">
						<List className="p-0 block text-[#dee4ee] pl-[20px]">
							<ListItem>
								<Link Link to="/admin/games" className="flex items-center">
									Quản lý Games
								</Link>
							</ListItem>
							<ListItem>
								<Link Link to="/admin/user" className="flex items-center">
									Quản lý người dùng
								</Link>
							</ListItem>
							<ListItem>
								<Link Link to="/admin/bill" className="flex items-center">
									Quản lý đơn thuê
								</Link>
							</ListItem>
							<ListItem>
								<Link to="/admin/withdraw " className="flex items-center">
									Quản lý rút tiền
								</Link>
							</ListItem>
							<ListItem>
								<Link to="/admin/importbills" className="flex items-center">
									importbills
								</Link>
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
				<hr className="my-2 border-blue-gray-50" />
				<Link to="/admin/chatbox">
					<ListItem className="text-[#dee4ee]">
						<ListItemPrefix className="mr-[10px]">
							<InboxIcon className="h-5 w-5" />
						</ListItemPrefix>
						Inbox
						<ListItemSuffix>
							<Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
						</ListItemSuffix>
					</ListItem>
				</Link>
				<ListItem className="text-[#dee4ee]">
					<ListItemPrefix className="mr-[10px]">
						<UserCircleIcon className="h-5 w-5" />
					</ListItemPrefix>
					Profile
				</ListItem>
				<ListItem className="text-[#dee4ee]">
					<ListItemPrefix className="mr-[10px]">
						<Cog6ToothIcon className="h-5 w-5" />
					</ListItemPrefix>
					Settings
				</ListItem>
				<ListItem onClick={handleLogout} className="text-[#dee4ee]">
					<ListItemPrefix className="mr-[10px]">
						<PowerIcon className="h-5 w-5" />
					</ListItemPrefix>
					Log Out
				</ListItem>
			</List>
		</Card>
	);
}

export default Admin;
