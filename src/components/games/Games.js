import{getGames} from "../../api/rawg/operations";
import {useEffect, useState} from "react";
import {Container, TitleBar, TitlePrimary} from "../../styled-components/general/general-styles";
import {Link} from "react-router-dom";
import {GameSingle} from "./GameSingle";
import {GamesList} from "../../styled-components/elements/games/games";

export const Games = () => {

    // state with games
    const [games, setGames] = useState(undefined)

    // when component mounted get games list and save them to games state
    useEffect(()=>{
       getGames(setGames)
    },[])

    if(games === undefined){
        return null
    }
    return <Container>
        <TitleBar><TitlePrimary>Games</TitlePrimary> <Link to="movie/search"><i className="fas fa-search"/></Link></TitleBar>
       <GamesList>
           {games.map((el,num) => <GameSingle game={el} key={`game_single_${num}_${el.slug}`}/>)}
       </GamesList>
    </Container>
}