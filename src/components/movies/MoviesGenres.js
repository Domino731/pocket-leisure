import { Link } from "react-router-dom";
import { Genre, SectionTitle } from "../../styled-components/general/general-styles";
import { MovieGenresList } from "../../styled-components/elements/movie/movieGenre";

/**
 * component that renders movie genres, and when user click on it,
 * he will be redirected to MoviesByGenre component, who will render all movies with that genre
 * @param movieGenresData {array}- movie genres
 */
export const MoviesGenres = ({ movieGenresData }) => {
    return <section>
        <SectionTitle>Genres</SectionTitle>

        {/*rendering movie genres*/}
        <MovieGenresList>
            {movieGenresData.map((el, num) => <Genre area={el.gridArea} key={`moviesByGenre_${num}`}><Link
                to={`/movies-by-genre/${el.id}/${el.name}`}>{el.name}</Link></Genre>)}
        </MovieGenresList>
    </section>
};