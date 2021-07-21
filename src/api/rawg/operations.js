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
                console.log(genres)
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
            if (data.error === undefined && typeof successCallback === "function") {

                const games = data.results.sort((a, b) => b.rating - a.rating)
                successCallback(games)
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
                successCallback(prev => [...prev, ...data.results]);
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
                console.log(data)
            }
            else{
                successCallback(undefined)
            }
        })
        .catch(err => console.log(err))
}