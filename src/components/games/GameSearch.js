import {Container, TitlePrimary} from "../../styled-components/general/general-styles";
import {useState} from "react";
import {FormElement} from "../../styled-components/elements/user-form/user-form";
import {GameSingle} from "./GameSingle";
import {getSearchedGame} from "../../api/rawg/operations";

export const GameSearch = () => {

    const [games, setGames] = useState(undefined)

    const handleChangeMovies = (e) =>{
      getSearchedGame(setGames, e.target.value)
    }
    return <Container>
        <TitlePrimary>Search</TitlePrimary>
        <FormElement>
            <i className="fas fa-search"/>
            <input type="text" onChange={handleChangeMovies}/>
        </FormElement>
        {games !== undefined && games.map((el,num) => {
            return <GameSingle game={el} key={`gameSearch_single_${num}_${el.slug}`}/>
        })}
    </Container>
}