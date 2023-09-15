import { useState, useEffect } from "react";
import { MoviesService } from '../service/MovieService';

export function useGetMovieDetail(movieId) {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchMovieDetail() {
            try {
                const { data } = await MoviesService.getMovieDetail(movieId);
                setMovie(data);
            } catch (error) {
                console.error("Erro ao buscar detalhes do filme:", error);
            }
        }

        fetchMovieDetail();
    }, [movieId]);

    return movie;
}
