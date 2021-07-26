const url = "https://api.rawg.io/api"
const apiKey = "bf73a9fb5bc04232a685ada6d1349061"

/**
 fetch games list sorted by metecritic grade
 * @param {function} successCallback - Function that saves incoming data
 */
export const getGames = (successCallback) => {
    fetch(`${url}/games?key=${apiKey}&page_size=10&metacritic`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            }
        })
        .catch(err => console.log(err))
}


/**
 fetch games genres
 * @param {function} successCallback - Function that saves incoming data
 */
export const getGamesGenres = (successCallback) => {
    fetch(`${url}/genres?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {

                // we must add additional key(gridArea, which is genre name but with no with spaces) to each object
                // because species are rendered automatically and are set by grid--template-areas,
                // so you need to add them after the species names have spaces
                const genres = data.results.map(el => ({...el, gridArea: el.name.toLowerCase().replace(/\s+/g, '')}))
                successCallback(genres)
            }
        })
        .catch(err => console.log(err))
}

/**
 fetch games by genre - action, rpg, fps ...
 * @param {function} successCallback - Function that saves incoming data
 * @param {string, number} genreId - id of genre that you want to fetch
 */
export const getGamesByGenre = (successCallback, genreId) => {
    fetch(`${url}/games?key=${apiKey}&page_size=10&genres=${genreId}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && data.results.length > 0 && typeof successCallback === "function") {

                const games = data.results.sort((a, b) => b.rating - a.rating)
                successCallback(games)
            }
            else {
                successCallback("notFound")
            }
        })
        .catch(err => console.log(err))
}

/**
 fetch games by genre - action, rpg, fps ...
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
                    if(prev !== undefined && prev !== "notFound"){
                        return [...prev, ...data.results]
                    }
                });
            }
        })
        .catch(err => console.log(err))
}


/**
 fetch games by genre - action, rpg, fps ...
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} game - name of game that you want to get
 */
export const getSearchedGame = (successCallback, game) => {
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
}


/**
 fetch specific game - witcher 3, gta 5, minecraft.....
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - name of game that you want to get
 */
export const getGameDetails = (successCallback, gameId) => {
    fetch(`${url}/games/${gameId}?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (data.detail !== "Not found." && typeof successCallback === "function") {
                successCallback(data)
            }
            if(data.detail === "Not found."){
                successCallback("notFound")
            }

        })
        .catch(err => console.log(err))
}

/**
 fetch game trailers - action, rpg, fps ...
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - name of game that you want to get
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
 fetch game screenshots - action, rpg, fps ...
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - name of game that you want to get
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
 * @param {string} gameId - name of game that you want to get
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
 fetch game stores - steam, epicgames, origin .....
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - name of game that you want to get
 */
export const getGameStores = (successCallback, gameId) => {
    fetch(`${url}/games/${gameId}/stores?key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            console.log(data.results)
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data.results)
            } else {
                successCallback(undefined)
            }
        })
}

/**
 fetch list of games that are part of the same series
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} gameId - name of game that you want to get
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