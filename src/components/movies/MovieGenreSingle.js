// component which is rendered by map in MoviesByGenre component, displays card with movie
import { Link } from "react-router-dom";
import { getReleaseDate } from "../../functions/getReleaseDate";
//styles
import { MovieGenreItem, MovieItemContent, MoviePosterSmall, MoviePosterSmallMissing, MovieRating } from "../../styled-components/elements/movie/movieGenre";
import {
    ItemTitleMedium,
    ItemPremiereMedium
} from "../../styled-components/general/general-styles";
import photoMissing from "../../images/missing.svg";
/**
 * movie poster as link to single movie, title, release date and rating
 * @param movie {object} - object with a film which contains his basic data - title, rating, premiere
 */
export const MovieGenreSingle = ({ movie }) => {
    console.log(movie)
    return <MovieGenreItem>
        <Link to={`/movie/${movie.id}`}>

            {/*not all movies have a poster*/}
            {
                movie.poster_path !== null ?
                    <MoviePosterSmall>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title !== undefined ? movie.title : movie.name} />
                    </MoviePosterSmall>
                    :
                    <MoviePosterSmallMissing><img src={photoMissing} title='Missing poster' alt='camera' /></MoviePosterSmallMissing>
            }
        </Link>

        <MovieItemContent>

            <div>
                {/*not all movies have title, certain have name key instead of title*/}
                <ItemTitleMedium>{movie.title !== undefined ? movie.title : movie.name}</ItemTitleMedium>

                <ItemPremiereMedium>{getReleaseDate(movie.release_date)}</ItemPremiereMedium>
            </div>
            {/*if a film has no rating, dont show it*/}
            {movie.vote_average !== 0 &&
                <MovieRating><i className="fas fa-grin-alt" /><span>{movie.vote_average.toFixed(1)}</span></MovieRating>}
        </MovieItemContent>
    </MovieGenreItem>
};