/**
 * sort games by particular condition
 * @param condition {string} condition: Users - Top Rated, Users - Lowest Rated, Metacritic - Top Rated,
 * Metacritic - Lowest-Rated, Alphabetically A - Z, Alphabetically Z - A
 * @param callback {function} - function that saves sorting data
 */
export const sortGames = (condition, callback) => {
    console.log(condition)
    if (typeof callback === "function") {
        switch (condition) {
            case "Users - Top Rated":
                return callback(prev => prev.sort((a, b) => b.rating - a.rating));
            case "Users - Lowest Rated":
                return callback(prev => prev.sort((a, b) => a.rating - b.rating));
            case "Metacritic - Top Rated":
                return callback(prev => prev.sort((a, b) => b.metacritic - a.metacritic));
            case "Metacritic - Lowest Rated":
                return callback(prev => prev.sort((a, b) => a.metacritic - b.metacritic));

            case"Alphabetically A - Z":
                return callback(prev => prev.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                }));

            case"Alphabetically Z - A":
                return callback(prev => prev.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                }));

            default:
                return console.log("wrong condition");
        }
    }
};