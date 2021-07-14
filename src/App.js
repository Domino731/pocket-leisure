import {PasswordReset} from "./components/user-form/PasswordReset";
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import {useEffect} from "react";
import {changeUser} from "./redux/actions/currentUser.action";
import {auth} from "./firebase/firebase";
import {Route} from "react-router";
// components
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import HomePage from "./components/homePage/HomePage";
import Movies from "./components/movies/Movies";
import {MoviesByGenre} from "./components/movies/MoviesByGenre";
import {Movie} from "./components/movies/Movie";
import {MovieSearch} from "./components/movies/MovieSearch";
import {OverwatchSearchProfile} from "./components/overwatch/OverwatchSearchProfile";
import {OverwatchStatistics} from "./components/overwatch/OverwatchStatistics";
import {OverwatchStatisticsCompetitive} from "./components/overwatch/OverwatchStatisticsCompetitive";
import {OverwatchStatisticsQuickPlay} from "./components/overwatch/OverwatchStatisticsQuickPlay";

function App({setUser}) {

    // when component mounted check the user is logged in,
    //it is very important because based on this, the privateRoute component
    // will  display a specific component(user logged in) or take the user to the login form(not logged in)
    useEffect(()=>{
        auth().onAuthStateChanged(user => {
            if (user) {
                // logged in
                setUser(user);
            } else {
                // not logged in
                setUser(null)
            }
        })
    },)

    return <Router>
        <Route exact path="/" component={HomePage}/>
        <Route path="/movies" component={Movies}/>
        <eRoute path="/movies-by-genre/:genre/:name" component={MoviesByGenre}/>
        <Route path="/movie/:id" component={Movie}/>
        <Route path="/movie/search" component={MovieSearch}/>
        <Route path="/overwatch-search-your-profile" component={OverwatchSearchProfile}/>
        <Route path="/overwatch/stats/:platform/:region/:user/:battleTag" component={OverwatchStatistics}/>
        <Route path="/overwatch/stats-competitive/:platform/:region/:user/:battleTag" component={OverwatchStatisticsCompetitive}/>
        <Route path="/overwatch/stats-quick-play/:platform/:region/:user/:battleTag" component={OverwatchStatisticsQuickPlay}/>
        <Route path="/password-reset" component={PasswordReset}/>


    </Router>

}
const mapDispatchToProps = dispatch => ({
    setUser: data => dispatch(changeUser(data))
})
export default connect(null, mapDispatchToProps)(App);
