import {GamesElementTitle, GamesGenresList} from "../../styled-components/elements/games/games";
import {useEffect, useState} from "react";
import {getGamesGenres} from "../../api/rawg/operations";
import {Genre} from "../../styled-components/general/general-styles";
import {Link} from "react-router-dom";

export const GamesGenres = () => {

    // state with games genres
    const [gamesGenres, setGamesGenres] = useState(undefined)

    // when component mounted get all games genres
    useEffect(()=>{
        getGamesGenres(setGamesGenres)
    },[])

    if(gamesGenres === undefined){
        return null
    }
    return <section>
        <GamesElementTitle>Genres</GamesElementTitle>
        <GamesGenresList>
            {gamesGenres.map((el,num) => <Genre area={el.gridArea} key={`gamesByGenre_${num}`}><Link to={`/games-by-genre/${el.id}/${el.name}`}>{el.name}</Link></Genre>)}
        </GamesGenresList>
    </section>
}