// component which is rendered by map in MoviesByGenre component, displays card with movie
import {Link} from "react-router-dom";
import {getReleaseDate} from "../../functions/getReleaseDate";
//styles
import {MovieGenreItem, MovieRating} from "../../styled-components/elements/movie/movieGenre";
import {PosterMed, ItemTitleMedium, ItemPremiereMedium} from "../../styled-components/general/general-styles";

/**
 @param movie {object} - object with a film which contains its basic data - title, rating, premiere
 */
export const MovieGenreSingle = ({movie}) => {
    return <MovieGenreItem>
        <Link to={`/movie/${movie.id}`}><PosterMed src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/></Link>
        <div>
            <ItemTitleMedium>{movie.title}</ItemTitleMedium>
            <ItemPremiereMedium>{getReleaseDate(movie.release_date)}</ItemPremiereMedium>

            {/*if a film has no rating, dont show it*/}
            {movie.vote_average !== 0 &&
            <MovieRating><i className="fas fa-grin-alt"/>{movie.vote_average}</MovieRating>}

        </div>
    </MovieGenreItem>
}