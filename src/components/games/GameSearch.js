import {Container, TitlePrimary} from "../../styled-components/general/general-styles";
import {useState} from "react";
import {FormElement} from "../../styled-components/elements/user-form/user-form";
import {GameSingle} from "./GameSingle";
import {getSearchedGame} from "../../api/rawg/operations";
import {GamesList} from "../../styled-components/elements/games/games";
import {Loading} from "../loading/Loading";

export const GameSearch = () => {

    const [games, setGames] = useState(undefined)

    const [loading, setLoading] = useState(false)
    const handleChangeMovies = (e) =>{
      getSearchedGame(setGames, setLoading, e.target.value)
    }
    return <Container>
        <TitlePrimary>Search</TitlePrimary>
        <FormElement>
            <i className="fas fa-search"/>
            <input type="text" onChange={handleChangeMovies}/>
        </FormElement>

        {loading ?
            <Loading/>
            :
            <GamesList>
                {games !== undefined && games.map((el,num) => {
                    return <GameSingle game={el} key={`gameSearch_single_${num}_${el.slug}`}/>
                })}
            </GamesList>
        }


    </Container>
}