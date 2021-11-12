
import {
    ItemTitleSmall,
} from "../../styled-components/general/general-styles";
import {
    MovieActor,
    MovieKnowFor,
    MovieItemTitle,
    MovieActorPhotoMissing,
    MovieActorPhotoWrapper
} from "../../styled-components/elements/movie/movie";
import missingPhoto from "../../images/missing.svg";
import Carousel from "react-elastic-carousel";
import { CarouselArrow } from "../general/CorouselArrow";
import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * Component that rendering list (as a carousel) of movie cast
 * @param cast - data about movie cast 
 */
export const MovieCast = ({ cast }) => {

    /** breakpoints for carousel */
    const carouselBreakPoints = [
        { width: 320, itemsToShow: 2 },
        { width: 438, itemsToShow: 3 },
        { width: 646, itemsToShow: 4 },
        { width: 734, itemsToShow: 5 },
        { width: 995, itemsToShow: 6 },
        { width: 1136, itemsToShow: 7 },
        { width: 1261, itemsToShow: 8 },
        { width: 1427, itemsToShow: 9 },
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
                        <MovieActorPhotoWrapper >
                            <LazyLoadImage src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={el.name}/>
                        </MovieActorPhotoWrapper>
                        <ItemTitleSmall>{el.name}</ItemTitleSmall>
                        <MovieKnowFor>{el.character}</MovieKnowFor>
                    </MovieActor>
                    :
                    <MovieActor key={`cast_${num}`}>
                        <MovieActorPhotoMissing>
                            <LazyLoadImage src={missingPhoto} title='Actor doeans have his photo' alt='camera' />
                        </MovieActorPhotoMissing>
                        <ItemTitleSmall>{el.name}</ItemTitleSmall>
                        <MovieKnowFor>{el.character}</MovieKnowFor>
                    </MovieActor>
            ))}
        </Carousel>
    </div>
}