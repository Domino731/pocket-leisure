import {
    FullWidePoster,
    FactsTable
} from "../../styled-components/general/general-styles";
import {
    MoviePosterContainerDesktop,
    MovieFactsContainerDesktop
} from "../../styled-components/elements/movie/movie";

/**
 * Component which is rendering poster and table with movie facts -> director, ratings, time, relased data, budget...
 * @param movie - data about movie
 * @param credits - data about movie credit
 */
export const MoviePosterDesktop = ({ movie, credits }) => {
    return <MoviePosterContainerDesktop>
        {/* check if movie has a poster */}
        {movie.poster_path !== null &&
            <FullWidePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />}
        <MovieFactsContainerDesktop>

            {/*movie details*/}
            <FactsTable>
                <tbody>
                    {/* director */}
                    {credits.director !== undefined && <tr>
                        <td><i className="fas fa-circle" />Director</td>
                        <td>{credits.director.name}</td>
                    </tr>}

                    {/* status */}
                    {movie.status !== null && <tr>
                        <td><i className="fas fa-circle" />Status</td>
                        <td>{movie.status}</td>
                    </tr>}

                    {/* production countries */}
                    {movie.production_countries.length !== 0 && <tr>
                        <td><i className="fas fa-circle" />Country</td>
                        <td>{movie.production_countries.map((el, num) => <span
                            key={`productionCountries_${movie.id}_${num}`}>{el.name}</span>)}</td>
                    </tr>}

                    {/* time */}
                    {movie.runtime !== null && <tr>
                        <td><i className="fas fa-circle" />Time</td>
                        <td>{movie.runtime} min</td>
                    </tr>}

                    {/* budget */}
                    {movie.budget !== 0 &&
                        <tr>
                            <td><i className="fas fa-circle" />Budget</td>
                            <td><i className="fas fa-dollar-sign" /> {movie.budget.toLocaleString()}</td>
                        </tr>
                    }

                    {/* production companies */}
                    {movie.production_companies.length !== 0 && <tr>
                        <td><i className="fas fa-circle" />Production</td>
                        <td>{movie.production_companies.map((el, num) => <span
                            key={`productionCompanies_${movie.id}_${num}`}>{el.name}</span>)}</td>
                    </tr>}

                    {/* ratings */}
                    {
                        movie.vote_average !== null && <tr>
                            <td><i className="fas fa-circle" />Rating</td>
                            <td>{movie.vote_average.toFixed(1)} / 10</td>
                        </tr>
                    }

                </tbody>
            </FactsTable>
        </MovieFactsContainerDesktop>
    </MoviePosterContainerDesktop>
}