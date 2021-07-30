import {useState} from "react";
import {getMoviesByCategory} from "../../api/themoviedb/operations";
import {MovieCategorySingle} from "./MovieCategorySingle";
import {
    MovieCategory,
    MovieCategoryList,
    MovieElementTitle,
    MovieCategoryForm
} from "../../styled-components/elements/movie/movieCategory";
import {CheckboxRadio} from "../../styled-components/general/general-styles";

export const MoviesByCategory = ({moviesData}) => {

    // state with movies on the basis of which individual components are rendered
    const [movies, setMovies] = useState(moviesData)

    // state with flag which is used to switch between films and a
    // form where the user can select other films (e.g. latest)
    const [flag, setFlag] = useState(false)

    // state with string, by this user can fetch movies by another category - popular, now playing, top rated, upcoming
    const [category, setCategory] = useState("Popular")

    // switching between films and form
    const handleChangeFlag = () => {
        setFlag(!flag)
    }

    // changing  movies category
    const handleChangeCategory = (e, category) => {
        // get movies by category
        getMoviesByCategory(setMovies, category)

        // set selected category
        setCategory(e.target.value)

        // when animation ended(5s) hide form
        setTimeout(() => {
            setFlag(false)
        }, 500)
    }

    if (movies === undefined) {
        return null
    } else {
        return <MovieCategory>

            {/*selected category*/}
            <MovieElementTitle onClick={handleChangeFlag}>{category}<i
                className="fas fa-filter"/></MovieElementTitle>

            {/*rendering single movies*/}
            <MovieCategoryList>
                {flag === false && movies.map((el, num) => <MovieCategorySingle movie={el}
                                                                                key={`movieByCategory${num}`}/>)}

                {/*changing category*/}
                {flag && <MovieCategoryForm>

                    {/*popular*/}
                    <CheckboxRadio>
                        <input type="radio" value="Popular" checked={category === "Popular"}
                               onChange={(e) => handleChangeCategory(e, "/movie/popular")}/>
                        <label><i className="fas fa-fire"/>Popular</label>
                    </CheckboxRadio>

                    {/*now playing*/}
                    <CheckboxRadio>
                        <input type="radio" value="Now playing" checked={category === "Now playing"}
                               onChange={(e) => handleChangeCategory(e, "/movie/now_playing")}/>
                        <label><i className="fas fa-play"/>Now playing</label>
                    </CheckboxRadio>

                    {/*top rated*/}
                    <CheckboxRadio>
                        <input type="radio" value="Top rated" checked={category === "Top rated"}
                               onChange={(e) => handleChangeCategory(e, "/movie/top_rated")}/>
                        <label><i className="fas fa-star"/>Top rated</label>
                    </CheckboxRadio>

                    {/*upcoming*/}
                    <CheckboxRadio>
                        <input type="radio" value="Upcoming" checked={category === "Upcoming"}
                               onChange={(e) => handleChangeCategory(e, "/movie/upcoming")}/>
                        <label><i className="fas fa-calendar-day"/>Upcoming</label>
                    </CheckboxRadio>
                </MovieCategoryForm>}
            </MovieCategoryList>
        </MovieCategory>
    }
}
