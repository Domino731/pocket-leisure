import { FactsTable } from "../../styled-components/general/general-styles"

/**
 * Component with table about game details - developer, publisher, playtime, rating
 * @param game - data about game
 */
export const GameFacts = ({game}) => {
    return <FactsTable>
          <tbody>
            {/*developers*/}
            {game.developers.length > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Developers</td>
                <td>{game.developers.map((el, num) => <span
                    key={`productionCompanies_${game.id}_${num}`}>{el.name}</span>)}</td>
            </tr>
            }

            {/*publishers*/}
            {game.publishers.length > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Publishers</td>
                <td>{game.publishers.map((el, num) => <span
                    key={`productionCompanies_${game.id}_${num}`}>{el.name}</span>)}</td>
            </tr>
            }

            {/*playtime*/}
            {game.playtime > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Playtime</td>
                <td>{game.playtime} hours</td>
            </tr>
            }

            {/*rating by users*/}
            {game.rating > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Rating</td>
                <td>{game.rating} / 5</td>
            </tr>
            }

            {/*rating by metacritic*/}
            {game.metacritic > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Metacritic</td>
                <td>{game.metacritic} / 100</td>
            </tr>
            }

            {/*platforms*/}
            {game.platforms.length > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Platforms</td>
                <td>{game.platforms.map((el, num) => <span key={`productionCompanies_${game.id}_${num}`}>
                      {el.platform.name}
                  </span>)}</td>
            </tr>}
            </tbody>
    </FactsTable>
}