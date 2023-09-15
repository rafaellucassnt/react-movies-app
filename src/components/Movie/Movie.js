import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Movie.css';

export const Movie = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
        setIsModalOpen(false);
    };

    return (
        <div
            className="movie-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
            {isModalOpen && (
                <div className="modal">
                    <h3>{movie.title}</h3>
                    <Link
                        to={`/movie/${movie.id}`}
                        className="btn btn-primary"
                    >
                        Ver detalhes
                    </Link>
                    <h4 className="average">{movie.vote_average * 10}% Relevant</h4>
                </div>
            )}
        </div>
    );
};
