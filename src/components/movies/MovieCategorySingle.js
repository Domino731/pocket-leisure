import {Link} from "react-router-dom";
import {getReleaseDate} from "../../functions/getReleaseDate";
// styles
import {PosterBig, PosterBigMissing} from "../../styled-components/general/general-styles";
import {MovieCategoryItem} from "../../styled-components/elements/movie/movieCategory";
import {ItemTitleSmall} from "../../styled-components/general/general-styles";
import {ItemPremiereSmall} from "../../styled-components/general/general-styles";

export const MovieCategorySingle = ({movie}) => {
    return <MovieCategoryItem>
        <Link  to={`/movie/${movie.id}`}>
            {/*not all movies have a poster*/}
            { movie.poster_path !== null ?
                <PosterBig src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
                :
                <PosterBigMissing><i className="fas fa-image"/></PosterBigMissing>
            }
        </Link>
        <ItemTitleSmall>{movie.title}</ItemTitleSmall>
        <ItemPremiereSmall>{getReleaseDate(movie.release_date)}</ItemPremiereSmall>
    </MovieCategoryItem>
}