import { ItemTitleSmall} from "../../styled-components/general/general-styles";
import {
    GameItemTitle,
    GameAdditionsContainer,
    GameAddition,
} from "../../styled-components/elements/games/specificGame";
import {Link} from "react-router-dom";


/**
 * Component with carousel for game additions -> dlc, goty...
 * @param additions - available additions for the game
 */
export const GameAdditions = ({additions}) => {
    return <GameAdditionsContainer>
        <GameItemTitle>Additions</GameItemTitle>
        <div>

            {additions.map((el, num) => <GameAddition key={`gameAddition_${el.id}_${num}`}>

                {/*some additions dont have poster, if addition dont have replace with alternate poster*/}
                {el.background_image !== null ?

                    // have poster
                    <Link to={`/game/${el.id}`}><img src={el.background_image} alt="" /></Link>
                    :

                    //dont have poster
                    <Link to={`/game/${el.id}`}><strong><i className="fas fa-image" /></strong></Link>}
                <ItemTitleSmall>{el.name}</ItemTitleSmall>
            </GameAddition>)}

        </div>
    </GameAdditionsContainer>
}