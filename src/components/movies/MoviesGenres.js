// component that renders movie genres, and when user click on it,
// it will redirect to MoviesByGenre component, who s render all movies with that category

import {Link} from "react-router-dom";
import {getMoviesGenres} from "../../api/themoviedb/operations";
// styles
import {Genre} from "../../styled-components/general/general-styles";
import {MovieGenresList} from "../../styled-components/elements/movie/movieGenre";
import {MovieElementTitle} from "../../styled-components/elements/movie/movieCategory";
import {useEffect, useState} from "react";

export const MoviesGenres = () => {

    // state with movies genres
    const [genres, setGenres] = useState([])

    // when component mounted get all films with specific genre
    useEffect(() => {
        getMoviesGenres(setGenres)
    }, [])

    return <section>
        <MovieElementTitle>Genres</MovieElementTitle>
        <MovieGenresList>
            {genres.map((el, num) => <Genre area={el.gridArea} key={`moviesByGenre_${num}`}><Link to={`/movies-by-genre/${el.id}/${el.name}`}>{el.name}</Link></Genre>)}
        </MovieGenresList>
    </section>
}