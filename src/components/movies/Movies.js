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

const Movies = () => {

    // state with movies genres
    const [movieGenres, setMovieGenres] = useState(undefined)

    const [popularMovies, setPopularMovies] = useState(undefined)


    // when component mounted get all movies with specific genre, and popular movies
    useEffect(() => {
        getMoviesGenres(setMovieGenres)
        getMoviesByCategory(setPopularMovies, "/movie/popular")
    }, [])

    if(movieGenres === undefined || popularMovies === undefined){
        return <Loading/>
    }
    return <Container>
        <Movie>
            <TitleBar><TitlePrimary>Movies</TitlePrimary> <Link to="movie-search"><i className="fas fa-search"/> <span>Search</span></Link></TitleBar>
            <MoviesByCategory moviesData={popularMovies}/>
            <MoviesGenres movieGenresData={movieGenres}/>
        </Movie>
    </Container>


}

export default Movies