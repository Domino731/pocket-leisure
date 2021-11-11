/**
 * REDUX ACTION - change mainColor state
 * @param color - hash color that you want to set
 * @returns 
 */
export const changeMainColor = color => ({
    type: "CHANGE_COLOR",
    mainColor: color
});