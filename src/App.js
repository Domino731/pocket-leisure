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
    },[])

    return <Router>
        <PrivateRoute exact path="/" component={HomePage}/>
        <Route path="/password-reset" component={PasswordReset}/>
        <Route path="/movies" component={Movies}/>
    </Router>

}
const mapDispatchToProps = dispatch => ({
    setUser: data => dispatch(changeUser(data))
})
export default connect(null, mapDispatchToProps)(App);
