import { useState } from "react";
import styles from "./SearchMovies.module.css";

export function SearchMovies({ onSearch }) {
	const [searchQuery, setSearchQuery] = useState('');

	function handleOnSubmit(event) {
		event.preventDefault();
		onSearch(searchQuery);
	}

	function resetSearch() {
		setSearchQuery("");
		onSearch("");
	}

	return (
		<div className={styles.searchContainer}>
			<form onSubmit={handleOnSubmit}>
				<input type="text" placeholder="Buscar por título" onChange={(event) => setSearchQuery(event.target.value)} />
				<button className="btn btn-primary" type="submit">Buscar</button>
				<button className="btn btn-secondary" state="reset" onClick={resetSearch}>Resetar</button>
			</form>
		</div>
	)
}
