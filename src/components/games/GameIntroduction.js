import metacriticIcon from "../../images/768px-Metacritic.svg.png"
import userRating from "../../images/gamer.svg";
import { useEffect, useState } from "react";
import { FullWidePoster, RatingText } from "../../styled-components/general/general-styles";
import {
    GameGenreList,
    GamePremiere,
    GameTitle,
    GameRating,
    GameDescription,
    GameRatingMetacritic,
    GamePosterContainer,
    GameIntroductionContainer,
    GameRow,
    GamePosterContainerDesktop,
    GameFactsDesktop,
    GamePosterMissing,
} from "../../styled-components/elements/games/specificGame";
import { getReleaseDate } from "../../functions/getReleaseDate";
import { Link } from "react-router-dom";
import { RatingIconWrapper } from "../../styled-components/elements/movie/movie";

/**
 * Component with introduction section for game
 * @param game - data about game  
 */
export const GameIntroduction = ({ game }) => {


    //A state containing the width of the page based on which the elements will be rendered.
    // For widths below 1024px there is a different layout at the top and for widths above 1024px
    const [windowWidth, setWindowWidth] = useState(0);

    // set the windowWidth state
    const resizeWindow = () => setWindowWidth(window.innerWidth);
    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return <GameRow>

        {/*game poster*/}
        {/*renders only below 1024px - tablets, phones...*/}
        {windowWidth < 1024 && <GamePosterContainer>
            {/*poster, some movie dont have a poster, then dont render anything*/}
            {game.background_image !== null && <FullWidePoster src={game.background_image} />}
        </GamePosterContainer>}

        {/*game poster with game facts*/}
        {/*renders only above 1024px - for desktops, laptops...*/}
        {windowWidth >= 1024 && <GamePosterContainerDesktop>

            {/*when have game have poster show it */}
            {game.background_image !== null && <FullWidePoster src={game.background_image} />}

            {/*when have game doesnt have poster show alternate poster */}
            {game.background_image === null &&
                <GamePosterMissing><i className="fas fa-gamepad" /></GamePosterMissing>}

            <GameFactsDesktop>
                <tbody>

                    {/*game developers*/}
                    {game.developers.length > 0 &&
                        <tr>
                            <td><i className="fas fa-circle" />Developers</td>
                            <td>{game.developers.map((el, num) => <span
                                key={`productionCompanies_${game.id}_${num}`}>{el.name}</span>)}</td>
                        </tr>
                    }

                    {/*game publishers*/}
                    {game.publishers.length > 0 &&
                        <tr>
                            <td><i className="fas fa-circle" />Publishers</td>
                            <td>{game.publishers.map((el, num) => <span
                                key={`productionCompanies_${game.id}_${num}`}>{el.name}</span>)}</td>
                        </tr>
                    }

                    {/*game playtime*/}
                    {game.playtime > 0 &&
                        <tr>
                            <td><i className="fas fa-circle" />Playtime</td>
                            <td>{game.playtime} hours</td>
                        </tr>
                    }

                    {/*game rating*/}
                    {game.rating > 0 &&
                        <tr>
                            <td><i className="fas fa-circle" />Rating</td>
                            <td>{game.rating.toFixed(1)} / 5</td>
                        </tr>
                    }

                    {/*game rating by metacritic*/}
                    {game.metacritic > 0 &&
                        <tr>
                            <td><i className="fas fa-circle" />Metacritic</td>
                            <td>{game.metacritic} / 100</td>
                        </tr>
                    }

                    {/*game platforms*/}
                    {game.platforms.length > 0 &&
                        <tr>
                            <td><i className="fas fa-circle" />Platforms</td>
                            <td>{game.platforms.map((el, num) => <span
                                key={`productionCompanies_${game.id}_${num}`}>
                                {el.platform.name}
                            </span>)}</td>
                        </tr>}

                </tbody>
            </GameFactsDesktop>
        </GamePosterContainerDesktop>}

        {/*game introduction - title, genres, rating, description*/}
        <GameIntroductionContainer>

            {/*game name*/}
            <GameTitle>{game.name}</GameTitle>

            {/*game premiere*/}
            {game.released !== null && <GamePremiere>{getReleaseDate(game.released)}</GamePremiere>}

            {/*game genres*/}
            <GameGenreList>
                {game.genres !== null && game.genres.map((el, num) => (
                    <li key={`game${num}_${game.id}_genre_${el.name}`}><Link
                        to={`/games-by-genre/${el.id}/${el.name}`}>{el.name}</Link></li>
                ))}
            </GameGenreList>

            {/*game rating by users*/}
            {game.rating !== 0 && <GameRating rating={(game.rating * 20)}  title='Average users rating'>
                <RatingIconWrapper>
                    <img src={userRating} alt="Users rating" />
                </RatingIconWrapper>
                <span />
                <RatingText>{game.rating.toFixed(1)}/5</RatingText>
            </GameRating>}

            {/*game rating by metacritic*/}
            {game.metacritic !== null &&
                <GameRatingMetacritic rating={game.metacritic} title='Metacritic rating'>
                    <RatingIconWrapper>
                        <img src={metacriticIcon} alt="Metacritic rating" />
                    </RatingIconWrapper>
                    <span />
                    <RatingText>{game.metacritic}/100</RatingText>
                </GameRatingMetacritic>}

            {/*description*/}
            {game.description_raw !== null && <GameDescription>{game.description_raw}</GameDescription>}
        </GameIntroductionContainer>
    </GameRow>
}