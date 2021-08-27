import {getGames, getGamesGenres} from "../../api/rawg/operations";
import {useEffect, useState} from "react";
import {Container, TitleBar, TitlePrimary} from "../../styled-components/general/general-styles";
import {Link} from "react-router-dom";
import {GamesGenres} from "./GamesGenres";
import {GamesListMain} from "./GamesListMain";
import {Loading} from "../loading/Loading";

/**
 * @returns {JSX.Element} - Main games page with games and genres
 */
export const Games = () => {

    // state with games, based on this, a list with games list will be rendered
    const [games, setGames] = useState(null)

    // state with games genres, based on this, a list with game genres will be rendered
    const [gamesGenres, setGamesGenres] = useState(null)

    // when component mounted get games list and save them to games state
    useEffect(() => {
        getGames(setGames)
        getGamesGenres(setGamesGenres)
    }, [])

    if (games === null|| gamesGenres === null) {
        return <Loading/>
    }

    return <Container>
        <TitleBar><TitlePrimary>Games <span>Powered by Rawg Api</span></TitlePrimary> <Link to="/game-search"><i
            className="fas fa-search"/> <span>Search</span></Link></TitleBar>
       <GamesListMain games={games}/>
       <GamesGenres gamesGenres={gamesGenres} />
    </Container>
}