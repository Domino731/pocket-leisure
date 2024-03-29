import {
    FactsTable
} from "../../styled-components/general/general-styles";
import {
    MovieFactsContainer,
} from "../../styled-components/elements/movie/movie";


/**
 * Component with table about movie details - directior, status (released or not), country, time, bugdet, rating
 * @param credits - data about movie credits
 * @param movie - data about movie
 */
export const MovieFacts = ({ credits, movie }) => {
    return <MovieFactsContainer>

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

                {/* run time  */}
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

                {/* rating */}
                {
                    movie.vote_average !== null && <tr>
                        <td><i className="fas fa-circle" />Rating</td>
                        <td>{movie.vote_average.toFixed(1)} / 10</td>
                    </tr>
                }
            </tbody>
        </FactsTable>
    </MovieFactsContainer>
}