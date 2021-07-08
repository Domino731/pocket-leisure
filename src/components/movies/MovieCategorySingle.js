import {getReleaseDate} from "../../functions/getReleaseDate";
// styles
import {PosterBig} from "../../styled-components/general/general-styles";
import {MovieCategoryItem} from "../../styled-components/elements/movie/movieCategory";
import {ItemTitleSmall} from "../../styled-components/general/general-styles";
import {ItemPremiereSmall} from "../../styled-components/general/general-styles";

export const MovieCategorySingle = ({movie}) => {
    return <MovieCategoryItem>
        <PosterBig src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
         <ItemTitleSmall>{movie.original_title}</ItemTitleSmall>
        <ItemPremiereSmall>{getReleaseDate(movie.release_date)}</ItemPremiereSmall>
    </MovieCategoryItem>
}