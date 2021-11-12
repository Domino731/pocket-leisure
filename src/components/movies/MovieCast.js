
import {
    ItemTitleSmall,
} from "../../styled-components/general/general-styles";
import {
    MovieActor,
    MovieKnowFor,
    MovieItemTitle,
    MovieActorPhotoMissing,
    MovieActorPhoto
} from "../../styled-components/elements/movie/movie";
import missingPhoto from "../../images/missing.svg";
import Carousel from "react-elastic-carousel";
import { CarouselArrow } from "../general/CorouselArrow";

/**
 * Component that rendering list (as a carousel) of movie cast
 * @param cast - data about movie cast 
 */
export const MovieCast = ({ cast }) => {

    /** breakpoints for carousel */
    const carouselBreakPoints = [
        { width: 438, itemsToShow: 2 },
        { width: 646, itemsToShow: 3 },
        { width: 800, itemsToShow: 4 },
        { width: 965, itemsToShow: 5 },
        { width: 1121, itemsToShow: 6 },
        { width: 1283, itemsToShow: 7 },
        { width: 1528, itemsToShow: 8 },
    ]

    return <div>
        {/* title */}
        <MovieItemTitle>Cast</MovieItemTitle>

        {/* carousel with cast */}
        <Carousel
            breakPoints={carouselBreakPoints}
            renderArrow={(clickHandler) => <CarouselArrow direction={clickHandler.type} clickHandler={clickHandler.onClick}>asd</CarouselArrow>}>

            {/* rendering cast */}
            {cast.map((el, num) => (
                // check if profile photo exist
                el.profile_path !== null ?
                    <MovieActor key={`cast_${el.credit_id}_${num}`}>
                        <MovieActorPhoto src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name} />
                        <ItemTitleSmall>{el.name}</ItemTitleSmall>
                        <MovieKnowFor>{el.character}</MovieKnowFor>
                    </MovieActor>
                    :
                    <MovieActor key={`cast_${num}`}>
                        <MovieActorPhotoMissing>
                            <img src={missingPhoto} title='Actor doeans have his photo' alt='camera' />
                        </MovieActorPhotoMissing>
                        <ItemTitleSmall>{el.name}</ItemTitleSmall>
                        <MovieKnowFor>{el.character}</MovieKnowFor>
                    </MovieActor>
            ))}
        </Carousel>
    </div>
}