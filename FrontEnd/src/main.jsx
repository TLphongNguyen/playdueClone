import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import GlobalStyle from './components/globalstyle';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle>
				<App />
			</GlobalStyle>
		</Provider>
	</React.StrictMode>,
);
