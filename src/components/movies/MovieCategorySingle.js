import { Link } from "react-router-dom";
import { getReleaseDate } from "../../functions/getReleaseDate";
import { PosterBig, PosterBigMissing } from "../../styled-components/general/general-styles";
import { MovieCategoryItem } from "../../styled-components/elements/movie/movieCategory";
import { ItemTitleSmall } from "../../styled-components/general/general-styles";
import { ItemPremiereSmall } from "../../styled-components/general/general-styles";
import photoMissing from "../../images/missing.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * Component with  movie title, release date, and  poster as link to single movie page with details
 * @param movie {object} - object with data about movie
 */
export const MovieCategorySingle = ({ movie }) => {
    console.log(movie)
    return <MovieCategoryItem>

        {/* link to page with details about this movie  */}
        <Link to={`/movie/${movie.id}`}>
            {/* check if movie has a poster */}
            {movie.poster_path !== null ?
                <PosterBig >
                    <LazyLoadImage
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title} />

                </PosterBig>
                :
                <PosterBigMissing>
                    <LazyLoadImage
                        src={photoMissing}
                        title='Missing movie poster'
                        alt='camera' />
                </PosterBigMissing>
            }
        </Link>

        {/* movie title */}
        <ItemTitleSmall>{movie.title}</ItemTitleSmall>

        {/* release date */}
        <ItemPremiereSmall>{getReleaseDate(movie.release_date)}</ItemPremiereSmall>
    </MovieCategoryItem>
};