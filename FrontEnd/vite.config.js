import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~': resolve(__dirname, 'src'),
		},
	},
	server: {
		proxy: {
			'/api/firebase': {
				target: 'https://firebasestorage.googleapis.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/firebase/, ''),
			},
			'/api/mockapi': {
				target: 'https://660d2bd96ddfa2943b33731c.mockapi.io',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api\/mockapi/, ''),
			},
		},
	},
});
