import {getMoviesByParticularGenre, getMoreMovies} from "../../api/themoviedb/operations";
import {MovieGenreSingle} from "./MovieGenreSingle";
import {useEffect, useState} from "react";
import {sortMovies} from "../../functions/sortMovies";
import {Loading} from "../loading/Loading";
import {NotFound404} from "../notFound/NotFound404";
import {Container, TitlePrimary, GetMoreBtn, CheckboxRadio} from "../../styled-components/general/general-styles";
import {MovieCategoryForm, MovieElementTitle} from "../../styled-components/elements/movie/movieCategory";
import {MoviesList} from "../../styled-components/elements/movie/movie";

/**
 * @param props.match.params.genre {string} - id of movie genre, base on that movies will be download (comes from url)
 *  @param props.match.params.name {string} - name of movie genre, used to display title
 * @returns {JSX.Element|null} - movies by genre
 */
export const MoviesByGenre = (props) => {

    // state with movies with specific genre, base on this state list with movies will be rendered
    // by MovieGenreSingle component
    const [movies, setMovies] = useState(null)

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

    if (movies === null) {
        return <Loading/>
    }

    // if movie genre doesnt exist redirect user to /movies
    if (movies === undefined) {
        return <NotFound404 redirectUrl="/movies"/>
    }

    return <Container>

        {/*name of genre - action, horror, adventure*/}
        <TitlePrimary>{props.match.params.name}</TitlePrimary>

        {/*selected sorting option*/}
        <MovieElementTitle onClick={handleChangeFlag}>{sort} <i className="fas fa-filter"/>
        </MovieElementTitle>

        {/*change sorting*/}
        {flag && <MovieCategoryForm>

            {/*top rated*/}
            <CheckboxRadio>
                <label><i className="fas fa-long-arrow-alt-up"/>Top Rated
                    <input type="radio" value="Top Rated" checked={sort === "Top Rated"}
                           onChange={handleSortMovies} name="topRatedMovies"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*lowest rated*/}
            <CheckboxRadio>
                <label><i className="fas fa-long-arrow-alt-down"/>Lowest Rated
                    <input type="radio" value="Lowest Rated" checked={sort === "Lowest Rated"}
                           onChange={handleSortMovies} name="lowestRatedMovies"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*Alphabetically A - Z*/}
            <CheckboxRadio>
                <label><i className=" fas fa-sort-alpha-up"/>Alphabetically A - Z
                <input type="radio" value="Alphabetically A - Z" checked={sort === "Alphabetically A - Z"}
                       onChange={handleSortMovies} name="AZmovies"/>
                    <span/>
            </label>
            </CheckboxRadio>

            {/*Alphabetically Z - A*/}
            <CheckboxRadio>
                <label><i className="fas fa-sort-alpha-down-alt"/>Alphabetically Z - A
                <input type="radio" value="Alphabetically Z - A" checked={sort === "Alphabetically Z - A"}
                       onChange={handleSortMovies} name="ZAmovies"/>
                    <span/>
                </label>

            </CheckboxRadio>
        </MovieCategoryForm>}

        {/*rendering movies*/}
        <MoviesList>
            {movies.map((el, num) => <MovieGenreSingle movie={el}
                                                       key={`movieByGenre-${props.match.params.genre}-${num}`}/>)}
        </MoviesList>

        {/*when user click on this button, get more movies*/}
        <GetMoreBtn onClick={handleGetMore}>More</GetMoreBtn>
    </Container>
}