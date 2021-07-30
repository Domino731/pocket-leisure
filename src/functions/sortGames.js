/**
 * @param condition {string} condition: Users - Top Rated, Users - Lowest Rated, Metacritic - Top Rated,
 * Metacritic - Lowest-Rated, Alphabetically A - Z, Alphabetically Z - A
 * @param callback {function} - function that saves sorting data
 */
export const sortGames = (condition, callback) => {
    console.log(condition)
    if (typeof callback === "function") {
        switch (condition) {
            case "Users - Top Rated":
                callback(prev => prev.sort((a, b) => b.rating - a.rating))
                break;
            case "Users - Lowest Rated":
                callback(prev => prev.sort((a, b) => a.rating - b.rating))
                break;
            case "Metacritic - Top Rated":
                callback(prev => prev.sort((a, b) => b.metacritic - a.metacritic))
                break;
            case "Metacritic - Lowest Rated":
                callback(prev => prev.sort((a, b) => a.metacritic - b.metacritic))
                break;
            case"Alphabetically A - Z":
                callback(prev => prev.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                }))
                break;
            case"Alphabetically Z - A":
                callback(prev => prev.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                }))
                break;
            default:
                console.log("wrong condition")
        }
    }
}