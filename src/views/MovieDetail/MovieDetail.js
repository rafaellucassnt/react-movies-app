import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";
import { Link } from "react-router-dom";

export function MovieDetail() {
    const { movieId } = useParams();
    const movie = useGetMovieDetail(movieId);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section className="movie-detail">
            <div className="container card-movie-detail">
                <div className="row">
                    <div className="movie-poster-details">
                        <img
                            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                            alt=""
                        />
                    </div>
                    <div className="description">
                        <h1>{movie.title}</h1>
                        <ul className="movie-details">
                            <li>
                                <strong>Budget:</strong> {formatCurrency(movie.budget)}
                            </li>
                            <li>
                                <strong>Original language:</strong>{' '}
                                {movie.original_language}
                            </li>
                            <li>
                                <strong>Popularity:</strong> {movie.popularity}
                            </li>
                        </ul>
                        <h2>Overview</h2>
                        <p className="movie-overview">{movie.overview}</p>
                        <Link className="btn-primary back-to-home-button" to="/">Voltar para Home</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
