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

export const GamesByGenre = (props) => {

    // state with games
    const [games, setGames] = useState(undefined)

    // state  with a number, the increase of which (handleGetMore)will result in the download of 20 more films
    const [page, setPage] = useState(1)

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
    }, [page, props.match.params])

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

    const handleGetMore = () => {
        setPage(prev => prev + 1)
    }

    if (games === undefined) {
        return <Loading/>
    } else if (games === "notFound") {
        return <NotFound404 redirectUrl="/games"/>
    } else {
        return <Container>

            <TitlePrimary>{props.match.params.name}</TitlePrimary>
            <MovieElementTitle onClick={handleChangeFlag}>{sort} <i className="fas fa-filter"/>
            </MovieElementTitle>
            {sortFlag && <GamesSortForm>
                <CheckboxRadio>
                    <input type="radio" value="Users - Top Rated" checked={sort === "Users - Top Rated"}
                           onChange={handleSortGames}/>
                    <label><i className="fas fa-long-arrow-alt-up"/>Users - Top Rated</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Users - Lowest-Rated" checked={sort === "Users - Lowest-Rated"}
                           onChange={handleSortGames}/>
                    <label><i className="fas fa-long-arrow-alt-down"/>Users - Lowest-Rated</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Metacritic - Top Rated" checked={sort === "Metacritic - Top Rated"}
                           onChange={handleSortGames}/>
                    <label><i className="fas fa-long-arrow-alt-up"/>Metacritic - Top Rated</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Metacritic - Lowest-Rated" checked={sort === "Metacritic - Lowest-Rated"}
                           onChange={handleSortGames}/>
                    <label><i className="fas fa-long-arrow-alt-down"/>Metacritic - Lowest-Rated</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Alphabetically A - Z" checked={sort === "Alphabetically A - Z"}
                           onChange={handleSortGames}/>
                    <label><i className=" fas fa-sort-alpha-up"/>Alphabetically A - Z</label>
                </CheckboxRadio>
                <CheckboxRadio>
                    <input type="radio" value="Alphabetically Z - A" checked={sort === "Alphabetically Z - A"}
                           onChange={handleSortGames}/>
                    <label><i className="fas fa-sort-alpha-down-alt"/>Alphabetically Z - A</label>
                </CheckboxRadio>
            </GamesSortForm>}

            <GamesList>
            {games.map((el, num) => <GameSingle game={el} key={`game_single_byGenre_${num}_${el.slug}`}/>)}
        </GamesList>

            <GetMoreBtn onClick={handleGetMore}>More</GetMoreBtn>
        </Container>
    }
}