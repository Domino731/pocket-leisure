import {combineReducers} from "redux";
import {currentUser} from "./currentUser";
import {mainColor} from "./mainColor";

export default combineReducers({
    mainColor,
    currentUser
})