import metacriticIcon from "../../images/768px-Metacritic.svg.png"
import { getGamePlatformIcon } from "../../functions/getGamePlatformIcon";
import {
    GameSingleContainer,
    GameSingleImg, GameSinglePlatform,
    GameSinglePlatforms, GameSingleRating, GameSingleRatingMetacritic, GameSingleRatingsBar, GameSingleReleased,
    GameSingleTitle, GameMissingImg, GameSingleTitleScale
} from "../../styled-components/elements/games/games";
import { getReleaseDate } from "../../functions/getReleaseDate";
import { Link } from "react-router-dom";

/**
 * Box with games - poster, platforms, premiere and ratings
 * @param game {object} - game details with poster path, name, platforms...
 */
export const GameSingle = ({ game }) => {
    return <GameSingleContainer>

        {/*link*/}
        <Link to={`/game/${game.id}`}>
            {game.background_image !== null ? <GameSingleImg src={game.background_image} alt={game.name} /> :
                <GameMissingImg><i className="fas fa-image" /></GameMissingImg>
            }
        </Link>

        {/* title and release data*/}
        <GameSingleTitleScale>
            <GameSingleTitle>{game.name}</GameSingleTitle>
            <GameSingleReleased>{getReleaseDate(game.released)}</GameSingleReleased>
        </GameSingleTitleScale>

        {/*platforms*/}
        {game.parent_platforms !== undefined && <GameSinglePlatforms>
            {game.parent_platforms.map((el, num) => <GameSinglePlatform
                key={`${game.slug}_${el.platform.slug}_${num}`}>{getGamePlatformIcon(el.platform.slug)}</GameSinglePlatform>)}
        </GameSinglePlatforms>}

        {/* ratings */}
        <GameSingleRatingsBar>

            {/*rating by users*/}
            <GameSingleRating>
                <i className="fas fa-star" /> <span>{game.rating.toFixed(1)} / 5</span>
            </GameSingleRating>

            {/*rating by metacritic*/}
            <GameSingleRatingMetacritic>
                <img src={metacriticIcon} alt="metacritic" />
                {game.metacritic !== null ? <span>{game.metacritic}/100</span> :
                    <span>No score</span>
                }
            </GameSingleRatingMetacritic>

        </GameSingleRatingsBar>
    </GameSingleContainer>
};