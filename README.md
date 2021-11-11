# Pocket leisure
An app where with library of games, movies and your overwatch statisctics. This project has also capability to choose one of 4 color themes 
## **Technology**
* React create app
* React - function components
* React Router
* React Redux
* JS6 
* Styled Components
* Ow-api - API responsible for overwatch statisctics
* Rawg API - responsible for games library
* TheMovieDb API - responsible for movies library

## **TheMovieDb API**
This API service is providing library with movies 


Link: https://www.themoviedb.org/?language=pl

***Available operations***
* `getMoviesByCategory()` - Fetch movies by category - pupular, top rated, now playing, upcoming
* `getMoviesGenre()` - fetch all movies genres - horror movies, action...
* `getMoviesByParticularGenre()` - fetch data about movies with specifi genre - horror movies, action...
* `getMoreMovies()` - fetch more movies
* `getSingleMovie()` - fetch data about specific movie - Black Widow, Space Jam...
* `getMovieCredits()` - fetch data about credits for movie
* `getMovieVideos()` -  fetch videos for movie, only from youtube
* `getSimilarMovies()` - fetch get similar movies
* `searchMovieByTitle()` - fetch movies by title
* `searchMovieByDirector()` - search movies by director
* `searchMovieByActor()` - search movies by actor
## **Rawg API**
API with games library 


Link: https://rawg.io/apidocs
***Available operations***
* `getGames()` - fetch games list sorted by metecritic rating
* `getGamesGenres()` - fetch list with available games genres
* `getGamesByGenrce()` - fetch games with specific genre - action, rpg, fps ...
* `getMoreGames()` -  fetch more games by genre,  and add them into state
* `getSearchedGame()` - fetch searched game - witcher3, doom, terraria.....
* `getGameDetails()` - fetch data about specific game 
* `getGameTrailers()` - fetch game trailers, some trailers may have another language than English
* `getGameScreenshots()` -  fetch game screenshots
* `getGameAdditions()` - fetch game dlc, GOTY, editions end other
* `getGameStores()` -  fetch game stores - steam, epic Games, origin .....
* `getGameSeries()` -  fetch list of games that are part of the same series. Series of gta 5 -> gta:chinatown wars, gta4, gta vice city :)

## **Ow-api**
Api with statistics for overwatch


Link: https://ow-api.com/docs/ 

***Operations***
* `validateOverwatchUser()` - This function checks the user have entered the correct information for his battleNet account
* `getOverwatchStats()` - This function is fetching user general stats
* `getOverwatchCompetitiveStats()` - This function is fetching complete user complete stats for competitive
* `getOverwatchQuickPlayStats()` - This function  is fetching  complete user complete stats for quick play,

## **Available functions**
* `getGamePlatformIcon()` -  get icon of game platform
* `getReleaseDate()` - format date 
* `sortGames()` - sort games by particular option
* `sortMovies()` - sort movies by particular option

## **Redux structure**
***State***
* `mainColor` - main color for app, at default it's red
***Actions***
* `changeMainColor` - change `mainColor` state with specific color
## **Local storage data structure**
* `mainColor` - app theme color

## **Components**
***General***
* `<NotFound/>`- Component responsible for handling 404 error
* `<Loading/>` - Loading screen
***Overwatch section***
* `<OverwatchSearchProfile/>` - Component which is responsible for searching battleNet user, and redirect him to his stats
* `<OverwatchStatistics/>` - Component with general overview for player stats
* `<OverwatchStatisticsCompetitive/>` - Component with full stats for competitive mode
* `<OverwatchStatisticsQuickPlay/>` - Component with full stats for quick play mode
***Movies section***
* `<Movies/>` - main movies component with movies list sorted by category and movie genres
* `<MoviesByCategory/>` - subcomponent for `<Movies/>` with list of movies
* `<MoviesGenres/>` - subcomponent for `<Movies/>`, which renders movie genres, and when user click on it,
 he will be redirected to `<MoviesByGenre/>` component, who will render all movies with that genre
 * `<MovieCategorySingle/>` - subcomponent for `<MoviesByCategory/>` with  movie title, release date, and  poster as link to single movie page with details
 * `<MovieSearch/>` - component where user can search movies
 * `<MoviesByGenre/>` - component with movies with specific genre
 * `<MovieGenreSingle/>` - subcomponent for `<MovieSearch/>` and `<MoviesByGenre/>`, with movie poster as link to single movie, title, release date and rating
 * `<Movie/>` - component with content for specific movie
 * `<MovieCast/>` - subcomponent for `<Movie/>`, with movie cast
 * `<MovieFacts/>` - subcomponent for `<Movie/>`, with table with movie details - producer, budget, country...
 * `<MovieIntroduction/>` - subcomponent for `<Movie/>`, with movie introduction
 * `<MoviePosterDesktop/>` - subcomponent for `<Movie/>`, which is rendering poster and table with movie facts -> director, ratings, time, relased data, budget...
 ***Games section***
 * `<Games/>` - component with popular games and list of games genres
 * `<GamesGenres/>`- subcomponent for `<Games/>`, with list of game genres
 * `<GamesListMain/>` - subcomponent for `<Games/>`, which is rendering list with popular games
 * `<GameSingle/>` - subcomponent for `<GameSearch/>`, `<GamesListMain/>` and `<GamesByGenre/>`, which is rendering box with content for single game - poster, platforms, premiere and ratings
 * `<GameSearch/>` - component where user can search for a specific game
 * `<GamesByGenre/>` - component which is rendering list of games by particular genre
 * `<Game/>` - component with content for a specific movie
 * `<GameAdditions/>` - subcomponent for `<Game/>`, including additions for the game - DLC, GOTY and others
 * `<GameFacts/>` - subcomponent for `<Game/>`, table with details about game - developer, publisher, budget...
 * `<GameIntroduction/>` - subcomponent for `<Game/>`, introduction for the game - rating, title, description...
 * `<GameScreenshots/>` - subcomponent for `<Game/>`, screenshots for the game
 * `<GameSeries/>` - subcomponent for `<Game/>`, including series of the particular game
 * `<GameStores/>` - subcomponent for `<Game/>`, list of stores where user can buy a game
 * `<GameTrailers/>` - subcomponent for `<Game/>`, trailers for the game




