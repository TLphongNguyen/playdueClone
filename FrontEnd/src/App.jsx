import { useState } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouter } from './router';
import DefaultLayout from './Layout/defaultLayout';

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
									<Layout showSidebar={router.showSidebar}>
										<Page />
									</Layout>
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
