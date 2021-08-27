import {useEffect, useState} from "react";
import {getGamesByGenre, getMoreGames} from "../../api/rawg/operations";
import {CheckboxRadio, Container, GetMoreBtn, TitlePrimary} from "../../styled-components/general/general-styles";
import {GameSingle} from "./GameSingle";
import {MovieElementTitle} from "../../styled-components/elements/movie/movieCategory";
import {GamesSortForm} from "../../styled-components/elements/games/games";
import {sortGames} from "../../functions/sortGames";
import {Loading} from "../loading/Loading";
import {NotFound404} from "../notFound/NotFound404";
import {GamesList} from "../../styled-components/elements/games/games";

/**
 *
 * @param props.match.params.id {string} - id of game genre, base on that games will be download (comes from url)
 * @param props.match.params.name {string} - name of game genre (comes from url)
 * @returns {JSX.Element} - list of games of specific genre
 */
export const GamesByGenre = (props) => {

    // state with games
    const [games, setGames] = useState(null)

    // state  with a number, the increase of which (handleGetMore)will result in the download of 20 more films
    const [page, setPage] = useState(2)

    //  // flag which allows the user to toggle the film sorting form
    const [sortFlag, setSortFlag] = useState(false)

    // by this string movies will be sorted
    const [sort, setSort] = useState("Users - Top Rated")

    // when component mounted get all games with this genre (from url)
    useEffect(() => {
        getGamesByGenre(setGames, props.match.params.id)
    }, [props.match.params])

    // when page state will change get more games
    useEffect(() => {
        getMoreGames(setGames, props.match.params.id, page)
    }, [page])

    const handleChangeFlag = () => setSortFlag(!sortFlag)


    // sort movies
    const handleSortGames = (e) => {
        // set the state so that the user know which option he selected
        setSort(e.target.value)
        sortGames(e.target.value, setGames)
        // when animation ended(0.5s) hide form
        setTimeout(() => {
            setSortFlag(false)
        }, 500)
    }

    // change page state, and by useEffect get more games
    const handleGetMore = () => {
        setPage(prev => prev + 1)
    }


    if (games === null) {
        return <Loading/>
    }

    // if movie genre doesnt exist redirect user to /games
    if (games === undefined) {
        return <NotFound404 redirectUrl="/games"/>
    }

    return <Container>

        {/*name of genre*/}
        <TitlePrimary>{props.match.params.name}</TitlePrimary>

        {/*selected sorting option*/}
        <MovieElementTitle onClick={handleChangeFlag}>{sort} <i className="fas fa-filter"/>
        </MovieElementTitle>

        {/*change sort*/}
        {sortFlag && <GamesSortForm>

            {/*top rated by users*/}
            <CheckboxRadio>
                <label><i className="fas fa-long-arrow-alt-up"/>Users - Top Rated
                    <input type="radio" value="Users - Top Rated" checked={sort === "Users - Top Rated"}
                           onChange={handleSortGames} name="usersTopRatedGames"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*lowest rated by users*/}
            <CheckboxRadio>
                <label><i className="fas fa-long-arrow-alt-down"/>Users - Lowest-Rated
                    <input type="radio" value="Users - Lowest Rated" checked={sort === "Users - Lowest Rated"}
                           onChange={handleSortGames} name="usersLowestRatedGames"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*top rated by metacritic*/}
            <CheckboxRadio>
                <label><i className="fas fa-long-arrow-alt-up"/>Metacritic - Top Rated
                    <input type="radio" value="Metacritic - Top Rated" checked={sort === "Metacritic - Top Rated"}
                           onChange={handleSortGames} name="metacriticTopRatedGames"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*lowest rated by metacritic*/}
            <CheckboxRadio>
                <label><i className="fas fa-long-arrow-alt-down"/>Metacritic - Lowest-Rated
                    <input type="radio" value="Metacritic - Lowest Rated" checked={sort === "Metacritic - Lowest Rated"}
                           onChange={handleSortGames} name="metacriticLowestRatedGames"/>
                    <span/>
                </label>


            </CheckboxRadio>

            {/*Alphabetically A - Z*/}
            <CheckboxRadio>
                <label><i className=" fas fa-sort-alpha-up"/>Alphabetically A - Z
                    <input type="radio" value="Alphabetically A - Z" checked={sort === "Alphabetically A - Z"}
                           onChange={handleSortGames} name="AZgames"/>
                    <span/>
                </label>
            </CheckboxRadio>

            {/*Alphabetically Z - A*/}
            <CheckboxRadio>
                <label><i className="fas fa-sort-alpha-down-alt"/>Alphabetically Z - A
                    <input type="radio" value="Alphabetically Z - A" checked={sort === "Alphabetically Z - A"}
                           onChange={handleSortGames} name="ZAgames"/>
                    <span/>
                </label>
            </CheckboxRadio>

        </GamesSortForm>}

        {/*rendering games*/}
        <GamesList>
            {games.map((el, num) => <GameSingle game={el} key={`game_single_byGenre_${num}_${el.slug}`}/>)}
        </GamesList>

        {/*when user click on this button get more games*/}
        <GetMoreBtn onClick={handleGetMore}>More</GetMoreBtn>
    </Container>
}