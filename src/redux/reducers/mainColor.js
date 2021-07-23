const saveColorToLocalStorage = () => {
    if(localStorage.getItem("mainColor") === null){
        return "#e63946"
    }
    else{
        return localStorage.getItem("mainColor")
    }
}
export const mainColor = (state = saveColorToLocalStorage(), action) => {
    switch (action.type){
        case "CHANGE_COLOR":
            return action.mainColor

        default:
            return state
    }
}