import metacriticIcon from "../../images/768px-Metacritic.svg.png"
import {getGamePlatformIcon} from "../../functions/getGamePlatformIcon";
import {
    GameSingleContainer,
    GameSingleImg, GameSinglePlatform,
    GameSinglePlatforms, GameSingleRating, GameSingleRatingMetacritic, GameSingleRatingsBar, GameSingleReleased,
    GameSingleTitle, GameMissingImg
} from "../../styled-components/elements/games/games";
import {getReleaseDate} from "../../functions/getReleaseDate";
import {Link} from "react-router-dom";

export const GameSingle = ({game}) => {
    return <GameSingleContainer>

        <Link to={`/game/${game.id}`}>
            {game.background_image !== null ? <GameSingleImg src={game.background_image} alt={game.name}/> :
                <GameMissingImg><i className="fas fa-image"/></GameMissingImg>
            }
        </Link>

        <GameSingleTitle>{game.name}</GameSingleTitle>
        <GameSingleReleased>{getReleaseDate(game.released)}</GameSingleReleased>


        {game.parent_platforms !== undefined && <GameSinglePlatforms>
            {game.parent_platforms.map((el, num) => <GameSinglePlatform
                key={`${game.name}_${el.platform.slug}_${num}`}>{getGamePlatformIcon(el.platform.slug)}</GameSinglePlatform>)}
        </GameSinglePlatforms>}
        <GameSingleRatingsBar>
            <GameSingleRating>
                <i className="fas fa-star"/> <span>{game.rating.toFixed(1)}/5</span>
            </GameSingleRating>


            <GameSingleRatingMetacritic>
                <img src={metacriticIcon} alt="metacritic"/>
                {game.metacritic !== null ? <span>{game.metacritic}/100</span> :
                    <span>No score</span>
                }
            </GameSingleRatingMetacritic>

        </GameSingleRatingsBar>
    </GameSingleContainer>
}