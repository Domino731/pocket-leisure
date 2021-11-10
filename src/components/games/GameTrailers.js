import { useState } from "react";
import {
    GameTrailersContainer,
    GameTrailer,
    GameMediaSwitch,
} from "../../styled-components/elements/games/specificGame";

/**
 * Component with game trailers
 * @param trailers - game trailers 
 */
export const GameTrailers = ({ trailers }) => {

    // state, which change, shows another trailer
    const [trailerIndex, setTrailerIndex] = useState(0);

    // increase trailerNumber state -> switch to previous trailer
    const handleDecreaseTrailerIndex = () => setTrailerIndex(prev => prev - 1);

    // decrease trailerNumber state -> switch to next trailer
    const handleIncreaseTrailerIndex = () => trailerIndex < trailers.length && setTrailerIndex(prev => prev + 1);

    return <GameTrailersContainer>
        <GameTrailer>
            <iframe title={`trailer`} src={trailers[trailerIndex].data.max} frameBorder="0"
                allowFullScreen />
        </GameTrailer>

        {/*switching between trailers*/}
        <GameMediaSwitch>
            {trailerIndex !== 0 && <button onClick={handleDecreaseTrailerIndex}>Previous</button>}
            {trailerIndex < trailers.length - 1 && <button onClick={handleIncreaseTrailerIndex}>Next</button>}
        </GameMediaSwitch>
    </GameTrailersContainer>
}