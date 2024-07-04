import Home from '../page/Home';
import Profile from '../page/profile';

const publicRouter = [
	{ path: '/', components: Home },
	{ path: '/profile', components: Profile },
];

export { publicRouter };
