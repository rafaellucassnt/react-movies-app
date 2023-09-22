import { useEffect, useState } from "react";
import { MoviesService } from "../service/MovieService";

export function useGetMovies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		MoviesService
			.getMovies()
			.then(({ data }) => setMovies(data.results))
	}, []);

	return movies;
}
