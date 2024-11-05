import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import App from './App.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</StrictMode>
);
