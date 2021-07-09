import {getSingleMovie, getMovieCredits, getSimilarMovies} from "../../api/themoviedb/operations";
import {useEffect, useState} from "react";
import {getReleaseDate} from "../../functions/getReleaseDate";
import {Link} from "react-router-dom";
import {MovieGenreSingle as SimilarMovie} from "./MovieGenreSingle";
// styles
import {Container, FullWidePoster, ItemTitleSmall} from "../../styled-components/general/general-styles";
import {
    MovieDirector,
    MovieTitle,
    MovieDetail,
    MovieGenreList,
    MovieRating,
    MovieDescription, MovieActors, MovieActor, MovieKnowFor, MovieItemTitle
} from "../../styled-components/elements/movie/movie";


export const Movie = (props) => {

    // state with movie
    const [movie, setMovie] = useState([])

    // state with similar movies
    const [similarMovies, setSimilarMovies] = useState([])

    //when component mounted get a film with this id (from ulr path)
    useEffect(() => {
        getSingleMovie(setMovie, props.match.params.id)
        getMovieCredits(setMovie, props.match.params.id)
        getSimilarMovies(setSimilarMovies, props.match.params.id)
    }, [props.match.params.id])
    if (movie === undefined || movie.credits === undefined || similarMovies === undefined) {
        return null
    }
    return <Container>
        {/*poster*/}
        <FullWidePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>

        {/*director*/}
        <MovieDirector>{movie.credits.director.name}</MovieDirector>

        {/*title*/}
        <MovieTitle>{movie.title}</MovieTitle>

        {/*release date*/}
        <MovieDetail>{getReleaseDate(movie.release_date)}</MovieDetail>

        {/*genres */}
        <MovieGenreList>
            {movie.genres.map((el, num) => (
                <li key={`movie${num}_${props.match.params.id}_genre_${el.name}`}><Link
                    to={`/movies-by-genre/${el.id}/${el.name}`}>{el.name}</Link></li>
            ))}
        </MovieGenreList>

        {/*average vote*/}
        <MovieRating rating={movie.vote_average}><i className="far fa-grin"/>
            <div/>
        </MovieRating>

        {/*description*/}
        <MovieDescription>{movie.overview}</MovieDescription>

        {/* rendering cast*/}
        <MovieItemTitle>Cast</MovieItemTitle>
        <MovieActors>
            {movie.credits.cast.map((el, num) => (
                // render only when person have profile
                el.profile_path !== null &&
                <MovieActor key={`${props.match.params.id}_cast_${num}`}>
                    <img src={`https://image.tmdb.org/t/p/original${el.profile_path}`} alt={el.name}/>
                    <ItemTitleSmall>{el.name}</ItemTitleSmall>
                    <MovieKnowFor>{el.character}</MovieKnowFor>
                </MovieActor>
            ))}
        </MovieActors>

        {/*similar movies*/}
        <MovieItemTitle>Similar movies</MovieItemTitle>
        {similarMovies.map((el,num) => <SimilarMovie movie={el} key={`similarMovie_${props.match.params.id}-${num}`}/>)}
    </Container>


}