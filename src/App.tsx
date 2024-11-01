import './App.css';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import { useTheme } from './context/ThemeContext';

function App() {
	const { isDark } = useTheme();

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header />
			<div className='container'>
				<Main />
			</div>
		</div>
	);
}

export default App;
