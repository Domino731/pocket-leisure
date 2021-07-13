import {getSingleMovie, getMovieCredits, getSimilarMovies, getMovieVideos} from "../../api/themoviedb/operations";
import {useEffect, useState} from "react";
import {getReleaseDate} from "../../functions/getReleaseDate";
import {Link} from "react-router-dom";
import {MovieGenreSingle as SimilarMovie} from "./MovieGenreSingle";
// styles
import {
    Container,
    FullWidePoster,
    ItemTitleSmall,
    PosterMedMissing, StatTable
} from "../../styled-components/general/general-styles";
import {
    MovieDirector,
    MovieTitle,
    MovieDetail,
    MovieGenreList,
    MovieRating,
    MovieDescription,
    MovieActors,
    MovieActor,
    MovieKnowFor,
    MovieItemTitle,
    MovieInfo,
    MovieTable,
    MovieTagline,
    MovieVideos, MovieVideosSwitch
} from "../../styled-components/elements/movie/movie";


export const Movie = (props) => {

    // state with movie
    const [movie, setMovie] = useState([])

    // state with similar movies
    const [similarMovies, setSimilarMovies] = useState([])

    // state with movie videos
    const [videos, setVideos] = useState([])

    const [videoNumber, setVideoNumber] = useState(0)
    //when component mounted get a movie with this id (from ulr path)
    useEffect(() => {
        getSingleMovie(setMovie, props.match.params.id)
        getMovieCredits(setMovie, props.match.params.id)
        getSimilarMovies(setSimilarMovies, props.match.params.id)
        getMovieVideos(setVideos, props.match.params.id)
    }, [props.match.params.id])


    const handleSwitchNextVideo = () => {
        if(videoNumber < videos.length){
            setVideoNumber(prev => prev + 1)
            console.log(videoNumber)
        }
    }

    const handleSwitchPrevVideo = () => {
            setVideoNumber(prev => prev - 1)
    }
    if (movie === undefined || movie.credits === undefined || similarMovies === undefined || videos === undefined) {
        return null
    }


    return <Container>
        {/*poster, some movie dont have a poster, then dont render anything*/}
        {movie.poster_path !== null ? <FullWidePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/> : null}

        {/*director*/}
        <MovieDirector>{movie.credits.director.name}</MovieDirector>

        {/*title*/}
        <MovieTitle>{movie.title}</MovieTitle>

        {/*release date*/}
        <MovieDetail>{getReleaseDate(movie.release_date)}</MovieDetail>

        {/*genres */}
        <MovieGenreList>

            {movie.genres !== null && movie.genres.map((el, num) => (
                <li key={`movie${num}_${props.match.params.id}_genre_${el.name}`}><Link
                    to={`/movies-by-genre/${el.id}/${el.name}`}>{el.name}</Link></li>
            ))}
        </MovieGenreList>

        {/*average vote*/}
        <MovieRating rating={movie.vote_average}><i className="far fa-grin"/>
            <div/>
        </MovieRating>

        <MovieTagline>{movie.tagline}</MovieTagline>
        <MovieInfo>
            {/*description*/}
            <MovieDescription>{movie.overview}</MovieDescription>

            {/*movie details*/}
            <StatTable>
                <tbody>
                <tr>
                    <td><i className="fas fa-circle"/>Director</td>
                    <td>{movie.credits.director.name}</td>
                </tr>
                <tr>
                    <td><i className="fas fa-circle"/>Status</td>
                    <td>{movie.status}</td>
                </tr>
                <tr>
                    <td><i className="fas fa-circle"/>Country</td>
                    <td>{movie.production_countries.map((el,num) => <span key={`productionCountries_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                </tr>
                <tr>
                    <td><i className="fas fa-circle"/>Time</td>
                    <td>{movie.runtime} min</td>
                </tr>

                {/*screening only when there is information about it, some films have no budget(0)*/}
                { movie.budget !== 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Budget</td>
                        <td><i className="fas fa-dollar-sign"/> {movie.budget.toLocaleString()}</td>
                    </tr>
                }
                <tr>
                    <td><i className="fas fa-circle"/>Production</td>
                    <td>{movie.production_companies.map((el,num) => <span key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                </tr>
                </tbody>
            </StatTable>
        </MovieInfo>

        {/*movie videos -> trailers*/}
        {videos.length > 0 && <>
            <MovieVideos>
               <iframe src={`https://www.youtube.com/embed/${videos[videoNumber].key}`} frameBorder="0"/>
            </MovieVideos>
            {/*switch video*/}
            <MovieVideosSwitch>
                {videoNumber !== 0 && <button onClick={handleSwitchPrevVideo}>Previous</button>}
                {videoNumber < videos.length - 1 && <button onClick={handleSwitchNextVideo}>Next</button>}
            </MovieVideosSwitch>
        </>}


        {/* rendering cast*/}
        <MovieItemTitle>Cast</MovieItemTitle>
        <MovieActors>
            {movie.credits.cast.map((el, num) => (
                // not all actors have profile photo
                el.profile_path !== null ?
                <MovieActor key={`cast_${props.match.params.id}_${num}`}>
                    <img src={`https://image.tmdb.org/t/p/original${el.profile_path}`} alt={el.name}/>
                    <ItemTitleSmall>{el.name}</ItemTitleSmall>
                    <MovieKnowFor>{el.character}</MovieKnowFor>
                </MovieActor>
                    :
                    <MovieActor key={`cast_${props.match.params.id}_${num}`}>
                        <PosterMedMissing><i className="fas fa-image"/></PosterMedMissing>
                        <ItemTitleSmall>{el.name}</ItemTitleSmall>
                        <MovieKnowFor>{el.character}</MovieKnowFor>
                    </MovieActor>
            ))}
        </MovieActors>

        {/*similar movies*/}
        <MovieItemTitle>Similar movies</MovieItemTitle>
        {similarMovies.map((el, num) => <SimilarMovie movie={el}
                                                      key={`similarMovie_${props.match.params.id}-${num}`}/>)}
    </Container>


}