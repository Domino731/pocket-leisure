import {GamesList} from "../../styled-components/elements/games/games";
import {GameSingle} from "./GameSingle";

export const GamesListMain = ({games}) => {
    return  <GamesList>
        {games.map((el, num) => <GameSingle game={el} key={`game_single_${num}_${el.slug}`}/>)}
    </GamesList>
}