/**
 * function that return main color who's saved in local storage
 * @returns {string}
 */
const getColorFromLocalStorage = () => {
    if (localStorage.getItem("mainColor") === null) {
        return "#e63946"
    } else {
        return localStorage.getItem("mainColor")
    }
}
/**
 * @returns {string|*} - main color in app
 */
export const mainColor = (state = getColorFromLocalStorage(), action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return action.mainColor

        default:
            return state
    }
}