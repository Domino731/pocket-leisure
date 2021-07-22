import metacriticIcon from "../../images/768px-Metacritic.svg.png"
import {useEffect, useState} from "react";
import {
    getGameAdditions,
    getGameDetails,
    getGameScreenshots, getGameSeries,
    getGameStores,
    getGameTrailers
} from "../../api/rawg/operations";
import {Container, FullWidePoster, ItemTitleSmall} from "../../styled-components/general/general-styles";
import {
    GameGenreList,
    GamePremiere,
    GameTitle,
    GameRating,
    GameDescription,
    GameFacts,
    GameRatingMetacritic,
    GameTrailersContainer,
    GameTrailers,
    GameScContainer,
    GameMediaSwitch,
    GameItemTitle,
    GameAdditions,
    GameAdditionsContainer,
    GameAddition,
    GameStoresContainer, GameStores, GameStore, GameSeriesContainer, GameSeries, GameSeriesSingle
} from "../../styled-components/elements/games/games";
import {getReleaseDate} from "../../functions/getReleaseDate";
import {Link} from "react-router-dom";


export const Game = (props) => {

    // state with game details
    const [game, setGame] = useState(undefined)

    // state with game trailers
    const [gameTrailers, setGameTrailers] = useState(undefined)

    // state with game screenshots
    const [gameSc, setGameSc] = useState(undefined)

    // state with game additions
    const [gameAdditions, setGameAdditions] = useState(undefined)

    // state with game stores
    const [gameStores, setGameStores] = useState(undefined)

    // state with game list that are part of same series
    const [gameSeries, setGameSeries] = useState(undefined)
    // state, which change, shows another trailer
    const [trailerNumber, setTrailerNumber] = useState(0)

    // state, which change, shows another trailer
    const [scNumber, setScNumber] = useState(0)

    // when component mounted get game details
    useEffect(() => {
        getGameDetails(setGame, props.match.params.id)
        getGameTrailers(setGameTrailers, props.match.params.id)
        getGameScreenshots(setGameSc, props.match.params.id)
        getGameAdditions(setGameAdditions, props.match.params.id)
        getGameStores(setGameStores, props.match.params.id)
        getGameSeries(setGameSeries, props.match.params.id)
    }, [props.match.params])


    const handleSwitchPrevTrailer = () => {
        setTrailerNumber(prev => prev - 1)
    }
    const handleSwitchNextTrailer = () => {
        if (trailerNumber < gameTrailers.length) {
            setTrailerNumber(prev => prev + 1)
        }
    }

    const handleSwitchPrevSc = () => {
        setScNumber(prev => prev - 1)
    }
    const handleSwitchNextSc = () => {
        if (scNumber < gameSc.length) {
            setScNumber(prev => prev + 1)
        }
    }


    if (game === undefined || gameTrailers === undefined || gameSc === undefined ||
        gameAdditions === undefined || gameStores === undefined || gameSeries === undefined) {
        return null
    }


    return <Container>
        {/*poster, some movie dont have a poster, then dont render anything*/}
        <FullWidePoster src={game.background_image}/>
        <GameTitle>{game.name}</GameTitle>
        <GamePremiere>{getReleaseDate(game.released)}</GamePremiere>
        <GameGenreList>
            {game.genres !== null && game.genres.map((el, num) => (
                <li key={`game${num}_${props.match.params.id}_genre_${el.name}`}><Link
                    to={`/games-by-genre/${el.id}/${el.name}`}>{el.name}</Link></li>
            ))}
        </GameGenreList>

        <GameRating rating={game.rating}><i className="far fa-grin"/>
            <div/>
        </GameRating>

        <GameRatingMetacritic rating={game.metacritic}><i><img src={metacriticIcon} alt="metacritic"/></i>
            <div/>
        </GameRatingMetacritic>

        <GameDescription>{game.description_raw}</GameDescription>

        <GameFacts>
            <tbody>
            <tr>
                <td><i className="fas fa-circle"/>Developers</td>
                <td>{game.developers.map((el, num) => <span
                    key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
            </tr>
            <tr>
                <td><i className="fas fa-circle"/>Publishers</td>
                <td>{game.publishers.map((el, num) => <span
                    key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
            </tr>
            <tr>
                <td><i className="fas fa-circle"/>Playtime</td>
                <td>{game.playtime} hours</td>
            </tr>

            <tr>
                <td><i className="fas fa-circle"/>Rating</td>
                <td>{game.rating} / 5</td>
            </tr>

            <tr>
                <td><i className="fas fa-circle"/>Metacritic</td>
                <td>{game.metacritic} / 100</td>
            </tr>
            </tbody>
        </GameFacts>
        {gameTrailers.length > 0 && <GameTrailersContainer>
            <GameTrailers>
                <iframe src={gameTrailers[trailerNumber].data.max} frameborder="0"/>
            </GameTrailers>

            <GameMediaSwitch>
                {trailerNumber !== 0 && <button onClick={handleSwitchPrevTrailer}>Previous</button>}
                {trailerNumber < gameTrailers.length - 1 && <button onClick={handleSwitchNextTrailer}>Next</button>}
            </GameMediaSwitch>
        </GameTrailersContainer>}


        <GameScContainer>
            <img src={gameSc[scNumber].image} alt=""/>
            <GameMediaSwitch>
                {scNumber !== 0 && <button onClick={handleSwitchPrevSc}>Previous</button>}
                {scNumber < gameSc.length - 1 && <button onClick={handleSwitchNextSc}>Next</button>}
            </GameMediaSwitch>
        </GameScContainer>

        {gameAdditions.length > 0 && <GameAdditionsContainer>
            <GameItemTitle>Additions</GameItemTitle>
            <GameAdditions>
                {gameAdditions.map((el, num) => <GameAddition key={`gameAddition_${game.slug}_${num}`}>
                    {el.background_image !== null ?
                        <Link to={`/game/${el.id}`}><img src={el.background_image} alt=""/></Link>
                        :
                        <Link to={`/game/${el.id}`}><strong><i className="fas fa-image"/></strong></Link>}
                    <ItemTitleSmall>{el.name}</ItemTitleSmall>
                </GameAddition>)}
            </GameAdditions>
        </GameAdditionsContainer>}

        <GameStoresContainer>
            <GameItemTitle>Stores</GameItemTitle>
            <GameStores>
                {game.stores.map((el, num) => <GameStore key={`gameStore_${game.slug}_${num}`}><i
                    className="fas fa-shopping-cart"/><a href={gameStores[num].url} target="_blank" rel="noopener noreferrer">{el.store.name}</a></GameStore>)}
            </GameStores>
        </GameStoresContainer>

        <GameSeriesContainer>
            <GameItemTitle>Game series</GameItemTitle>
            <GameSeries>
                {gameSeries.map((el,num) => <Link to={`/game/${el.id}`}><GameSeriesSingle key={`gameSeries_${game.slug_}_${num}`}>
                    <img src={el.background_image} alt={el.name}/>
                    <h3>{el.name}</h3>
                </GameSeriesSingle></Link>)}
            </GameSeries>
        </GameSeriesContainer>
    </Container>
}