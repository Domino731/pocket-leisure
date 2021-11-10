import { Container } from "../../styled-components/general/general-styles";
import { MoviesByCategory } from "./MoviesByCategory";
import { MoviesGenres } from "./MoviesGenres";
import { Link } from "react-router-dom";
import { Movie } from "../../styled-components/elements/movie/movieCategory";
import { TitlePrimary, TitleBar } from "../../styled-components/general/general-styles";
import { useEffect, useState } from "react";
import { getMoviesByCategory, getMoviesGenres } from "../../api/themoviedb/operations";
import { Loading } from "../loading/Loading";

// Main movies page with movies sorted by category and movie genres
const Movies = () => {

    // state with movies genres, base on this state list with movie genres will be rendered in MovieGenres component
    const [movieGenres, setMovieGenres] = useState(null);

    // state with data about movies, at the start these movies will be downloaded from the popular categorie,
    // user can change category in MoviesByCategory component
    const [movies, setMovies] = useState(null);

    // when component mounted get all movies with specific genre, and popular movies
    useEffect(() => {
        getMoviesGenres(setMovieGenres);
        return getMoviesByCategory(setMovies, "/movie/popular");
    }, []);

    // wait for data
    if (movieGenres === null || movies === null) {
        return <Loading />
    }
    return <Container>
        <Movie>
            <TitleBar>
                {/* title */}
                <TitlePrimary>Movies <span>Powered by TheMovieDb Api</span></TitlePrimary>

                {/* link to page when user can search specific movie */}
                <Link to="movie-search"><i className="fas fa-search" /> <span>Search</span></Link>
            </TitleBar>
            {/* movies fetched by catagory */}
            <MoviesByCategory moviesData={movies} />

            {/* available movie genres */}
            <MoviesGenres movieGenresData={movieGenres} />
        </Movie>
    </Container>
};

export default Movies;