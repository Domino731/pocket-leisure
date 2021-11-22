import {useEffect, useState} from "react";
import {
    getGameAdditions,
    getGameDetails,
    getGameScreenshots, getGameSeries,
    getGameStores,
    getGameTrailers
} from "../../api/rawg/operations";
import {Container} from "../../styled-components/general/general-styles";
import {Loading} from "../loading/Loading";
import {NotFound404} from "../notFound/NotFound404";
import { GameSeries } from "./GameSeries";
import { GameStores } from "./GameStores";
import { GameAdditions } from "./GameAdditions";
import { GameScreenshots } from "./GameScreenshots";
import { GameTrailers } from "./GameTrailers";
import { GameFacts } from "./GameFacts";
import { GameIntroduction } from "./GameIntroduction";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// A component that returns  card with details about specific game.
export const Game = () => {

    // references
    const {id} = useParams();
    /** game Id */
    const gameId = id;
    
    // state with game details
    const [game, setGame] = useState(null);

    // state with game trailers
    const [gameTrailers, setGameTrailers] = useState(null);

    // state with game screenshots
    const [gameSc, setGameSc] = useState(null);

    // state with game additions
    const [gameAdditions, setGameAdditions] = useState(null);

    // state with game stores
    const [gameStores, setGameStores] = useState(null);

    // state with game list that are part of same series
    const [gameSeries, setGameSeries] = useState(null);

    //A state containing the width of the page based on which the elements will be rendered.
    // For widths below 1024px there is a different layout at the top and for widths above 1024px
    const [windowWidth, setWindowWidth] = useState(0);

    // when component mounted get game details
    useEffect(() => {
        getGameDetails(setGame, gameId);
    }, [gameId]);

    // get game trailers, screenshots, additions, stores, series
    useEffect(() => {
        if (game !== null && game !== undefined) {
            getGameTrailers(setGameTrailers, gameId);
            getGameScreenshots(setGameSc, gameId);
            getGameAdditions(setGameAdditions, gameId);
            getGameStores(setGameStores, gameId);
            getGameSeries(setGameSeries, gameId);
        }
    }, [game]);


    // set the windowWidth state
    const resizeWindow = () => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);



    // when the game doesn't even exist redirect user to main games page ("/games")
    if (game === undefined) {
        return <NotFound404 redirectUrl="/games"/>
    }

    if (game === null || gameTrailers === null || gameSc === null ||
        gameAdditions === null || gameStores === null || gameSeries === null) {
        return <Loading/>
    }


    return <Container>
        
        <GameIntroduction game={game}/>

        {/*game facts - developers, publishers, playtime...*/}
        {/*renders only below 1024px - tablets, phones...*/}
        {windowWidth < 1024 && <GameFacts game={game}/>}


        {/*game trailers*/}
        {gameTrailers.length > 0 && <GameTrailers trailers={gameTrailers}/> }

        {/* game screenshots */}
        {gameSc.length > 0 && <GameScreenshots screenshots={gameSc}/>}

        {/*game additions - GOTY, dlc...*/}
        {gameAdditions.length > 0 && <GameAdditions additions={gameAdditions}/>}

        {/*game stores - origin, ubisoft store, steam*/}
        {game.stores.length > 0 && <GameStores stores={game.stores}/>}

        {/*game series for example for gta 5 it will be gta 4, gta vice city:), gta:chinatown wars*/}
        {gameSeries.length > 0 && <GameSeries gameSeries={gameSeries}/>}
    </Container>
};