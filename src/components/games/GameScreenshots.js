import { useState } from "react";
import {
    GameScContainer,
    GameMediaSwitch,
} from "../../styled-components/elements/games/specificGame";

/**
 * Component with screenshots for game
 * @param screenshots - data about game screenshots
 */
export const GameScreenshots = ({ screenshots }) => {

       // state, which change, shows another screenshot
       const [scIndex, setScIndex] = useState(0);

     //  decrease scIndex state -> switch to previous screenshot
     const handleDecreaseScIndex = () => setScIndex(prev => prev - 1);

     // increase scIndex state -> switch to next screenshot
     const handleIncreaseScIndex = () => {
         if (scIndex < screenshots.length) {
             return setScIndex(prev => prev + 1);
         }
     }

    return <GameScContainer>
            <img src={screenshots[scIndex].image} alt={`Game screenshot`} />
            {/*switching between screenshots*/}
            <GameMediaSwitch>
                {scIndex !== 0 && <button onClick={handleDecreaseScIndex}>Previous</button>}
                {scIndex < screenshots.length - 1 && <button onClick={handleIncreaseScIndex}>Next</button>}
            </GameMediaSwitch>
    </GameScContainer>
    
}