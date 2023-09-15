import { useEffect, useState } from "react";
import { Movie } from "../../components/Movie/Movie";
import { MoviesService } from "../../service/MovieService";
import './Movies.css';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const {
            data: { results },
        } = await MoviesService.getMovies();
        setMovies(results);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className="container">
            <div className="movie-list">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};
