import { useState } from "react";
import { getReleaseDate } from "../../functions/getReleaseDate";
import { Link } from "react-router-dom";
import {
    MovieDirector,
    MovieTitle,
    MovieDetail,
    MovieGenreList,
    MovieRating,
    MovieDescription,
    MovieTagline,
    MovieVideos,
    MovieVideosSwitch,
    MovieIntroductionContainer,
    MovieMediaContainer,
} from "../../styled-components/elements/movie/movie";
import { RatingIconWrapper } from "../../styled-components/elements/movie/movie";
import userRating from "../../images/users_rating.svg";

/**
 * Component with introduction for movie -> director, relased data, title, trailer
 * @param credits - data about movie credits
 * @param movie - data about movie
 * @param videos - data about movie videos
 * @returns 
 */
export const MovieIntroduction = ({ credits, movie, videos }) => {

    // state with number, when user change this number then the next trailer or the previous one will be shown
    const [videoNumber, setVideoNumber] = useState(0);

    /** increase videoNumber state -> switch to next trailer */
    const handleIncreaseVideoNumber = () => {
        // 
        if (videoNumber < videos.length) {
            return setVideoNumber(prev => prev + 1);
        }
    }
    /** decrease videoNumber state -> switch to previous trailer */
    const handleDecreaseVideoNumber = () => {
        return setVideoNumber(prev => prev - 1);
    }

    return <MovieIntroductionContainer>

        {/*director*/}
        {credits.director !== undefined &&
            <MovieDirector HasAPoster={movie.poster_path}>{credits.director.name}</MovieDirector>}

        {/*title*/}
        <MovieTitle>{movie.title}</MovieTitle>

        {/*release date*/}
        {movie.release_date !== undefined &&
            <MovieDetail>{getReleaseDate(movie.release_date)}</MovieDetail>}


        {/*genres */}
        <MovieGenreList>
            {movie.genres !== null && typeof movie.genres === "object" && movie.genres.map((el, num) => (
                <li key={`movie${num}_${movie.id}_genre_${el.name}`}><Link
                    to={`/movies-by-genre/${el.id}/${el.name}`}>{el.name}</Link></li>
            ))}
        </MovieGenreList>

        {/*average vote*/}
        {movie.vote_average !== null &&
            <MovieRating rating={movie.vote_average}>
                <RatingIconWrapper>
                    <img src={userRating} title='Average users rating' alt="Users rating" />
                </RatingIconWrapper>
                <span />
            </MovieRating>}

        {/*description*/}
        {movie.tagline !== null && <MovieTagline>{movie.tagline}</MovieTagline>}
        {movie.overview !== null && <MovieDescription>{movie.overview}</MovieDescription>}

        <MovieMediaContainer>
            {/* movie videos -> trailers */}
            {videos.length > 0 && <>
                <MovieVideos>
                    <iframe title={`${movie.title} trailer`}
                        src={`https://www.youtube.com/embed/${videos[videoNumber].key}`}
                        frameBorder="0" allowFullScreen />
                </MovieVideos>

                {/*switch video*/}
                <MovieVideosSwitch>
                    {videoNumber !== 0 && <button onClick={handleDecreaseVideoNumber}>Previous</button>}
                    {videoNumber < videos.length - 1 &&
                        <button onClick={handleIncreaseVideoNumber}>Next</button>}
                </MovieVideosSwitch>
            </>}
        </MovieMediaContainer>

    </MovieIntroductionContainer>
}