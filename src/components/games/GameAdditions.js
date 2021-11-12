import { ItemTitleSmall } from "../../styled-components/general/general-styles";
import {
    GameItemTitle,
    GameAdditionsContainer,
    GameAddition,
    GameAdditionGraphic,
    GameAdditionMissingGraphic,
} from "../../styled-components/elements/games/specificGame";
import { Link } from "react-router-dom";
import { CarouselArrow } from "../general/CorouselArrow";
import Carousel from "react-elastic-carousel";
import missingGraphic from "../../images/missing.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * Component with carousel for game additions -> dlc, goty...
 * @param additions - available additions for the game
 */
export const GameAdditions = ({ additions }) => {

    /** breakpoints for carousel */
    const carouselBreakPoints = [
        { width: 229, itemsToShow: 1 },
        { width: 338, itemsToShow: 2 },
        { width: 512, itemsToShow: 3 },
    ]

    return <GameAdditionsContainer>
        <GameItemTitle>Additions</GameItemTitle>
       
        <Carousel
            breakPoints={carouselBreakPoints}
            renderArrow={(clickHandler) => <CarouselArrow direction={clickHandler.type} clickHandler={clickHandler.onClick}>asd</CarouselArrow>}>
            {additions.map((el, num) => <GameAddition key={`gameAddition_${el.id}_${num}`}>

                {/*some additions dont have poster, if addition dont have replace with alternate poster*/}
                {el.background_image !== null ?

                    // have poster
                    <Link to={`/game/${el.id}`}>
                        <GameAdditionGraphic>
                            <LazyLoadImage  src={el.background_image} alt="Game poster" />
                        </GameAdditionGraphic>
                        
                        </Link>
                    :

                    //dont have poster
                    <Link to={`/game/${el.id}`}>
                        <GameAdditionMissingGraphic>
                        <LazyLoadImage  src={missingGraphic} title='Missing graphic' alt="Camera" />
                        </GameAdditionMissingGraphic>
                        </Link>}

                <ItemTitleSmall>{el.name}</ItemTitleSmall>
            </GameAddition>)}
</Carousel>
        
    </GameAdditionsContainer>
}