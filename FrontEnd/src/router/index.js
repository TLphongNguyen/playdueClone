import Home from '../page/Home';
import Profile from '../page/profile';
import Maze from '~/page/Maze';

const publicRouter = [
	{ path: '/', components: Home, showSidebar: true },
	{ path: '/maze', components: Maze, showSidebar: true },
	{ path: '/profile', components: Profile, showSidebar: false },
];

export { publicRouter };
