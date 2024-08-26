import Home from '../page/Home';
import Profile from '../page/profile';
import Maze from '~/page/Maze';
import Stories from '~/page/Stories';

//sidebar component
import Game from '~/components/sidebar/games';
import Player from '~/components/sidebar/players';

const publicRouter = [
	{ path: '/', components: Home, showSidebar: true, sidebar: Game },
	{ path: '/maze', components: Maze, showSidebar: true },
	{ path: '/profile', components: Profile, showSidebar: false },
	{ path: '/story', components: Stories, showSidebar: true, sidebar: Player },
];

export { publicRouter };
