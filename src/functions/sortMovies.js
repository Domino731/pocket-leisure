/**
 * sort movies by particular option
 * @param condition {Top Rated, Lowest Rated, Alphabetically A - Z, Alphabetically Z - A}
 * @param callback {function} - function that saves sorting data
 */
export const sortMovies = (condition, callback) => {
    if (typeof callback === "function") {
        switch (condition) {
            case "Top Rated":
                return callback(prev => prev.sort((a, b) => b.vote_average - a.vote_average));
            case "Lowest Rated":
                return callback(prev => prev.sort((a, b) => a.vote_average - b.vote_average));
            case"Alphabetically A - Z":
                return callback(prev => prev.sort((a, b) => {
                    if (a.original_title < b.original_title) {
                        return -1;
                    }
                    if (a.original_title > b.original_title) {
                        return 1;
                    }
                    return 0;
                }));
            case"Alphabetically Z - A":
                return callback(prev => prev.sort((a, b) => {
                    if (a.original_title < b.original_title) {
                        return 1;
                    }
                    if (a.original_title > b.original_title) {
                        return -1;
                    }
                    return 0;
                }));
            default:
                return console.log("wrong condition");
        }
    }
}