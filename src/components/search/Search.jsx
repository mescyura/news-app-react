import classes from './style.module.css';

function Search({ keywords, setKeywords }) {
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
