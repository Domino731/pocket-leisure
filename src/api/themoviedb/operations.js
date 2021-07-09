const apiKey = "1780f0e5259eb8d6b75cd52b9621e80a"
const url = "https://api.themoviedb.org/3"







/**
 * Fetch movies by api path
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} category - category that you want to fetch - pupular, top rated...
 */
export const getMoviesByCategory = (successCallback, category) => {
    fetch(`${url}${category}?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                successCallback(data.results);
            }
        })
        .catch(err => console.log(err));
}







/**
 fetch all movies genres - horror movies, action...
 * @param {function} successCallback - Function that saves incoming data
 */
export const getMoviesGenres = (successCallback) => {
    fetch(`${url}/genre/movie/list?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {

                // we must add additional key(gridArea, which is genre name but with no with spaces) to each object
                // because species are rendered automatically and are set by grid--template-areas,
                // so you need to add them after the species names have spaces
                const genres = data.genres.map(el => ({...el, gridArea: el.name.replace(/\s+/g, '')}))
                successCallback(genres);

            }
        })
}

/**
 fetch all movies genres - horror movies, action...
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} genreId - id of genre that you want to fetch
 */
export const getMoviesByParticularGenre = (successCallback, genreId) => {
    fetch(`${url}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                // sort by top rated
                const movies = data.results.sort((a,b) => b.vote_average - a.vote_average)
                successCallback(movies);
            }
        })
        .catch(err => console.log(err));
}



/**
 * fetch additional movies
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} genreId - id of genre that you want to fetch
 * @param {number} pageNumber - number of page with movies that you want to fetch
 */
export const getMoreMovies = (successCallback, genreId, pageNumber) => {
    fetch(`${url}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${pageNumber}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                successCallback(prev => [...prev, ...data.results]);
            }
        })
        .catch(err => console.log(err));
}







/**
 * fetch single movie
 * @param {function} successCallback - Function that saves incoming data
 * @param {number} movieId - id of film that you want to get
 */
export const getSingleMovie = (successCallback ,movieId) => {
    fetch(`${url}/movie/${movieId}?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
               successCallback(data)
            }
        })
        .catch(err => console.log(err));
}






/**
 * fetch credits for particular movie
 * @param {function} successCallback - Function that saves incoming data
 * @param {number} movieId - id of film that you want to get
 */
export const getMovieCredits = (successCallback ,movieId) => {
    fetch(`${url}/movie/${movieId}/credits?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {

                // removing uncredited characters
                const cast = data.cast.filter(el => el.character.includes("(uncredited)") ? false : true)

                // getting the movie director
                const director = data.crew.filter(el => el.job === 'Director')
                const credits = {
                    id: data.id,
                    cast,
                    director: director[0]
                }
                successCallback(prev => ({...prev, credits}))
            }
        })
        .catch(err => console.log(err));
}





/**
 * fetch credits for particular movie
 * @param {function} successCallback - Function that saves incoming data
 * @param {number} movieId -  similar films will be downloaded from this id
 */
export const getSimilarMovies = (successCallback, movieId) => {
    fetch(`${url}/movie/${movieId}/similar?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
               successCallback(data.results)
            }
        })
        .catch(err => console.log(err));
}