import {url, apiKey} from "./constans";

/**
 * Fetch movies by category - pupular, top rated, now playing, upcoming
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
                // because genres are rendered automatically and are set by grid--template-areas,
                // so you need to add them after the genres names have spaces
                const genres = data.genres.map(el => ({...el, gridArea: el.name.replace(/\s+/g, '')}))
                successCallback(genres);
            }
        })
}

/**
 fetch movies by genre - horror movies, action...
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} genreId - id of genre that you want to fetch
 */
export const getMoviesByParticularGenre = (successCallback, genreId) => {

    // set loading screen
    successCallback(null)

    // get movies list with particular genre
    fetch(`${url}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        .then(r => r.json())
        .then(data => {
            if (data.total_results !== 0 && typeof successCallback === "function") {
                // sort by top rated
                const movies = data.results.sort((a, b) => b.vote_average - a.vote_average)
                successCallback(movies);
            }

            // genreId comes from url, when genre id is invalid set state, so the component will redirect user to main movies page ("/movies")
            if (data.total_results === 0) {
                successCallback(undefined)
            }
        })
        .catch(err => console.log(err));
}

/**
 * fetch more movies, and add them to state
 * @param {function} successCallback - Function that saves incoming data
 * @param {string} genreId - id of genre that you want to fetch
 * @param {number} pageNumber - number of page with movies that you want to fetch
 */
export const getMoreMovies = (successCallback, genreId, pageNumber) => {
    fetch(`${url}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${pageNumber}`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(prev => {

                    // add new movies to state
                    if (prev !== null && prev !== undefined) {
                        return [...prev, ...data.results]
                    }
                });
            }
        })
        .catch(err => console.log(err));
}

/**
 * fetch single movie - Black Widow, Space Jam...
 * @param {function} successCallback - Function that saves incoming data
 * @param {number} movieId - id of film that you want to get
 */
export const getSingleMovie = async (successCallback, movieId) => {

    // set loading screen
    successCallback(null)

    // get movie details
    await fetch(`${url}/movie/${movieId}?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                successCallback(data)
            }

            // movieId comes from url, when genre id is invalid set state, so the component will redirect user to main movies page ("/movies")
            if (data.success === false) {
                successCallback(undefined)
            }
        })
        .catch(err => console.log(err));

    // get movie credits and add them into state to the same state where movie details (successCallback)
    await fetch(`${url}/movie/${movieId}/credits?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                // getting the movie director
                const director = data.crew.filter(el => el.job === 'Director')
                const credits = {
                    id: data.id,
                    cast: data.cast,
                    director: director[0]
                }
                successCallback(prev => ({...prev, credits}))
            }

            // movieId comes from url, when genre id is invalid set state, so the component will redirect user to main movies page ("/movies")
            if (data.success === false) {
                successCallback("notFound")
            }
        })
        .catch(err => console.log(err));
}

/**
 * fetch videos for movie, only trailers from yt
 * @param {function} successCallback - Function that saves incoming data
 * @param {number} movieId - id of movie that you want to get
 */
export const getMovieVideos = async (successCallback, movieId) => {
    await fetch(`${url}/movie/${movieId}/videos?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function" && data !== undefined) {
                // get trailers from yt
                const videos = data.results.filter(el => el.type === "Trailer" && el.site === "YouTube")
                successCallback(videos)
            }

            // movieId comes from url, when genre id is invalid set state, so the component will redirect user to main movies page ("/movies")
            if (data.success === false) {
                successCallback("notFound")
            }
        })
        .catch(err => console.log(err));
}

/**
 * fetch similar movies
 * @param {function} successCallback - Function that saves incoming data
 * @param {number} movieId -  similar films will be downloaded from this id
 */
export const getSimilarMovies = async (successCallback, movieId) => {
    await fetch(`${url}/movie/${movieId}/similar?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                successCallback(data.results)
            }
            if (data.success === false) {
                successCallback("notFound")
            }
        })
        .catch(err => console.log(err));
}
/**
 *
 * fetch movies by title
 * @param {function} successCallback - Function that saves incoming data
 * @param {function} setLoadingCallback - set loading screen during fetching searched games
 * @param {string} name -  name of movie that you want to get
 */
export const searchMovieByTitle = async (successCallback, setLoadingCallback, name) => {

    // set state which is responsible for loading screen
    if (typeof setLoadingCallback === "function") {
        setLoadingCallback(true)
    }
    fetch(`${url}/search/movie?api_key=${apiKey}&query=${name}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                successCallback(data.results)
            }
        })
        .catch(err => console.log(err));

    // remove loading screen
    if (typeof setLoadingCallback === "function") {
        setLoadingCallback(false)
    }
}

/**
 * search movies by director
 * @param {function} successCallback - Function that saves incoming data
 * @param {function} setLoadingCallback - set loading screen during fetching searched games
 * @param {string} name -  name of director
 */
export const searchMovieByDirector = async (successCallback, setLoadingCallback, name) => {

    // set state which is responsible for loading screen
    if (typeof setLoadingCallback === "function") {
        setLoadingCallback(true)
    }
    fetch(`${url}/search/person?api_key=${apiKey}&query=${name}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                // getting all directors
                const allDirectors = data.results.filter(el => el.known_for_department === "Directing")
                let directors = []

                // films he directed
                allDirectors.map(el => directors.push(el.known_for))
                successCallback(directors[0])
            }
        })
        .catch(err => console.log(err))

    // remove loading screen
    if (typeof setLoadingCallback === "function") {
        setLoadingCallback(false)
    }
}


/**
 *
 * search movies by actor
 * @param {function} successCallback - Function that saves incoming data
 *  @param {function} setLoadingCallback - set loading screen during fetching searched games
 * @param {string} name -  name of actor
 */
export const searchMovieByActor = async (successCallback, setLoadingCallback, name) => {

    // set state which is responsible for loading screen
    if (typeof setLoadingCallback === "function") {
        setLoadingCallback(true)
    }
    fetch(`${url}/search/person?api_key=${apiKey}&query=${name}`)
        .then(r => r.json())
        .then(data => {
            if (typeof successCallback === "function") {
                // getting all actors
                const allActors = data.results.filter(el => el.known_for_department === "Acting")

                // movies in which he appears
                let actors = []
                allActors.map(el => actors.push(el.known_for))
                successCallback(actors[0])
            }
        })
        .catch(err => console.log(err))

    // remove loading screen
    if (typeof setLoadingCallback === "function") {
        setLoadingCallback(false)
    }
}