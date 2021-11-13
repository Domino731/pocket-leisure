import {
    GameItemTitle,
    GameSeriesContainer,
    GameSeriesList,
    GameSeriesItem,
    GameSeriesMissing,
} from "../../styled-components/elements/games/specificGame";
import {Link} from "react-router-dom";
import missingGraphic from "../../images/missing.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * Component with list of game series
 * @param gameSeries - data about game series
 */
export const GameSeries = ({gameSeries}) => {
    return <GameSeriesContainer>
        <GameItemTitle>Game series</GameItemTitle>
        <GameSeriesList>
            {gameSeries.map((el, num) => <GameSeriesItem key={`gameSeries_${el.id}_${num}`}>
                <Link to={`/game/${el.id}`}>

                    {/*some game series dont have poster, if addition dont have replace with alternate poster*/}
                    {el.background_image !== null ?

                        // has poster
                        <LazyLoadImage src={el.background_image} alt={el.name} />
                        :
                        // dont have
                        <GameSeriesMissing>
                            <LazyLoadImage src={missingGraphic} title='Missing game poster' alt="Camera" />
                        </GameSeriesMissing>
                    }

                    <strong>{el.name}</strong>
                </Link>
            </GameSeriesItem>
            )}
        </GameSeriesList>
    </GameSeriesContainer>
}