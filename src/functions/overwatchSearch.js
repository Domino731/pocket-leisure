/** this function returns the src for an image based on the currently selected region
 * @param region {string} - based on this the function returns src
 */
export const getRegionImgOw = (region) => {
    switch (region){
        case "us":
            return <img src="https://flagcdn.com/us.svg" alt="United States of America"/>
        case "eu":
            return <img src="https://flagcdn.com/eu.svg" alt="Europe"/>
        case "asia":
            return <img src="https://flagcdn.com/cn.svg" alt="asia"/>
        default:
            return null
    }

}
/**
 * this function return icon, which represented platform on which you have an account
 * @param platform {string} - name of platform
 */

export const getPlatformIconOw = (platform) =>{
    switch (platform){
        case "pc":
            return <i className="fas fa-desktop"/>
        case "xbl":
            return <i className="fab fa-xbox"/>
        case "psn":
            return <i className="fab fa-playstation"/>
        default:
            return null
    }
}