import {useState} from "react";
import {getMoviesByCategory} from "../../api/themoviedb/operations";
import {MovieCategorySingle} from "./MovieCategorySingle";
import {
    MovieCategory,
    MovieCategoryList,
    MovieElementTitle,
    MovieCategoryForm
} from "../../styled-components/elements/movie/movieCategory";
import {ActionButtonWrapper, CheckboxRadio} from "../../styled-components/general/general-styles";

/**
 * Component with list of movies
 * @param moviesData - data about movies
 */
export const MoviesByCategory = ({moviesData}) => {

    // state with movies on the basis of which individual components are rendered
    const [movies, setMovies] = useState(moviesData);

    // state with flag which is used to toggle form
    const [flag, setFlag] = useState(false);

    // state with string, by this user can fetch movies by another category - popular, now playing, top rated, upcoming
    const [category, setCategory] = useState("Popular");

    // switching between films and form
    const handleChangeFlag = () => setFlag(!flag);


    // changing  movies category
    const handleChangeCategory = (e, category) => {
        // get movies by category
        getMoviesByCategory(setMovies, category);

        // set selected category
        setCategory(e.target.value);

        // when animation ends (5s) then hide form
        return setTimeout(() => {
            setFlag(false);
        }, 500);
    };


    return <MovieCategory>

        {/*selected category*/}
        <ActionButtonWrapper>
            <button onClick={handleChangeFlag} title='Change movies category'>
                <i
            className="fas fa-filter"/>{category}
             </button>
        </ActionButtonWrapper>

        {/*rendering single movies*/}
        <MovieCategoryList>

            {/*changing category*/}
             { flag && <MovieCategoryForm>

                {/*popular*/}
                <CheckboxRadio>

                    <label><i className="fas fa-fire"/>Popular
                        <input type="radio" value="Popular" checked={category === "Popular"}
                               onChange={(e) => handleChangeCategory(e, "/movie/popular")} name="popularMovies"/>
                        <span/>
                    </label>
                </CheckboxRadio>

                {/*now playing*/}
                <CheckboxRadio>

                    <label><i className="fas fa-play"/> Now playing
                        <input type="radio" value="Now playing" checked={category === "Now playing"}
                               onChange={(e) => handleChangeCategory(e, "/movie/now_playing")}
                               name="nowPlayingMovies"/>
                        <span/>
                    </label>
                </CheckboxRadio>

                {/*top rated*/}
                <CheckboxRadio>
                    <label><i className="fas fa-star"/>Top rated
                        <input type="radio" value="Top rated" checked={category === "Top rated"}
                               onChange={(e) => handleChangeCategory(e, "/movie/top_rated")} name="topRatedMovies"/>
                        <span/>
                    </label>
                </CheckboxRadio>

                {/*upcoming*/}
                <CheckboxRadio>
                    <label><i className="fas fa-calendar-day"/>Upcoming
                        <input type="radio" value="Upcoming" checked={category === "Upcoming"}
                               onChange={(e) => handleChangeCategory(e, "/movie/upcoming")} name="upcomingMovies"/>
                        <span/>
                    </label>
                </CheckboxRadio>
            </MovieCategoryForm>}

            {movies.map((el, num) => <MovieCategorySingle movie={el} key={`movieByCategory${num}`}/>)}
                                                                        
        </MovieCategoryList>
        
    </MovieCategory>
};
