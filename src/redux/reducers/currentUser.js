export const currentUser = (state = [], action) => {
    console.log(state)
    switch (action.type){
        case "CHANGE_USER":
            return action.currentUser

        default:
            return state
    }
}