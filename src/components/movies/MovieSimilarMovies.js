import { Link } from "react-router-dom";
import {
    MovieItemTitle,
    MoviesList,
  MovieSimilarSingle,
  MovieSimilarMissing
} from "../../styled-components/elements/movie/movie";
import missingPhoto from "../../images/missing.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * Component with list of similar movies
 * @param movies - array with data about similar movies
 */
export const MovieSimilarMovies = ({ movies }) => {

    const missingPosterStyles = {
        width: `50%`,
        margin: `0 auto`,
        display: `block`,
        marginBottom: `5px`
    }
    return <div>

        {/* title */}
        <MovieItemTitle>Similar movies</MovieItemTitle>

        {/* list with movies */}
        <MoviesList>
            {movies.map((el, num) =>
                <MovieSimilarSingle key={`similarMovies_${el.title}-${num}`}>
                    <Link to={`/movie/${el.id}`} >
                        {
                            // check if movie has a poster
                            el.poster_path !== null ?
                                <LazyLoadImage src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                                    alt={el.title} />
                                : <MovieSimilarMissing>
                                    <LazyLoadImage src={missingPhoto} alt={el.title} title='Missing movie poster' style={missingPosterStyles}/>
                                    <h3>{el.title}</h3>   
                                </MovieSimilarMissing>
                        }
                    </Link>
                </MovieSimilarSingle>
            )
            }
        </MoviesList>
    </div>
}
