import { Link } from "react-router-dom";
import React, { useState } from "react";
import './MovieItem.css';
import { MovieImage } from "../MovieImage/MovieImage";

export const MovieItem = ({ movie }) => {
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
            <MovieImage path={movie.poster_path} />
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
