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


export const getOverwatchStats = (platform, region, username, battleTag) => {
    console.log(1)
    fetch(`${url}${platform}/${region}/${username}-${battleTag}/profile`)
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}