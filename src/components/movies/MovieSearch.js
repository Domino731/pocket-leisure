// By this component user can search for any movie that he wants
import {searchMovieByTitle} from "../../api/themoviedb/operations";
import {searchMovieByDirector} from "../../api/themoviedb/operations";
import {searchMovieByActor} from "../../api/themoviedb/operations";
import {MovieGenreSingle as SingleMovie} from "./MovieGenreSingle";
//styles
import {TitlePrimary} from "../../styled-components/general/general-styles";
import {FormElement} from "../../styled-components/elements/user-form/user-form";
import {CheckboxRadio, Container} from "../../styled-components/general/general-styles";
import {useEffect, useState} from "react";
import {MovieCategoryForm} from "../../styled-components/elements/movie/movieCategory";
import {MovieElementTitle} from "../../styled-components/elements/movie/movieCategory";
import { MoviesList} from "../../styled-components/elements/movie/movie";
import {Loading} from "../loading/Loading";


export const MovieSearch = () => {

    // state with movies
    const [movies, setMovies] = useState([])

    // based on this string, the function (handleChangeMovies) will return another function responsible for searching
    const [searchBy, setSearchBy] = useState("Movie title")

    const [loading, setLoading] = useState(false)
    // flag which allows the user to toggle the sorting options
    const [flag, setFlag] = useState(false)

    // search movie
    const handleChangeMovies = (e) => {
        switch (searchBy) {
            case "Movie name":
                return searchMovieByTitle(setMovies, setLoading,  e.target.value)
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
        <MovieElementTitle onClick={handleChangeFlag}>Search by {searchBy}<i
            className="fas fa-search"/></MovieElementTitle>
        {flag && true && <MovieCategoryForm>
            <CheckboxRadio>
                <input type="radio" value="Movie title" checked={searchBy === "Movie title"}
                       onChange={handleChangeSearchBy}/>
                <label>Movie title</label>
            </CheckboxRadio>
            <CheckboxRadio>
                <input type="radio" value="Actor" checked={searchBy === "Actor"}
                       onChange={handleChangeSearchBy}/>
                <label>Actor</label>
            </CheckboxRadio>
            <CheckboxRadio>
                <input type="radio" value="Director" checked={searchBy === "Director"}
                       onChange={handleChangeSearchBy}/>
                <label>Director</label>
            </CheckboxRadio>
        </MovieCategoryForm>}

        <FormElement>
            <i className="fas fa-search"/>
            <input type="text" onChange={handleChangeMovies}/>
        </FormElement>

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

