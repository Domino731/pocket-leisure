// component which is rendered by map in MoviesByGenre component, displays card with movie
import { Link } from "react-router-dom";
import { getReleaseDate } from "../../functions/getReleaseDate";
import { MovieGenreItem, MovieItemContent, MoviePosterSmall, MoviePosterSmallMissing, MovieRating } from "../../styled-components/elements/movie/movieGenre";
import {
    ItemTitleMedium,
    ItemPremiereMedium
} from "../../styled-components/general/general-styles";
import photoMissing from "../../images/missing.svg";

/**
 * component with movie poster as link to single movie, title, release date and rating
 * @param movie {object} - object with a film which contains his basic data - title, rating, premiere
 */
export const MovieGenreSingle = ({ movie }) => {
    return <MovieGenreItem>

        {/* link to page with more details about this movie */}
        <Link to={`/movie/${movie.id}`}>

            {/*check if movie has a poster*/}
            {
                movie.poster_path !== null ?
                    <MoviePosterSmall>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title !== undefined ? movie.title : movie.name} />
                    </MoviePosterSmall>
                    :
                    <MoviePosterSmallMissing><img src={photoMissing} title='Missing movie poster' alt='camera' /></MoviePosterSmallMissing>
            }
        </Link>

        <MovieItemContent>
            <div>
                {/*not all movies have title, certain have name key instead of title*/}
                <ItemTitleMedium>{movie.title !== undefined ? movie.title : movie.name}</ItemTitleMedium>

                {/* ReleaseDate */}
                {movie.release_date && <ItemPremiereMedium>{getReleaseDate(movie.release_date)}</ItemPremiereMedium>}
            </div>

            {/*check if movie has rating*/}
            {movie.vote_average !== 0 &&
                <MovieRating title='Users average rating'><i className="fas fa-grin-alt" /><span>{movie.vote_average.toFixed(1)}</span></MovieRating>}
        </MovieItemContent>
    </MovieGenreItem>
};