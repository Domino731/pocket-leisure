import {getMoviesByParticularGenre, getMoreMovies} from "../../api/themoviedb/operations";
import {MovieGenreSingle} from "./MovieGenreSingle";
import {useEffect, useState} from "react";
import {sortMovies} from "../../functions/sortMovies";
// styles

import {Container, TitlePrimary, GetMoreBtn, CheckboxRadio} from "../../styled-components/general/general-styles";
import {MovieCategoryForm, MovieElementTitle} from "../../styled-components/elements/movie/movieCategory";

import {Loading} from "../loading/Loading";
import {NotFound404} from "../notFound/NotFound404";

export const MoviesByGenre = (props) => {
    // state with movies with specific genre
    const [movies, setMovies] = useState(undefined)

    // state  with a number, the increase of which (handleGetMore)will result in the download of 20 more films
    const [page, setPage] = useState(1)

    // flag which allows the user to toggle the film sorting form
    const [flag, setFlag] = useState(false)

    // by this string movies will be sorted
    const [sort, setSort] = useState("Top Rated")

    // when component mounted get movies
    useEffect(() => {
        getMoviesByParticularGenre(setMovies, props.match.params.genre)
    }, [props.match.params.genre])

    // when page state will change get more movies
    useEffect(() => {
        getMoreMovies(setMovies, props.match.params.genre, page)
    }, [page, props.match.params.genre])
    if (movies === undefined || movies.length === 0) {
        return null
    }

    // by this function user can fetch more movies, by increasing page state
    const handleGetMore = () => {
        setPage(prev => prev + 1)
    }

    // show sorting options
    const handleChangeFlag = () => {
        setFlag(!flag)
    }

    // sort movies
    const handleSortMovies = (e) => {

        // set the state so that the user know which option he selected
        setSort(e.target.value)
        sortMovies(e.target.value, setMovies)
        // when animation ended(0.5s) hide form
        setTimeout(() => {
            setFlag(false)
        }, 500)
    }


    if (movies === undefined) {
        return <Loading/>
    }
    if (movies === "notFound") {
        return <NotFound404 redirectUrl="/movies"/>
    }
        return <Container>

            <TitlePrimary>{props.match.params.name}</TitlePrimary>
            <MovieElementTitle onClick={handleChangeFlag}>{sort} <i className="fas fa-filter"/>
            </MovieElementTitle>
            {flag && <MovieCategoryForm>
                <CheckboxRadio>
                    <input type="radio" value="Top Rated" checked={sort === "Top Rated"}
                           onChange={handleSortMovies}/>
                    <label><i className="fas fa-long-arrow-alt-up"/>Top Rated</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Lowest-Rated" checked={sort === "Lowest-Rated"}
                           onChange={handleSortMovies}/>
                    <label><i className="fas fa-long-arrow-alt-down"/>Lowest-Rated</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Alphabetically A - Z" checked={sort === "Alphabetically A - Z"}
                           onChange={handleSortMovies}/>
                    <label><i className=" fas fa-sort-alpha-up"/>Alphabetically A - Z</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Alphabetically Z - A" checked={sort === "Alphabetically Z - A"}
                           onChange={handleSortMovies}/>
                    <label><i className="fas fa-sort-alpha-down-alt"/>Alphabetically Z - A</label>
                </CheckboxRadio>
            </MovieCategoryForm>}

            {movies.map((el, num) => <MovieGenreSingle movie={el}
                                                       key={`movieByGenre-${props.match.params.genre}-${num}`}/>)}
            <GetMoreBtn onClick={handleGetMore}>More</GetMoreBtn>
        </Container>
}