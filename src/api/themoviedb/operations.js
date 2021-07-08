 const apiKey = "1780f0e5259eb8d6b75cd52b9621e80a"
 const url = "https://api.themoviedb.org/3"
/**
 * Fetch movies in category
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} category - category that you want to fetch - pupular, top rated...
 */
export const getMoviesByCategory = ( successCallback,category)  => {
    fetch(`${url}${category}?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                successCallback(data.results);
            }
        })
        .catch(err => console.log(err));
}
