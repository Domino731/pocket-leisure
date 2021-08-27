import {getSingleMovie, getSimilarMovies, getMovieVideos, getMovieCredits} from "../../api/themoviedb/operations";
import {useEffect, useState} from "react";
import {getReleaseDate} from "../../functions/getReleaseDate";
import {Link} from "react-router-dom";
// styles
import {
    Container,
    FullWidePoster,
    ItemTitleSmall,
    FactsTable
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

    MovieTagline,
    MovieVideos,
    MovieVideosSwitch,
    MovieActorPhotoMissing,
    MoviesList,
    MoviePosterContainer,
    MovieRow,
    MovieIntroductionContainer,
    MovieFactsContainer,
    MovieMediaContainer,
    MoviePosterContainerDesktop,
    MovieFactsContainerDesktop, MovieSimilarSingle, MovieSimilarMissing, MovieSimilarPoster
} from "../../styled-components/elements/movie/movie";
import {Loading} from "../loading/Loading";
import {NotFound404} from "../notFound/NotFound404";

/**
 * component which renders single movie and details about him
 * @param props.props.match.params.id {string} - id of film that you want to get (comes from url)
 * @returns {JSX.Element} - details about movie - trailers, poster, title, similar movies, facts....
 */
export const Movie = (props) => {

    // state with movie data
    const [movie, setMovie] = useState(null);

    // state with movie credits - cast, director
    const [credits, setCredits] = useState(null)

    // state with similar movies
    const [similarMovies, setSimilarMovies] = useState(null);

    // state with movie videos
    const [videos, setVideos] = useState(null);

    // state with number, when user change this number then the next trailer or the previous one will be shown
    const [videoNumber, setVideoNumber] = useState(0);

    //A state containing the width of the page based on which the elements will be rendered.
    // For widths below 1024px there is a different layout at the top and for widths above 1024px
    const [windowWidth, setWindowWidth] = useState(0);

    //when component mounted get a movie with this id (from ulr path)
    useEffect(() => {
        getSingleMovie(setMovie, props.match.params.id);
        getSimilarMovies(setSimilarMovies, props.match.params.id);
        getMovieVideos(setVideos, props.match.params.id);
        getMovieCredits(setCredits, props.match.params.id);
    }, [props.match.params]);


    // set the windowWidth state
    const resizeWindow = () => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    //
    const handleSwitchNextVideo = () => {
        if (videoNumber < videos.length) {
            setVideoNumber(prev => prev + 1)
        }
    }

    const handleSwitchPrevVideo = () => {
        setVideoNumber(prev => prev - 1)
    }


    if (movie === undefined) {
        return <NotFound404 redirectUrl="/movies"/>
    }
    if (movie === null || credits === null || similarMovies === null || videos === null) {
        return <Loading/>
    }

        return <Container>

            <MovieRow>
                {/*poster, some movie dont have a poster, then dont render anything*/}
                {windowWidth < 1024 && <MoviePosterContainer>
                    {movie.poster_path !== null &&
                    <FullWidePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>}
                </MoviePosterContainer>}


                {windowWidth >= 1024 && <MoviePosterContainerDesktop>
                    {movie.poster_path !== null &&
                    <FullWidePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>}
                    <MovieFactsContainerDesktop>
                        {/*movie details*/}
                        <FactsTable>
                            <tbody>
                            {credits.director !== undefined && <tr>
                                <td><i className="fas fa-circle"/>Director</td>
                                <td>{credits.director.name}</td>
                            </tr>}
                            {movie.status !== null && <tr>
                                <td><i className="fas fa-circle"/>Status</td>
                                <td>{movie.status}</td>
                            </tr>}


                            {movie.production_countries.length !== 0 && <tr>
                                <td><i className="fas fa-circle"/>Country</td>
                                <td>{movie.production_countries.map((el, num) => <span
                                    key={`productionCountries_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                            </tr>}


                            {movie.runtime !== null && <tr>
                                <td><i className="fas fa-circle"/>Time</td>
                                <td>{movie.runtime} min</td>
                            </tr>}


                            {/*screening only when there is information about it, some films have no budget(0)*/}
                            {movie.budget !== 0 &&
                            <tr>
                                <td><i className="fas fa-circle"/>Budget</td>
                                <td><i className="fas fa-dollar-sign"/> {movie.budget.toLocaleString()}</td>
                            </tr>
                            }

                            {movie.production_companies.length !== 0 && <tr>
                                <td><i className="fas fa-circle"/>Production</td>
                                <td>{movie.production_companies.map((el, num) => <span
                                    key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                            </tr>}

                            {
                                movie.vote_average !== null && <tr>
                                    <td><i className="fas fa-circle"/>Rating</td>
                                    <td>{movie.vote_average.toFixed(1)} / 10</td>
                                </tr>
                            }

                            </tbody>
                        </FactsTable>
                    </MovieFactsContainerDesktop>
                </MoviePosterContainerDesktop>}

                <MovieIntroductionContainer>
                    {/*director*/}
                    {credits.director !== undefined &&
                    <MovieDirector>{credits.director.name}</MovieDirector>}

                    {/*title*/}
                    <MovieTitle>{movie.title}</MovieTitle>

                    {/*release date*/}
                    {movie.release_date !== undefined &&
                    <MovieDetail>{getReleaseDate(movie.release_date)}</MovieDetail>}


                    {/*genres */}
                    <MovieGenreList>
                        {movie.genres !== null && typeof movie.genres === "object" && movie.genres.map((el, num) => (
                            <li key={`movie${num}_${props.match.params.id}_genre_${el.name}`}><Link
                                to={`/movies-by-genre/${el.id}/${el.name}`}>{el.name}</Link></li>
                        ))}
                    </MovieGenreList>

                    {/*average vote*/}
                    {movie.vote_average !== null &&
                    <MovieRating rating={movie.vote_average}><i className="far fa-grin"/>
                        <div/>
                    </MovieRating>}

                    {/*description*/}
                    {movie.tagline !== null && <MovieTagline>{movie.tagline}</MovieTagline>}

                    {movie.overview !== null && <MovieDescription>{movie.overview}</MovieDescription>}

                    <MovieMediaContainer>
                        {/*movie videos -> trailers*/}
                        {videos.length > 0 && <>
                            <MovieVideos>
                                <iframe title={`${movie.title} trailer`}
                                        src={`https://www.youtube.com/embed/${videos[videoNumber].key}`}
                                        frameBorder="0" allowFullScreen/>
                            </MovieVideos>
                            {/*switch video*/}
                            <MovieVideosSwitch>
                                {videoNumber !== 0 && <button onClick={handleSwitchPrevVideo}>Previous</button>}
                                {videoNumber < videos.length - 1 &&
                                <button onClick={handleSwitchNextVideo}>Next</button>}
                            </MovieVideosSwitch>
                        </>}
                    </MovieMediaContainer>
                </MovieIntroductionContainer>

            </MovieRow>

            {windowWidth < 1024 && <MovieFactsContainer>
                {/*movie details*/}
                <FactsTable>
                    <tbody>
                    {credits.director !== undefined && <tr>
                        <td><i className="fas fa-circle"/>Director</td>
                        <td>{credits.director.name}</td>
                    </tr>}
                    {movie.status !== null && <tr>
                        <td><i className="fas fa-circle"/>Status</td>
                        <td>{movie.status}</td>
                    </tr>}


                    {movie.production_countries.length !== 0 && <tr>
                        <td><i className="fas fa-circle"/>Country</td>
                        <td>{movie.production_countries.map((el, num) => <span
                            key={`productionCountries_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                    </tr>}


                    {movie.runtime !== null && <tr>
                        <td><i className="fas fa-circle"/>Time</td>
                        <td>{movie.runtime} min</td>
                    </tr>}


                    {/*screening only when there is information about it, some films have no budget(0)*/}
                    {movie.budget !== 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Budget</td>
                        <td><i className="fas fa-dollar-sign"/> {movie.budget.toLocaleString()}</td>
                    </tr>
                    }

                    {movie.production_companies.length !== 0 && <tr>
                        <td><i className="fas fa-circle"/>Production</td>
                        <td>{movie.production_companies.map((el, num) => <span
                            key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                    </tr>}

                    {
                        movie.vote_average !== null && <tr>
                            <td><i className="fas fa-circle"/>Rating</td>
                            <td>{movie.vote_average.toFixed(1)} / 10</td>
                        </tr>
                    }
                    </tbody>
                </FactsTable>
            </MovieFactsContainer>}

            {/* rendering cast*/}
            {credits.cast.length !== 0 && <>
                <MovieItemTitle>Cast</MovieItemTitle>
                <MovieActors>
                    {credits.cast.map((el, num) => (
                        // not all actors have profile photo
                        el.profile_path !== null ?
                            <MovieActor key={`cast_${props.match.params.id}_${num}`}>
                                <img src={`https://image.tmdb.org/t/p/original${el.profile_path}`} alt={el.name}/>
                                <ItemTitleSmall>{el.name}</ItemTitleSmall>
                                <MovieKnowFor>{el.character}</MovieKnowFor>
                            </MovieActor>
                            :
                            <MovieActor key={`cast_${props.match.params.id}_${num}`}>
                                <MovieActorPhotoMissing><i className="far fa-user"/></MovieActorPhotoMissing>
                                <ItemTitleSmall>{el.name}</ItemTitleSmall>
                                <MovieKnowFor>{el.character}</MovieKnowFor>
                            </MovieActor>
                    ))}
                </MovieActors>
            </>}


            {/*similar movies*/}
            {similarMovies.length !== 0 && <>

                <MovieItemTitle>Similar movies</MovieItemTitle>
                <MoviesList>

                    {/*{similarMovies.map((el, num) => <SimilarMovie movie={el}*/}
                    {/*                                              key={`similarMovie_${props.match.params.id}-${num}`}/>)}*/}
                    {similarMovies.map((el, num) =>
                        <Link to={`/movie/${el.id}`} key={`similarMovies_${el.title}-${num}`}>
                            <MovieSimilarSingle>
                                {

                                    // not all movies have a poster
                                    el.poster_path !== null ?
                                        <MovieSimilarPoster>
                                            <img src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                                                 alt={el.title}/>
                                        </MovieSimilarPoster>
                                        :
                                        <MovieSimilarMissing><i className="fas fa-film"/><h3>{el.title}</h3>
                                        </MovieSimilarMissing>

                                }
                            </MovieSimilarSingle>
                        </Link>)
                    }
                </MoviesList>
            </>}

        </Container>
};