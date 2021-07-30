import {searchMovieByTitle} from "../../api/themoviedb/operations";
import {searchMovieByDirector} from "../../api/themoviedb/operations";
import {searchMovieByActor} from "../../api/themoviedb/operations";
import {MovieGenreSingle as SingleMovie} from "./MovieGenreSingle";
import {useState} from "react";
import {Loading} from "../loading/Loading";
import {TitlePrimary} from "../../styled-components/general/general-styles";
import {FormElement} from "../../styled-components/elements/user-form/user-form";
import {CheckboxRadio, Container} from "../../styled-components/general/general-styles";
import {MovieCategoryForm} from "../../styled-components/elements/movie/movieCategory";
import {MovieElementTitle} from "../../styled-components/elements/movie/movieCategory";
import {MoviesList} from "../../styled-components/elements/movie/movie";

/**
 * By this component user can search for any movie that he wants
 * @returns {JSX.Element} - search movies
 */
export const MovieSearch = () => {

    // state with movies
    const [movies, setMovies] = useState([])

    // based on this string, the function (handleChangeMovies) will return another function responsible for searching
    const [searchBy, setSearchBy] = useState("Movie title")

    const [loading, setLoading] = useState(false)
    // flag which allows the user to toggle the sorting options
    const [flag, setFlag] = useState(false)

    // search movie by
    const handleChangeMovies = (e) => {
        switch (searchBy) {
            case "Movie name":
                return searchMovieByTitle(setMovies, setLoading, e.target.value)
            case "Director":
                return searchMovieByDirector(setMovies, setLoading, e.target.value)
            case "Actor":
                return searchMovieByActor(setMovies, setLoading, e.target.value)
            default:
                return searchMovieByTitle(setMovies, setLoading, e.target.value)
        }
    }

    //show sorting options
    const handleChangeFlag = () => {
        setFlag(!flag)
    }

    // change searching type
    const handleChangeSearchBy = (e) => {
        setSearchBy(e.target.value)
        setTimeout(() => {
            setFlag(false)
        }, 500)
    }

    return <Container>

        <TitlePrimary>Search</TitlePrimary>

        {/*search by option*/}
        <MovieElementTitle onClick={handleChangeFlag}>Search by {searchBy}<i
            className="fas fa-search"/></MovieElementTitle>

        {/*change search by*/}
        {flag && true && <MovieCategoryForm>

            {/*by movie title*/}
            <CheckboxRadio>
                <input type="radio" value="Movie title" checked={searchBy === "Movie title"}
                       onChange={handleChangeSearchBy}/>
                <label>Movie title</label>
            </CheckboxRadio>

            {/*by actor*/}
            <CheckboxRadio>
                <input type="radio" value="Actor" checked={searchBy === "Actor"}
                       onChange={handleChangeSearchBy}/>
                <label>Actor</label>
            </CheckboxRadio>

            {/*by director*/}
            <CheckboxRadio>
                <input type="radio" value="Director" checked={searchBy === "Director"}
                       onChange={handleChangeSearchBy}/>
                <label>Director</label>
            </CheckboxRadio>
        </MovieCategoryForm>}

        <FormElement>
            <i className="fas fa-search"/>
            <input type="text" onChange={handleChangeMovies} placeholder="Powered by TheMovieDb Api"/>
        </FormElement>

        {/*when component download searched movies, set loading screen */}
        {loading ?
            <Loading/>
            :
            <MoviesList>
                {movies !== undefined &&
                movies.map((el, num) => <SingleMovie movie={el} key={`movieSearch_${el.id}_${num}`}/>)
                }
            </MoviesList>
        }

    </Container>
}

