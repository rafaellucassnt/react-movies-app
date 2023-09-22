import { useState } from "react";
import { useGetMovies } from "../../hooks/useGetMovies";
import { useSearchMovieByTitle } from "../../hooks/useSearchMovieByTitle";
import { SearchMovies } from "../../components/SearchMovies/SearchMovies";
import { MoviesList } from "../../components/MoviesList/MoviesList";


export function Movies() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = useGetMovies();
    const searchResults = useSearchMovieByTitle(searchQuery);

    function handleOnSearch(movieTitle) {
        setSearchQuery(movieTitle);
    }

    return (
        <>
            <SearchMovies onSearch={handleOnSearch} />
            <MoviesList movies={searchResults.length > 0 ? searchResults : movies} />
        </>
    );
}
