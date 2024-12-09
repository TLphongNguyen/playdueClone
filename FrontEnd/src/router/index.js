import Home from '../page/Home';
import Profile from '../page/profile';
import Stories from '~/page/Stories';
import InfoPlayer from '~/page/InfoPlayer';
import Registers from '~/page/Register';
import ChangePass from '~/page/Setting/ChangePass';

//sidebar component
import Game from '~/components/sidebar/games';
import Player from '~/components/sidebar/players';
import Setting from '~/components/sidebar/setting';
import Admin from '~/components/sidebar/admin';
import PayLoad from '~/page/payload';
//admin component
import HomeAdmin from '~/page/HomeAdmin';
import Games from '~/page/HomeAdmin/game';
import ChatRoomAdmin from '~/page/HomeAdmin/chat';
const publicRouter = [
	{ path: '/', components: Home, showSidebar: true, sidebar: Game },
	{ path: '/register', components: Registers, showSidebar: false },
	{ path: '/login', components: Registers, showSidebar: false },
	{
		path: '/profile',
		components: Profile,
		showSidebar: false,

		layout: 'default',
	},
];
const privateRouter = [
	{
		path: '/profile',
		components: Profile,
		showSidebar: false,
		allowedTypes: [1, 2, 3],
		layout: 'default',
	},
	{
		path: '/story',
		components: Stories,
		showSidebar: true,
		sidebar: Player,
		allowedTypes: [1, 2, 3],
		layout: 'default',
	},
	{
		path: '/setting/inforplayer',
		components: InfoPlayer,
		showSidebar: true,
		sidebar: Setting,
		allowedTypes: [1, 2, 3],
		layout: 'default',
	},
	{
		path: '/setting/changepass',
		components: ChangePass,
		showSidebar: true,
		sidebar: Setting,
		allowedTypes: [2, 3],
		layout: 'default',
	},
	{
		path: '/setting/payload',
		components: PayLoad,
		showSidebar: true,
		sidebar: Setting,
		allowedTypes: [2, 3],
		layout: 'default',
	},

	//admin routes
	{
		path: '/admin/home',
		components: HomeAdmin,
		showSidebar: true,
		sidebar: Admin,
		allowedTypes: [1],
		layout: 'admin',
	},
	{
		path: '/admin/games',
		components: Games,
		showSidebar: true,
		sidebar: Admin,
		allowedTypes: [1],
		layout: 'admin',
	},
	{
		path: '/admin/chatbox',
		components: ChatRoomAdmin,
		showSidebar: true,
		sidebar: Admin,
		allowedTypes: [1],
		layout: 'admin',
	},
];

export { publicRouter, privateRouter };
