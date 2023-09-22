import { MovieItem } from "../MovieItem/MovieItem";
import styles from "./MoviesList.module.css";

export function MoviesList({ movies }) {
	return (
		<div className={styles.container}>
			<div className={styles.movieList}>
				{movies.map((movie) => (
					<MovieItem key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	)
}
