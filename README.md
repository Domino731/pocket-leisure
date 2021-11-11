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
* `<NotFound/>`



