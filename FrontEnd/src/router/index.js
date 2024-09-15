import Home from '../page/Home';
import Profile from '../page/profile';
import Maze from '~/page/Maze';
import Stories from '~/page/Stories';
import InfoPlayer from '~/page/InfoPlayer';
import Registers from '~/page/Register';

//sidebar component
import Game from '~/components/sidebar/games';
import Player from '~/components/sidebar/players';
import Setting from '~/components/sidebar/setting';

const publicRouter = [
	{ path: '/', components: Home, showSidebar: true, sidebar: Game },
	{ path: '/maze', components: Maze, showSidebar: true, sidebar: Game },
	{ path: '/profile', components: Profile, showSidebar: false },
	{ path: '/story', components: Stories, showSidebar: true, sidebar: Player },
	{ path: '/setting/inforplayer', components: InfoPlayer, showSidebar: true, sidebar: Setting },
	{ path: '/register', components: Registers, showSidebar: false },
];

export { publicRouter };
