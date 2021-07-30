# Pocket leisure

Application where you can search for your favorite movie or game and check your Overwatch statistics

## Technology

* Create React App
* React Redux
* Styled Components
* React Router
* Rawg Api
* TheMovieDb Api
* Ow-Api

## Components

* ### Games
    * Game - component which displays detailed information about the game: trailers, poster, facts, screenshots...
    * Games - main page on game section, displays popular games and games genres.
    * GamesListMain - list of popular games, sorted by metatacritic.
    * GamesGenres - list of games genres - action, adventure, fps, horror...
    * GameSearch - component by which user can find specific games.
    * GamesByGenre - list of games of specific genre.
    * GameSingle - Small box with game poster, title, platforms, ratings, and release date

* ### Movies
    * Movie - component which displays detailed information about the movie: trailers, poster, facts.
    * Movies - main page on movie section, displays popular movies and movies genres.
    * MoviesByCategory - list of games by specific category (default it is popular but user can change it to now
      playing, top rated, upcoming ).
    * MoviesCategorySingle - component with movie with poster, title, release date, used in MoviesByCategory
    * MoviesGenres - list of movie genres.
    * MovieSearch - component by which user can find specific movies.
    * MoviesByGenre - list of movies of specific genre.
    * MovieGenreSingle - component with movie with poster, title, release date, used in MoviesByCategory, rating,
      similar to MovieCategorySingle.

* ### Overwatch
    * OverwatchSearchProfile - form by which user can find his battle net account.
    * OverwatchStatistics - general statistics.
    * OverwatchStatisticsCompetitive - competitive statistics.
    * OverwatchStatisticsQuickPlay - quick play statistics.

* ### Home Page
    * HomePage - home page with links to specific section, and form by which user can change main color in app.

* ### Others
    * Loading - loading screen
    * NotFound404 - information about the 404 error and redirecting the user to a specific section
    


