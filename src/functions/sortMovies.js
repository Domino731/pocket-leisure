export const sortMovies = (condition, callback) => {
    if(typeof callback === "function"){
        switch (condition){
            case "Top Rated":
                callback(prev => prev.sort((a,b) => b.vote_average - a.vote_average))
                break;
            case "Lowest-Rated":
                callback(prev => prev.sort((a,b) => a.vote_average - b.vote_average))
                break;
            case"Alphabetically A - Z":
                callback(prev => prev.sort((a,b) => {
                    if(a.original_title < b.original_title) { return -1; }
                    if(a.original_title > b.original_title) { return 1; }
                    return 0;
                }))
                break;

            case"Alphabetically Z - A":
                callback(prev => prev.sort((a,b) => {
                    if(a.original_title < b.original_title) { return 1; }
                    if(a.original_title > b.original_title) { return -1; }
                    return 0;
                }))
                break;
            default:console.log("wrong condition")
        }
    }
}