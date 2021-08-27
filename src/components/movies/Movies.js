import {Container} from "../../styled-components/general/general-styles";
import {MoviesByCategory} from "./MoviesByCategory";
import {MoviesGenres} from "./MoviesGenres";
import {Link} from "react-router-dom";
// styles
import {Movie} from "../../styled-components/elements/movie/movieCategory";
import {TitlePrimary, TitleBar} from "../../styled-components/general/general-styles";
import {useEffect, useState} from "react";
import {getMoviesByCategory, getMoviesGenres} from "../../api/themoviedb/operations";
import {Loading} from "../loading/Loading";

// Main movies page with movies sorted by category and movie genres
const Movies = () => {

    // state with movies genres, base on this state list with movie genres will be rendered in MovieGenres component
    const [movieGenres, setMovieGenres] = useState(null)

    // state with popular movies, base on this list with movies will be rendered in MoviesByCategory component
    const [popularMovies, setPopularMovies] = useState(null)


    // when component mounted get all movies with specific genre, and popular movies
    useEffect(() => {
        getMoviesGenres(setMovieGenres)
        getMoviesByCategory(setPopularMovies, "/movie/popular")
    }, [])

    if(movieGenres === null || popularMovies === null){
        return <Loading/>
    }
    return <Container>
        <Movie>
            <TitleBar><TitlePrimary>Movies <span>Powered by TheMovieDb Api</span></TitlePrimary> <Link to="movie-search"><i className="fas fa-search"/> <span>Search</span></Link></TitleBar>
            <MoviesByCategory moviesData={popularMovies}/>
            <MoviesGenres movieGenresData={movieGenres}/>
        </Movie>
    </Container>


}

export default Movies