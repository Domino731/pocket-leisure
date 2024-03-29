import { apiKey } from "./constans";
import { url } from "./constans";

/**
* fetch games list sorted by metecritic rating
 * @param {function} successCallback - Function that saves incoming data
 */
export const getGames = (successCallback) => {
    fetch(`${url}/games?key=${apiKey}&page_size=12&metacritic`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                return successCallback(data.results);
            }
        })
        .catch(err => console.log(err));
};

/**
 * fetch list with available games genres
 * @param {function} successCallback - Function that saves incoming data
 */
export const getGamesGenres = (successCallback) => {
    fetch(`${url}/genres?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {

                // add additional key(gridArea, which is genre name but with no with spaces) to each object
                // because genrces boxes are rendered automatically and are set by grid-template-areas,
                // so you need to add them after the species names have spaces
                const genres = data.results.map(el => ({ ...el, gridArea: el.name.toLowerCase().replace(/\s+/g, '') }));
                return successCallback(genres);
            }
        })
        .catch(err => console.log(err));
};

/**
 fetch games with specific genre - action, rpg, fps ...
 * @param {function} successCallback - Function that saves incoming data
 * @param {string, number} genreId - id of genre that you want to fetch
 */
export const getGamesByGenre = (successCallback, genreId) => {

    // set loading screen
    successCallback(null);

    // get the games and save them into state (successCallback function)
    fetch(`${url}/games?key=${apiKey}&page_size=12&genres=${genreId}`)
        .then(r => r.json())
        .then(data => {
            // check if genre exists
            if (data.error === undefined && data.results.length > 0 && typeof successCallback === "function") {

                // sort by rating by users
                const games = data.results.sort((a, b) => b.rating - a.rating);
                return successCallback(games);
            }

            // when particular generce doesnt exist then return undefined -> component will handle this by returning <Error404/> component
            else {
                return successCallback(undefined);
            }
        })
        .catch(err => console.log(err));
};

/**
 fetch more games by genre,  and add them into state
 * @param {function} successCallback - Function that saves incoming data
 * @param {string, number} genreId - id of genre that you want to fetch
 * @param {string, number} pageNumber - number of page with games that you want to fetch
 */
export const getMoreGames = (successCallback, genreId, pageNumber) => {
    fetch(`${url}/games?key=${apiKey}&page_size=20&genres=${genreId}&page=${pageNumber}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(prev => {

                    // add new games to state
                    if (prev !== null && prev !== undefined) {
                        return [...prev, ...data.results];
                    }
                });
            }
        })
        .catch(err => console.log(err));
};


/**
 fetch searched game - witcher3, doom, terraria.....
 * @param {function} successCallback - Function that saves incoming data
 * @param {function} setLoadingCallback - set loading screen during fetching searched games
 * @param {string} game - name of game that you want to get
 */
export const getSearchedGame = async (successCallback, setLoadingCallback, game) => {

    // set state which is responsible for loading screen
    if (typeof setLoadingCallback === "function") {
        setLoadingCallback(true);
    }

    fetch(`${url}/games?key=${apiKey}&search=${game}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            } else {
                successCallback(undefined)
            }
        })
        .catch(err => console.log(err))

    // when searched games was found, remove loading screen
    if (typeof setLoadingCallback === "function") {
        return setLoadingCallback(false)
    }
}

/**
 fetch data about specific game 
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - id of game that you want to get
 */
export const getGameDetails = (successCallback, gameId) => {

    // set loading screen
    successCallback(null)

    // get the specific game
    fetch(`${url}/games/${gameId}?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.detail !== "Not found." && typeof successCallback === "function") {
                successCallback(data)
            }
            if (data.detail === "Not found.") {
                successCallback(undefined)
            }
        })
        .catch(err => console.log(err))
}

/**
 fetch game trailers, some trailers may have another language than English
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - id of game that you want to get
 */
export const getGameTrailers = (successCallback, gameId) => {
    fetch(`${url}/games/${gameId}/movies?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            } else {
                successCallback(undefined)
            }
        })
        .catch(err => console.log(err))
}

/**
 fetch game screenshots
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - id of game that you want to get
 */
export const getGameScreenshots = (successCallback, gameId) => {
    fetch(`${url}/games/${gameId}/screenshots?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            }
        })
        .catch(err => console.log(err))
}

/**
 fetch game dlc, GOTY, editions end other
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - id of game that you want to get
 */
export const getGameAdditions = (successCallback, gameId) => {
    fetch(`${url}/games/${gameId}/additions?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            } else {
                successCallback(undefined)
            }
        })
}


/**
 fetch game stores - steam, epic Games, origin .....
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - id of game that you want to get
 */
export const getGameStores = (successCallback, gameId) => {
    fetch(`${url}/games/${gameId}/stores?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            } else {
                successCallback(undefined)
            }
        })
}

/**
 fetch list of games that are part of the same series. Series of gta 5 -> gta:chinatown wars, gta4, gta vice city :)
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - id of game that you want to get
 */
export const getGameSeries = (successCallback, gameId) => {
    fetch(`${url}/games/${gameId}/game-series?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            } else {
                successCallback(undefined)
            }
        })
}