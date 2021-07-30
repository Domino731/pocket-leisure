import {Container, TitlePrimary} from "../../styled-components/general/general-styles";
import {useState} from "react";
import {FormElement} from "../../styled-components/elements/user-form/user-form";
import {GameSingle} from "./GameSingle";
import {getSearchedGame} from "../../api/rawg/operations";
import {GamesList} from "../../styled-components/elements/games/games";
import {Loading} from "../loading/Loading";

/**
 * @returns {JSX.Element} - list of searched games
 */
export const GameSearch = () => {

    // state with searched games
    const [games, setGames] = useState(undefined)

    // flag by which loading screen is set
    const [loading, setLoading] = useState(false)

    // get searched games
    const handleChangeMovies = (e) => {
        getSearchedGame(setGames, setLoading, e.target.value)
    }

    return <Container>
        <TitlePrimary>Search</TitlePrimary>
        <FormElement>
            <i className="fas fa-search"/>
            <input type="text" onChange={handleChangeMovies} placeholder="Powered by Rawg Api"/>
        </FormElement>

        {/*when component download searched games, set loading screen */}
        {loading ?
            <Loading/>
            :
            <GamesList>
                {games !== undefined && games.map((el, num) => {
                    return <GameSingle game={el} key={`gameSearch_single_${num}_${el.slug}`}/>
                })}
            </GamesList>
        }

    </Container>
}