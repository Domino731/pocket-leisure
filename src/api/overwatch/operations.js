import {url} from "./constans";

/**
 * This function checks the user have entered the correct information for your battle net account
 * @param {function} successCallback - redirect user to overwatch statistics
 * @param {function} failedCallback - change the component state and notify the user of invalid data
 * @param platform {string} - user platform (psn, xbox, pc)
 * @param region {string} - user region (asia,eu,us)
 * @param username {string} - username
 * @param battleTag {string, number} - user battleTag (12345)
 */
export const validateOverwatchUser = (platform, region, username, battleTag, successCallback, failedCallback) => {

    fetch(`${url}${platform}/${region}/${username}-${battleTag}/profile`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback()
            }
            //when user enters invalid data, change state and notify him of the error - bad battleTag, nick, region ...
            if (typeof failedCallback === "function") {
                failedCallback(data)
            }
        })
        .catch(err => console.log(err));
}

/**
 * This function fetch user  general stats
 * @param {function} successCallback - saves incoming data
 * @param platform {string} - user platform (psn, xbox, pc)
 * @param region {string} - user region (asia,eu,us)
 * @param username {string} - username
 * @param battleTag {string, number} - user battleTag (12345)
 */
export const getOverwatchStats = (platform, region, username, battleTag, successCallback) => {
    fetch(`${url}${platform}/${region}/${username}-${battleTag}/profile`)
        .then(r => r.json())
        .then(data => {
            if (data.error === undefined && typeof successCallback === "function") {
                successCallback(data)
            }
        })
        .catch(err => console.log(err))
}

/**
 * This function fetch complete user complete stats for competitive,
 * @param {function} successCallback - saves incoming data
 * @param platform {string} - user platform (psn, xbox, pc)
 * @param region {string} - user region (asia,eu,us)
 * @param username {string} - username
 * @param battleTag {string, number} - user battleTag (12345)
 */
export const getOverwatchCompetitiveStats = (platform, region, username, battleTag, successCallback) => {
    fetch(`${url}${platform}/${region}/${username}-${battleTag}/complete`)
        .then(r => r.json())
        .then(data => {

            // player can have private profile
            // when he doesnt have private profile set stats to state (successCallback)
            if (data.quickPlayStats.competitiveStats !== null && typeof successCallback === "function") {

                // object with only needed stats, there is also hero stats but they are too big :(
                const stats = {
                    awards: data.competitiveStats.awards,
                    games: data.competitiveStats.games,
                    completeStats: data.competitiveStats.careerStats.allHeroes,
                }
                successCallback(stats)
            }

            // when he have private profile, set the state
            else {

                //so you can notify a user that he have a private profile
                successCallback("privateProfile")
            }
        })
        .catch(err => console.log(err))
}


/**
 * This function fetch complete user complete stats for competitive,
 * @param {function} successCallback - saves incoming data
 * @param platform {string} - user platform (psn, xbox, pc)
 * @param region {string} - user region (asia,eu,us)
 * @param username {string} - username
 * @param battleTag {string, number} - user battleTag (12345)
 */
export const getOverwatchQuickPlayStats = (platform, region, username, battleTag, successCallback) => {
    fetch(`${url}${platform}/${region}/${username}-${battleTag}/complete`)
        .then(r => r.json())
        .then(data => {

            // player can have private profile
            // when he doesnt have private profile set stats to state (successCallback)
            if (data.quickPlayStats.careerStats !== null && typeof successCallback === "function") {

                // object with only needed stats, there is also hero stats but they are too big :(
                const stats = {
                    awards: data.quickPlayStats.awards,
                    games: data.quickPlayStats.games,
                    completeStats: data.quickPlayStats.careerStats.allHeroes,
                }
                successCallback(stats)
            }

            // when he have private profile, set the state
            else {
                //so you can notify a user that he have a private profile
                successCallback("privateProfile")
            }
        })
        .catch(err => console.log(err))
}

