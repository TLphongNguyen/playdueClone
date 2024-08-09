import Home from '../page/Home';
import Profile from '../page/profile';

const publicRouter = [
	{ path: '/', components: Home, showSidebar: true },
	{ path: '/profile', components: Profile, showSidebar: false },
];

export { publicRouter };
