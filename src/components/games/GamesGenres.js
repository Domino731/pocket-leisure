import {GamesElementTitle, GamesGenresList} from "../../styled-components/elements/games/games";
import {Genre, SectionTitle} from "../../styled-components/general/general-styles";
import {Link} from "react-router-dom";

/**
 * component with list of game genres
 * @param gamesGenres {array} - array with genres
 */
export const GamesGenres = ({gamesGenres}) => {
    return <section>
        <SectionTitle>Genres</SectionTitle>
        <GamesGenresList>
            {gamesGenres.map((el, num) => <Genre area={el.gridArea} key={`gamesByGenre_${num}`}><Link
                to={`/games-by-genre/${el.id}/${el.name}`}>{el.name}</Link></Genre>)}
        </GamesGenresList>
    </section>
};