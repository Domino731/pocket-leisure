import {Container, SearchInputContainer, TitlePrimary} from "../../styled-components/general/general-styles";
import {useState} from "react";
import {GameSingle} from "./GameSingle";
import {getSearchedGame} from "../../api/rawg/operations";
import {GamesList} from "../../styled-components/elements/games/games";
import {Loading} from "../loading/Loading";

/**
 * @returns {JSX.Element} - list of searched games
 */
export const GameSearch = () => {

    // state with searched games, base on this state games list will be rendered
    const [games, setGames] = useState(null);

    // flag by which loading screen is set
    const [loading, setLoading] = useState(false);

    // get searched games
    const handleChangeMovies = (e) => {
        return getSearchedGame(setGames, setLoading, e.target.value);
    }

    return <Container>
        <TitlePrimary>Search</TitlePrimary>
        <SearchInputContainer>
            <i className="fas fa-search"/>
            <input type="text" onChange={handleChangeMovies} placeholder="Powered by Rawg Api"/>
        </SearchInputContainer>

        {/*when component download searched games, set loading screen */}
        {loading ?
            <Loading/>
            :
            <GamesList>
                {games !== null && games.map((el, num) => {
                    return <GameSingle game={el} key={`gameSearch_single_${num}_${el.slug}`}/>
                })}
            </GamesList>
        }

    </Container>
};