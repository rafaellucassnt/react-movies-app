import styles from "./MovieImage.module.css";

export function MovieImage({ path, size = 200 }) {
	return (
		<img className={styles.image} src={`https://image.tmdb.org/t/p/w${size}/${path}`} alt="" />
	)
}
