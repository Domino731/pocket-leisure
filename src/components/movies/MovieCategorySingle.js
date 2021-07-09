import {Link} from "react-router-dom";
import {getReleaseDate} from "../../functions/getReleaseDate";
// styles
import {PosterBig} from "../../styled-components/general/general-styles";
import {MovieCategoryItem} from "../../styled-components/elements/movie/movieCategory";
import {ItemTitleSmall} from "../../styled-components/general/general-styles";
import {ItemPremiereSmall} from "../../styled-components/general/general-styles";

export const MovieCategorySingle = ({movie}) => {
    return <MovieCategoryItem>
        <Link  to={`/movie/${movie.id}`}><PosterBig src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/></Link>
        <ItemTitleSmall>{movie.title}</ItemTitleSmall>
        <ItemPremiereSmall>{getReleaseDate(movie.release_date)}</ItemPremiereSmall>
    </MovieCategoryItem>
}