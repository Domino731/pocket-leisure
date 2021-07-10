import {Container} from "../../styled-components/general/general-styles";
import {MoviesByCategory} from "./MoviesByCategory";
import {MoviesGenres} from "./MoviesGenres";
import {Link} from "react-router-dom";
// styles
import {Movie} from "../../styled-components/elements/movie/movieCategory";
import {TitlePrimary, TitleBar} from "../../styled-components/general/general-styles";

const Movies = () => {

    return <Container>
        <Movie>

            <TitleBar><TitlePrimary>Movies</TitlePrimary> <Link to="movie/search"><i className="fas fa-search"/></Link></TitleBar>
            <MoviesByCategory/>
            <MoviesGenres/>
        </Movie>
    </Container>


}

export default Movies