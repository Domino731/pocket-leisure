import {Container} from "../../styled-components/general/general-styles";
import {MoviesByCategory} from "./MoviesByCategory";
import {MoviesGenres} from "./MoviesGenres";
// styles
import {Movie} from "../../styled-components/elements/movie/movieCategory";
import {TitlePrimary} from "../../styled-components/general/general-styles";

const Movies = () => {

    return <Container>
        <Movie>
            <TitlePrimary>Movies</TitlePrimary>
            <MoviesByCategory/>
            <MoviesGenres/>
        </Movie>
    </Container>


}

export default Movies