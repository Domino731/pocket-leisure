import metacriticIcon from "../../images/768px-Metacritic.svg.png"
import {
    GameSingleContainer,
    GameSingleImg, GameSinglePlatform,
    GameSinglePlatforms, GameSingleRating, GameSingleRatingMetacritic, GameSingleRatingsBar, GameSingleReleased,
    GameSingleTitle
} from "../../styled-components/elements/games/games";
import {getReleaseDate} from "../../functions/getReleaseDate";

export const GameSingle = ({game}) => {
    return <GameSingleContainer>
        <GameSingleImg src={game.background_image} alt={game.name}/>
        <GameSingleTitle>{game.name}</GameSingleTitle>
        <GameSingleReleased>{getReleaseDate(game.released)}</GameSingleReleased>
        <GameSinglePlatforms>
            {game.platforms.map((el,num) => <GameSinglePlatform>{el.platform.name}</GameSinglePlatform>)}
        </GameSinglePlatforms>
        <GameSingleRatingsBar>
           <GameSingleRating>
               <i className="fas fa-star"/> <span>{game.rating.toFixed(1)}/5</span>
           </GameSingleRating>

           <GameSingleRatingMetacritic>
               <img src={metacriticIcon} alt="metacritic"/><span>{game.metacritic}/100</span>
           </GameSingleRatingMetacritic>

        </GameSingleRatingsBar>
    </GameSingleContainer>
}