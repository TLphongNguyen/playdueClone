import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouter, privateRouter } from './router';
import DefaultLayout from './Layout/defaultLayout';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					{/* Public routes */}
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

					{/* Private routes */}
					{privateRouter.map((router, index) => {
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
									<PrivateRoute>
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
