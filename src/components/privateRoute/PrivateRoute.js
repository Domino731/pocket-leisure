import {connect} from "react-redux";
import {Route} from "react-router";
import {UserForm} from "../user-form/User-form";

const PrivateRoute = ({user, component: Component, ...rest}) => {
    return <Route
        {...rest}
        render={props => {

            if (user === null) {
                return <UserForm/>
            } else if (user === undefined) {
                return null
            }
            else {
                return <Component {...props}/>
            }
        }}
    >
    </Route>
}
const mapStateToProps = state => ({
  user: state.currentUser
})
export default connect(mapStateToProps)(PrivateRoute)