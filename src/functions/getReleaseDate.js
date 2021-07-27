// movieDb api returns the date without a name, just the date with numbers (21-09-2021),
// so it is a simple function to return the date with the month name as a string -> 21 september 202
//
const month = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

/**
* @param {string}  date necessary to return month name
 */
 export const getReleaseDate = (date) => {
     if(date !== undefined && date !== null && date.length > 0){
         let monthNumber = parseInt(date.slice(5,7)) - 1
             const year = date.slice(0,4)
             const day = date.slice(8,10)
             return `${year} ${month[monthNumber]} ${day}`
     }
}
