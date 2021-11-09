import { Link } from "react-router-dom";
import {
    MovieItemTitle,
    MoviesList,
  MovieSimilarSingle
} from "../../styled-components/elements/movie/movie";
import missingPhoto from "../../images/missing.svg";

/**
 * Component with list of similar movies
 * @param movies - array with data about similar movies
 */
export const MovieSimilarMovies = ({ movies }) => {
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
                                <img src={`https://image.tmdb.org/t/p/original${el.poster_path}`}
                                    alt={el.title} />
                                : <>
                                    <img src={missingPhoto} alt={el.title} title='Missing movie poster'/>
                                    <h3>{el.title}</h3>   
                                </>
                        }
                    </Link>
                </MovieSimilarSingle>
            )
            }
        </MoviesList>
    </div>
}
