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
            if(data.error === undefined && typeof successCallback === "function"){
                successCallback(data.results)
            }
        })
        .catch(err => console.log(err))
}