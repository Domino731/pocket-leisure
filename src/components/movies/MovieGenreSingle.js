// component which is rendered by map in MoviesByGenre component, displays card with movie
import {Link} from "react-router-dom";
import {getReleaseDate} from "../../functions/getReleaseDate";
//styles
import {MovieGenreItem, MovieRating} from "../../styled-components/elements/movie/movieGenre";
import {
    PosterMed,
    ItemTitleMedium,
    ItemPremiereMedium,
    PosterMedMissing
} from "../../styled-components/general/general-styles";


/**
 @param movie {object} - object with a film which contains his basic data - title, rating, premiere
 */
export const MovieGenreSingle = ({movie}) => {


    return <MovieGenreItem>


        <Link to={`/movie/${movie.id}`}>
            {/*not all movies have a poster*/}
            {
                movie.poster_path !== null ?
                    <PosterMed src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                               alt={movie.title !== undefined ? movie.title : movie.name}/>
                    :
                    <PosterMedMissing><i className="fas fa-image"/></PosterMedMissing>
            }
        </Link>
        <div>

            {/*not all movies have title key, certain have name key*/}
            <ItemTitleMedium>{movie.title !== undefined ? movie.title : movie.name}</ItemTitleMedium>

            <ItemPremiereMedium>{getReleaseDate(movie.release_date)}</ItemPremiereMedium>

            {/*if a film has no rating, dont show it*/}
            {movie.vote_average !== 0 &&
            <MovieRating><i className="fas fa-grin-alt"/>{movie.vote_average.toFixed(1)}</MovieRating>}

        </div>
    </MovieGenreItem>
}