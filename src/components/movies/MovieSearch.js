import {searchMovieByTitle} from "../../api/themoviedb/operations";
import {searchMovieByDirector} from "../../api/themoviedb/operations";
import {searchMovieByActor} from "../../api/themoviedb/operations";
import {MovieGenreSingle as SingleMovie} from "./MovieGenreSingle";
import {useState} from "react";
import {Loading} from "../loading/Loading";
import {SearchInputContainer, TitlePrimary} from "../../styled-components/general/general-styles";
import {CheckboxRadio, Container} from "../../styled-components/general/general-styles";
import {MovieCategoryForm} from "../../styled-components/elements/movie/movieCategory";
import {MovieElementTitle} from "../../styled-components/elements/movie/movieCategory";
import {MoviesList} from "../../styled-components/elements/movie/movie";

/**
 * By this component user can search for any movie that he wants
 * @returns {JSX.Element} - search movies
 */
export const MovieSearch = () => {

    // state with movies, base on this state list with movies will by rendered by SingleMovie component
    const [movies, setMovies] = useState(null);

    // based on this string, the function (handleChangeMovies) will return another function responsible for searching
    const [searchBy, setSearchBy] = useState("Movie title");

    const [loading, setLoading] = useState(false);

    // flag which allows the user to toggle the sorting options
    const [flag, setFlag] = useState(false);

    // search movie by
    const handleChangeMovies = (e) => {
        switch (searchBy) {
            case "Movie name":
                return searchMovieByTitle(setMovies, setLoading, e.target.value);
            case "Director":
                return searchMovieByDirector(setMovies, setLoading, e.target.value);
            case "Actor":
                return searchMovieByActor(setMovies, setLoading, e.target.value);
            default:
                return searchMovieByTitle(setMovies, setLoading, e.target.value);
        }
    }

    // change flag state -> show sorting options
    const handleChangeFlag = () => setFlag(!flag);


    // change searching type
    const handleChangeSearchBy = (e) => {
        setSearchBy(e.target.value);

        // when animation ended(0.5s) hide form
        return setTimeout(() => {
            setFlag(false)
        }, 500);
    };

    return <Container>

        <TitlePrimary>Search</TitlePrimary>

        {/*search by option*/}
        <MovieElementTitle onClick={handleChangeFlag}>Search by {searchBy}<i
            className="fas fa-search"/></MovieElementTitle>

        {/*change search by*/}
        {flag && true && <MovieCategoryForm>

            {/*by movie title*/}
            <CheckboxRadio>
                <label>Movie title
                    <input type="radio" value="Movie title" checked={searchBy === "Movie title"}
                           onChange={handleChangeSearchBy} name="searchMovieByTitle"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*by actor*/}
            <CheckboxRadio>
                <label>Actor
                    <input type="radio" value="Actor" checked={searchBy === "Actor"}
                           onChange={handleChangeSearchBy} name="searchMovieByActor"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*by director*/}
            <CheckboxRadio>
                <label>Director
                    <input type="radio" value="Director" checked={searchBy === "Director"}
                           onChange={handleChangeSearchBy} name="searchMovieByDirector"/>
                    <spam/>
                </label>
            </CheckboxRadio>
        </MovieCategoryForm>}

        <SearchInputContainer>
            <i className="fas fa-search"/>
            <input type="text" onChange={handleChangeMovies} placeholder="Powered by TheMovieDb Api"/>
        </SearchInputContainer>

        {/*when component download searched movies, set loading screen */}
        {loading ?
            <Loading/>
            :
            <MoviesList>
                {movies &&
                movies.map((el, num) => <SingleMovie movie={el} key={`movieSearch_${el.id}_${num}`}/>)
                }
            </MoviesList>
        }

    </Container>
};

