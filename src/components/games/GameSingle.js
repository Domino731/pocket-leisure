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
import missingPhoto from "../../images/missing.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * Box with content for single game - poster, platforms, premiere and ratings
 * @param game {object} - game details with poster path, name, platforms...
 */
export const GameSingle = ({ game }) => {
    return <GameSingleContainer>

        {/*link*/}
        <Link to={`/game/${game.id}`}>
            {game.background_image !== null ? 
            <GameSingleImg >
                <LazyLoadImage src={game.background_image} alt='Game poster'/>
            </GameSingleImg>
            :
             <GameMissingImg><LazyLoadImage src={missingPhoto} alt={game.name}/></GameMissingImg>   
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
            <GameSingleRating title='Users rating'>
                <i className="fas fa-star" /> <span>{game.rating.toFixed(1)}/5</span>
            </GameSingleRating>

            {/*rating by metacritic*/}
            <GameSingleRatingMetacritic title='Metacritic rating'>
                <LazyLoadImage src={metacriticIcon} alt="metacritic" />
                {game.metacritic !== null ? <span>{game.metacritic}/100</span> :
                    <span>No rating</span>
                }
            </GameSingleRatingMetacritic>

        </GameSingleRatingsBar>
    </GameSingleContainer>
};