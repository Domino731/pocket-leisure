import {getGames, getGamesGenres} from "../../api/rawg/operations";
import {useEffect, useState} from "react";
import {Container, TitleBar, TitlePrimary} from "../../styled-components/general/general-styles";
import {Link} from "react-router-dom";
import {GameSingle} from "./GameSingle";
import {GamesList} from "../../styled-components/elements/games/games";
import {GamesGenres} from "./GamesGenres";
import {GamesListMain} from "./GamesListMain";
import {Loading} from "../loading/Loading";

export const Games = () => {

    // state with games
    const [games, setGames] = useState(undefined)

    // state with games genres
    const [gamesGenres, setGamesGenres] = useState(undefined)

    // when component mounted get games list and save them to games state
    useEffect(() => {
        getGames(setGames)
        getGamesGenres(setGamesGenres)
    }, [])

    if (games === undefined || gamesGenres === undefined) {
        return <Loading/>
    }
    return <Container>
        <TitleBar><TitlePrimary>Games</TitlePrimary> <Link to="/game-search"><i
            className="fas fa-search"/></Link></TitleBar>
       <GamesListMain games={games}/>
       <GamesGenres gamesGenres={gamesGenres} />
    </Container>
}