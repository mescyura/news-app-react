import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { store } from './appStore';

import BaseLayout from './layouts/BaseLayout';

import '@/shared/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BaseLayout />
			</Provider>
		</ThemeProvider>
	</StrictMode>
);