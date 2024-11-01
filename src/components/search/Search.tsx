import { useTheme } from '../../context/ThemeContext';
import classes from './style.module.css';

interface Props {
	keywords: string;
	setKeywords: (keywords: string) => void;
}

function Search({ keywords, setKeywords }: Props) {
	const { isDark } = useTheme();

	return (
		<div
			className={`${classes.search} ${isDark ? classes.dark : classes.light}`}
		>
			<input
				type='text'
				className={classes.input}
				value={keywords}
				onChange={e => setKeywords(e.currentTarget.value)}
				placeholder='Search news...'
			/>
		</div>
	);
}

export default Search;
