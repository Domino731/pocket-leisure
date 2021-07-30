import {GamesList} from "../../styled-components/elements/games/games";
import {GameSingle} from "./GameSingle";

/**
 *
 * @param games {array} - array with games
 * @returns {JSX.Element} list of popular games
 */
export const GamesListMain = ({games}) => {
    return <GamesList>
        {games.map((el, num) => <GameSingle game={el} key={`game_single_${num}_${el.slug}`}/>)}
    </GamesList>
}