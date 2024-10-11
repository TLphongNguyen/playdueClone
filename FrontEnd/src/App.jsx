import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouter, privateRouter } from './router';
import DefaultLayout from './Layout/defaultLayout';
import AdminLayout from './Layout/adminLayout';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					{publicRouter.map((router, index) => {
						const Page = router.components;
						let Layout = DefaultLayout;
						if (router.layout === null) {
							Layout = Fragment;
						}
						return (
							<Route
								key={index}
								path={router.path}
								element={
									<Layout showSidebar={router.showSidebar} sidebar={router.sidebar}>
										<Page />
									</Layout>
								}
							/>
						);
					})}
					{privateRouter.map((router, index) => {
						const Page = router.components;
						const typeLayout = router.layout;

						let Layout = typeLayout === 'admin' ? AdminLayout : DefaultLayout;
						if (router.layout === null) {
							Layout = Fragment;
						}
						return (
							<Route
								key={index}
								path={router.path}
								element={
									<PrivateRoute allowedTypes={router.allowedTypes}>
										<Layout showSidebar={router.showSidebar} sidebar={router.sidebar}>
											<Page />
										</Layout>
									</PrivateRoute>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
