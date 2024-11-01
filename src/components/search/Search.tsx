import classes from './style.module.css';

interface Props {
	keywords: string;
	setKeywords: (keywords: string) => void;
}

function Search({ keywords, setKeywords }: Props) {
	return (
		<div className={classes.search}>
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
