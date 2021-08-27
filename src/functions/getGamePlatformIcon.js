/**
 * get icon of platform
 * @param platform {string}
 * @returns {JSX.Element|null} platform icon
 */
export const getGamePlatformIcon = (platform) => {
    switch (platform) {
        case "pc":
            return <i className="fas fa-desktop"/>;
        case "playstation":
            return <i className="fab fa-playstation"/>;
        case "xbox":
            return <i className="fab fa-xbox"/>;
        case "ios":
            return <i className="fab fa-app-store-ios"/>;
        case "android":
            return <i className="fab fa-android"/>;
        case "mac":
            return <i className="fab fa-apple"/>;
        case "linux":
            return <i className="fab fa-linux"/>;
        case "nintendo":
            return <i className="fas fa-gamepad"/>;
        default:
            return null;
    }
};