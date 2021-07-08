import {Container} from "../../styled-components/general/general-styles";
import {MostPopularMovies} from "./MostPopularMovies";
// styles
import {Movie} from "../../styled-components/elements/movie/movieCategory";

const Movies = () => {

    return <Container>
        <Movie>
            <h1>Movies</h1>
            <MostPopularMovies/>
        </Movie>
    </Container>


}

export default Movies