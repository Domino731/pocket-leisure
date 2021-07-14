const url = "https://ow-api.com/v1/stats/"

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
            if(typeof failedCallback === "function"){
                failedCallback(data)
            }

        })
        .catch(err => console.log(err));
}

/**
 * This function fetch user stats
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
            if (data.error === undefined && typeof successCallback === "function") {
                const stats = {
                    awards: data.competitiveStats.awards,
                    games: data.competitiveStats.games,
                    completeStats: data.competitiveStats.careerStats.allHeroes,
                }
                successCallback(stats)
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
            if (data.error === undefined && typeof successCallback === "function") {
                const stats = {
                    awards: data.quickPlayStats.awards,
                    games: data.quickPlayStats.games,
                    completeStats: data.quickPlayStats.careerStats.allHeroes,
                }
                successCallback(stats)
            }
        })
        .catch(err => console.log(err))
}

