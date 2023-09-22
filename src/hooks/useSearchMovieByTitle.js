import { useEffect, useState } from "react";
import { MoviesService } from "../service/MovieService";

export function useSearchMovieByTitle(movieTitle) {
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (!movieTitle) {
			setSearchResults([]);
			return;
		}

		MoviesService.searchByMovieTitle(movieTitle).then(({ data }) => {
			setSearchResults(data.results);
		});
	}, [movieTitle]);

	return searchResults;
}
