import {GamesElementTitle, GamesGenresList} from "../../styled-components/elements/games/games";
import {Genre} from "../../styled-components/general/general-styles";
import {Link} from "react-router-dom";

/**
 * @param gamesGenres {array} - array with genres
 * @returns {JSX.Element} - list of game genres
 */
export const GamesGenres = ({gamesGenres}) => {
    return <section>
        <GamesElementTitle>Genres</GamesElementTitle>
        <GamesGenresList>
            {gamesGenres.map((el, num) => <Genre area={el.gridArea} key={`gamesByGenre_${num}`}><Link
                to={`/games-by-genre/${el.id}/${el.name}`}>{el.name}</Link></Genre>)}
        </GamesGenresList>
    </section>
};