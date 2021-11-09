import { getSingleMovie, getSimilarMovies, getMovieVideos, getMovieCredits } from "../../api/themoviedb/operations";
import { useEffect, useState } from "react";
import {
    Container,
    FullWidePoster,
} from "../../styled-components/general/general-styles";
import {
    MoviePosterContainer,
    MovieRow,
} from "../../styled-components/elements/movie/movie";
import { Loading } from "../loading/Loading";
import { NotFound404 } from "../notFound/NotFound404";
import { MovieSimilarMovies } from "./MovieSimilarMovies";
import { MovieCast } from "./MovieCast";
import { MovieFacts } from "./MovieFacts";
import { MoviePosterDesktop } from "./MoviePosterDesktop";
import { MovieIntroduction } from "./MovieIntroduction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

/**
 * component which renders single movie and details about him
 */
export const Movie = () => {

    // refenences
    const { id } = useParams();
    /** id of movie from url */
    const movieId = id;

    // state with movie data
    const [movie, setMovie] = useState(null);

    // state with movie credits - cast, director
    const [credits, setCredits] = useState(null)

    // state with similar movies
    const [similarMovies, setSimilarMovies] = useState(null);

    // state with movie videos
    const [videos, setVideos] = useState(null);

    //A state containing the width of the page based on which the elements will be rendered.
    // For window width below 1024px there is a different layout at the top and for  width above 1024px
    const [windowWidth, setWindowWidth] = useState(0);

    // when component mounted fetch data about movie
    useEffect(() => {
        getSingleMovie(setMovie, movieId);
        getSimilarMovies(setSimilarMovies, movieId);
        getMovieVideos(setVideos, movieId);
        getMovieCredits(setCredits, movieId);
    }, [movieId]);

    // set the windowWidth state
    const resizeWindow = () => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    // if movie doesnt exists then show 404 error page
    if (movie === undefined) {
        return <NotFound404 redirectUrl="/movies" />
    }

    // wait for data
    if (movie === null || credits === null || similarMovies === null || videos === null) {
        return <Loading />
    }

    return <Container>
        
        <MovieRow>
            {/*poster, certain movies dont have a poster*/}
            {windowWidth < 1024 && <MoviePosterContainer>
                {movie.poster_path !== null &&
                    <FullWidePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />}
            </MoviePosterContainer>}

            {/* poster for bigger devies, with table about movie details */}
            {windowWidth >= 1024 && <MoviePosterDesktop movie={movie} credits={credits} />}

            {/* introduction for movie -> title, director, release date... */}
            <MovieIntroduction movie={movie} credits={credits} videos={videos} />
        </MovieRow>

        {/* only below 1024px - table with movie details */}
        {windowWidth < 1024 && <MovieFacts credits={credits} movie={movie} />}

        {/* rendering cast */}
        {credits.cast.length !== 0 && <MovieCast cast={credits.cast} />}

        {/*similar movies list*/}
        {similarMovies.length !== 0 && <MovieSimilarMovies movies={similarMovies} />}
        
    </Container>
};