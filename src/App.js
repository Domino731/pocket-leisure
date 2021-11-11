import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import {Route} from "react-router";
// components
import {ThemeProvider} from "styled-components";
import {theme} from "./styled-components/general/theme";
import HomePage from "./components/homePage/HomePage";
import Movies from "./components/movies/Movies";
import {MoviesByGenre} from "./components/movies/MoviesByGenre";
import {Movie} from "./components/movies/Movie";
import {MovieSearch} from "./components/movies/MovieSearch";
import {OverwatchSearchProfile} from "./components/overwatch/OverwatchSearchProfile";
import {OverwatchStatistics} from "./components/overwatch/OverwatchStatistics";
import {OverwatchStatisticsCompetitive} from "./components/overwatch/OverwatchStatisticsCompetitive";
import {OverwatchStatisticsQuickPlay} from "./components/overwatch/OverwatchStatisticsQuickPlay";
import {Games} from "./components/games/Games";
import {GamesByGenre} from "./components/games/GamesByGenre";
import {GameSearch} from "./components/games/GameSearch";
import {Game} from "./components/games/Game";
import {Reset} from "styled-reset";
import {GlobalStyle} from "./styled-components/general/globalStyle";
import { NotFound404 } from "./components/notFound/NotFound404";


function App({mainColor}) {
    return <ThemeProvider theme={theme(mainColor)}>
        <Reset/>
        <GlobalStyle/>
        <Router>
            <Route exact path="/" component={HomePage}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/movies-by-genre/:genre/:name" component={MoviesByGenre}/>
            <Route path="/movie/:id" component={Movie}/>
            <Route path="/movie-search" component={MovieSearch}/>
            <Route path="/overwatch-search-your-profile" component={OverwatchSearchProfile}/>
            <Route path="/overwatch/stats/:platform/:region/:user/:battleTag" component={OverwatchStatistics}/>
            <Route path="/overwatch/stats-competitive/:platform/:region/:user/:battleTag"
                   component={OverwatchStatisticsCompetitive}/>
            <Route path="/overwatch/stats-quick-play/:platform/:region/:user/:battleTag"
                   component={OverwatchStatisticsQuickPlay}/>
            <Route path="/games" component={Games}/>

            <Route path="/games-by-genre/:id/:name" component={GamesByGenre}/>
            <Route path="/game-search" component={GameSearch}/>
            <Route path="/game/:id" component={Game}/>
            <Route path="/test" component={NotFound404}/>
        </Router>
    </ThemeProvider>
}

const mapStateToProps = state => ({
    mainColor: state.mainColor
})
export default connect(mapStateToProps)(App);
