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
    GameStoresContainer,
    GameStores,
    GameStore,
    GameSeriesContainer,
    GameSeries,
    GameSeriesSingle,
    GameSeriesMissing,
    GamePosterContainer,
    GameIntroductionContainer,
    GameRow,
    GamePosterContainerDesktop,
    GameFactsDesktop,
    GamePosterMissing
} from "../../styled-components/elements/games/specificGame";
import {getReleaseDate} from "../../functions/getReleaseDate";
import {Link} from "react-router-dom";
import {Loading} from "../loading/Loading";
import {NotFound404} from "../notFound/NotFound404";


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
    }, [props.match.params])

    // get game trailers, screenshots, additions, stores, series
    useEffect(() => {
        if (game !== undefined && game !== "notFound") {
            getGameTrailers(setGameTrailers, props.match.params.id)
            getGameScreenshots(setGameSc, props.match.params.id)
            getGameAdditions(setGameAdditions, props.match.params.id)
            getGameStores(setGameStores, props.match.params.id)
            getGameSeries(setGameSeries, props.match.params.id)
        }
    }, [game, props.match.params])

    // when user chose another game scroll to top of the browser window
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [game])

    // switch to previous trailer
    const handleSwitchPrevTrailer = () => {
        setTrailerNumber(prev => prev - 1)
    }

    // switch to next trailer
    const handleSwitchNextTrailer = () => {
        if (trailerNumber < gameTrailers.length) {
            setTrailerNumber(prev => prev + 1)
        }
    }

    // switch to previous screenshot
    const handleSwitchPrevSc = () => {
        setScNumber(prev => prev - 1)
    }

    // switch to next screenshot
    const handleSwitchNextSc = () => {
        if (scNumber < gameSc.length) {
            setScNumber(prev => prev + 1)
        }
    }


    /**
     game state have details about game store, but dont have url to stores, these are in gameStores component.
     store are rendered automatically, this function returns url for game store
     * @param num {number} - number of store that you want to get
     */
    const getGameStoreUrl = (num) => {
        if (gameStores !== undefined && gameStores[num] !== undefined) {
            return gameStores[num].url
        }
    }

    // when the game doesn't even exist redirect user to main games page ("/games")
    if (game === "notFound") {
        return <NotFound404 redirectUrl="/games"/>
    }
    if (game === undefined || gameTrailers === undefined || gameSc === undefined ||
        gameAdditions === undefined || gameStores === undefined || gameSeries === undefined) {
        return <Loading/>
    }


    return <Container>


        <GameRow>

            {/*game poster*/}
            {/*renders only below 1024px - tablets, phones...*/}
            <GamePosterContainer>
                {/*poster, some movie dont have a poster, then dont render anything*/}
                {game.background_image !== null && <FullWidePoster src={game.background_image}/>}
            </GamePosterContainer>

            {/*game poster with game facts*/}
            {/*renders only above 1024px - for desktops, laptops...*/}
            <GamePosterContainerDesktop>

                {/*when have game have poster show it */}
                {game.background_image !== null && <FullWidePoster src={game.background_image}/>}

                {/*when have game doesnt have poster show alternate poster */}
                {game.background_image === null &&
                <GamePosterMissing><i className="fas fa-gamepad"/></GamePosterMissing>}

                <GameFactsDesktop>
                    <tbody>

                    {/*game developers*/}
                    {game.developers.length > 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Developers</td>
                        <td>{game.developers.map((el, num) => <span
                            key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                    </tr>
                    }

                    {/*game publishers*/}
                    {game.publishers.length > 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Publishers</td>
                        <td>{game.publishers.map((el, num) => <span
                            key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
                    </tr>
                    }

                    {/*game playtime*/}
                    {game.playtime > 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Playtime</td>
                        <td>{game.playtime} hours</td>
                    </tr>
                    }

                    {/*game rating*/}
                    {game.rating > 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Rating</td>
                        <td>{game.rating.toFixed(1)} / 5</td>
                    </tr>
                    }

                    {/*game rating by metacritic*/}
                    {game.metacritic > 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Metacritic</td>
                        <td>{game.metacritic} / 100</td>
                    </tr>
                    }

                    {/*game platforms*/}
                    {game.platforms.length > 0 &&
                    <tr>
                        <td><i className="fas fa-circle"/>Platforms</td>
                        <td>{game.platforms.map((el, num) => <span
                            key={`productionCompanies_${props.match.params.id}_${num}`}>
                      {el.platform.name}
                  </span>)}</td>
                    </tr>}

                    </tbody>
                </GameFactsDesktop>
            </GamePosterContainerDesktop>

            {/*game introduction - title, genres, rating, description*/}
            <GameIntroductionContainer>

                {/*game name*/}
                <GameTitle>{game.name}</GameTitle>

                {/*game premiere*/}
                {game.released !== null && <GamePremiere>{getReleaseDate(game.released)}</GamePremiere>}

                {/*game genres*/}
                <GameGenreList>
                    {game.genres !== null && game.genres.map((el, num) => (
                        <li key={`game${num}_${props.match.params.id}_genre_${el.name}`}><Link
                            to={`/games-by-genre/${el.id}/${el.name}`}>{el.name}</Link></li>
                    ))}
                </GameGenreList>

                {/*game rating by users*/}
                {game.rating !== 0 && <GameRating rating={game.rating}><i className="far fa-grin"/>
                    <div/>
                </GameRating>}

                {/*game rating by metacritic*/}
                {game.metacritic !== null &&
                <GameRatingMetacritic rating={game.metacritic}><i><img src={metacriticIcon} alt="metacritic"/></i>
                    <div/>
                </GameRatingMetacritic>}

                {/*description*/}
                {game.description_raw !== null && <GameDescription>{game.description_raw}</GameDescription>}
            </GameIntroductionContainer>
        </GameRow>


        {/*game facts - developers, publishers, playtime...*/}
        {/*renders only below 1024px - tablets, phones...*/}
        <GameFacts>
            <tbody>

            {/*developers*/}
            {game.developers.length > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Developers</td>
                <td>{game.developers.map((el, num) => <span
                    key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
            </tr>
            }

            {/*publishers*/}
            {game.publishers.length > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Publishers</td>
                <td>{game.publishers.map((el, num) => <span
                    key={`productionCompanies_${props.match.params.id}_${num}`}>{el.name}</span>)}</td>
            </tr>
            }

            {/*playtime*/}
            {game.playtime > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Playtime</td>
                <td>{game.playtime} hours</td>
            </tr>
            }

            {/*rating by users*/}
            {game.rating > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Rating</td>
                <td>{game.rating} / 5</td>
            </tr>
            }

            {/*rating by metacritic*/}
            {game.metacritic > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Metacritic</td>
                <td>{game.metacritic} / 100</td>
            </tr>
            }

            {/*platforms*/}
            {game.platforms.length > 0 &&
            <tr>
                <td><i className="fas fa-circle"/>Platforms</td>
                <td>{game.platforms.map((el, num) => <span key={`productionCompanies_${props.match.params.id}_${num}`}>
                      {el.platform.name}
                  </span>)}</td>
            </tr>}
            </tbody>
        </GameFacts>


        {/*game trailers*/}
        {gameTrailers.length > 0 && <GameTrailersContainer>
            <GameTrailers>
                <iframe title={`${game.name} trailer`} src={gameTrailers[trailerNumber].data.max} frameBorder="0"
                        allowFullScreen/>
            </GameTrailers>

            {/*switching between trailers*/}
            <GameMediaSwitch>
                {trailerNumber !== 0 && <button onClick={handleSwitchPrevTrailer}>Previous</button>}
                {trailerNumber < gameTrailers.length - 1 && <button onClick={handleSwitchNextTrailer}>Next</button>}
            </GameMediaSwitch>
        </GameTrailersContainer>}


        {/*game screenshots*/}
        <GameScContainer>
            {gameSc.length > 0 && <>
                <img src={gameSc[scNumber].image} alt={`${game.name} screenshot`}/>

                {/*switching between screenshots*/}
                <GameMediaSwitch>
                    {scNumber !== 0 && <button onClick={handleSwitchPrevSc}>Previous</button>}
                    {scNumber < gameSc.length - 1 && <button onClick={handleSwitchNextSc}>Next</button>}
                </GameMediaSwitch>
            </>}
        </GameScContainer>


        {/*game additions - GOTY, dlc...*/}
        {gameAdditions.length > 0 && <GameAdditionsContainer>
            <GameItemTitle>Additions</GameItemTitle>
            <GameAdditions>

                {gameAdditions.map((el, num) => <GameAddition key={`gameAddition_${game.slug}_${num}`}>

                    {/*some additions dont have poster, if addition dont have replace with alternate poster*/}
                    {el.background_image !== null ?

                        // have poster
                        <Link to={`/game/${el.id}`}><img src={el.background_image} alt=""/></Link>
                        :

                        //dont have poster
                        <Link to={`/game/${el.id}`}><strong><i className="fas fa-image"/></strong></Link>}
                    <ItemTitleSmall>{el.name}</ItemTitleSmall>
                </GameAddition>)}

            </GameAdditions>
        </GameAdditionsContainer>}


        {/*game stores - origin, ubisoft store, steam*/}
        {game.stores.length > 0 && <GameStoresContainer>
            <GameItemTitle>Stores</GameItemTitle>
            <GameStores>
                {game.stores.map((el, num) => <GameStore key={`gameStore_${game.slug}_${num}`}>
                    <a href={getGameStoreUrl(num)} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-shopping-cart"/>
                        {el.store.name}
                    </a>
                </GameStore>)}
            </GameStores>
        </GameStoresContainer>}


        {/*game series for example for gta 5 it will be gta 4, gta vice city:), gta:chinatown wars*/}
        {gameSeries.length > 0 && <GameSeriesContainer>
            <GameItemTitle>Game series</GameItemTitle>
            <GameSeries>
                {gameSeries.map((el, num) => <GameSeriesSingle key={`gameSeries_${game.slug_}_${num}`}>
                        <Link to={`/game/${el.id}`}>

                            {/*some game series dont have poster, if addition dont have replace with alternate poster*/}
                            {el.background_image !== null ?

                                // have poster
                                <img src={el.background_image} alt={el.name}/>
                                :
                                // dont have
                                <GameSeriesMissing><i className="fas fa-gamepad"/></GameSeriesMissing>
                            }

                            <h3>{el.name}</h3>
                        </Link>
                    </GameSeriesSingle>
                )}
            </GameSeries>
        </GameSeriesContainer>}

    </Container>
}