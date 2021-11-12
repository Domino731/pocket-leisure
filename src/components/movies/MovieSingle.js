import { MovieSingleRating, MovieSingleContainer, MovieSinglePosterMissing, MovieSinglePosterWrapper, MovieSingleRelase, MovieSingleTitle } from "../../styled-components/elements/movie/movieSingle";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import photoMissing from "../../images/missing.svg";
import { getReleaseDate } from "../../functions/getReleaseDate";
/**
 * 
 * @param {*} param0 
 */
export const MovieSingle = ({ movie }) => {
    console.log(movie)

    /** get color for rating
     * @param rating - movie rating
     */
    const getRaringColor = (rating) => {
        if(rating < 1.5){
            return `#d00000`;
        }
        else if (rating < 3){
            return `#dc2f02`;
        }
        else if (rating < 4.5){
            return `#ffb703`;
        }
        else if (rating < 6) {
            return `#b7dd16`;
        }
        else if (rating < 8.5){
            return `#8ce100`;
        }
        else if (rating <= 10){
            return `#50b91e`
        }
    }
    return <MovieSingleContainer>

        <Link>
            {/* rating box */}
            {movie.vote_average && <MovieSingleRating background={getRaringColor(movie.vote_average.toFixed(1))}>{movie.vote_average.toFixed(1)}</MovieSingleRating>}
            {movie.poster_path !== null ?
                <MovieSinglePosterWrapper>
                    <LazyLoadImage
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title} />
                </MovieSinglePosterWrapper>
                :
                <MovieSinglePosterMissing>
                    <LazyLoadImage
                        src={photoMissing}
                        alt={movie.title} />
                </MovieSinglePosterMissing>
            }
        </Link>

        {/*not all movies have title, certain have name key instead of title*/}
        <MovieSingleTitle>{movie.title !== undefined ? movie.title : movie.name}</MovieSingleTitle>

        {/* check if movie has a release data */}
        { movie.release_date && <MovieSingleRelase>{getReleaseDate(movie.release_date)}</MovieSingleRelase>}
    </MovieSingleContainer>
}