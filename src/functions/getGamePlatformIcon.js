import desktop from "../images/gaming.svg";
import ps from "../images/playstation.svg";
import xbox from "../images/xbox.svg";
import ios from "../images/apple.svg";
import android from "../images/android.svg";
import mac from "../images/computer.svg";
import linux from "../images/linux.svg";
import nintendo from "../images/console.svg";
/**
 * get icon of platform
 * @param platform {string}
 * @returns {JSX.Element|null} platform icon
 */
export const getGamePlatformIcon = (platform) => {
    switch (platform) {
        case "pc":
            return <img src={desktop} title='PC' alt='computer'/>
        case "playstation":
            return  <img src={ps} title='Playstation' alt='Playstation'/>
        case "xbox":
            return  <img src={xbox} title='XBOX' alt='XBOX'/>
        case "ios":
            return  <img src={ios} title='IOS' alt='apple'/>
        case "android":
            return  <img src={android} title='Android' alt='Android'/>
        case "mac":
            return  <img src={mac} title='Mac' alt='Mac'/>
        case "linux":
            return  <img src={linux} title='Linux' alt='Linux'/>
        case "nintendo":
            return  <img src={nintendo} title='Nintendo' alt='Nintendo'/>
        default:
            return null;
    }
};