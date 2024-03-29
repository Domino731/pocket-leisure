import { Form, FormElement, FormInvalid } from "../../styled-components/elements/user-form/user-form";
import { useEffect, useState } from "react";
import {
    OwSearchContainer,
    OwFormElement,
    OwPoweredBy,
    OwSearchSettings
} from "../../styled-components/elements/overwatch/overwatch";
import { validateOverwatchUser } from "../../api/overwatch/operations";
import { useHistory } from "react-router";
import desktop from "../../images/gaming.svg";
import ps from "../../images/playstation.svg";
import xbox from "../../images/xbox.svg";
import chinaFlag from "../../images/chinaFlag.svg";
import europeFlag from "../../images/europeFlag.svg";
import usaFlag from "../../images/usaFlag.svg";

/**
 * Component which is responsible for searching battleNet user, and redirect him to his stats
 */
export const OverwatchSearchProfile = () => {

    // array with servers which are supported by the api
    const regionsArr = ["eu", "us", "asia"];

    // array with platforms supported by the api => xbox live, playstation network ,pc
    const platformsArr = ["pc", "psn", "xbl"];

    // state with a number, when increase this state next region to be displayed
    const [regionNumber, setRegionNumber] = useState(0);

    // state with a number, when increase this state next platform to be displayed
    const [platformNumber, setPlatformNumber] = useState(0);

    // state with data, on the basis of this, the user will be searched
    const [data, setData] = useState({ username: "", battleTag: "" });

    // region on which the search will be based
    const [region, setRegion] = useState(regionsArr[regionNumber]);

    // platform on which the search will be based
    const [platform, setPlatform] = useState(platformsArr[platformNumber]);

    // incorrect data msg
    const [incorrect, setIncorrect] = useState(false);

    // listening to regionNumber state, when he changed, change region
    useEffect(() => {
        return setRegion(regionsArr[regionNumber]);
    }, [regionNumber]);

    // listening to platformNumber state, when he changed, change platform
    useEffect(() => {
        return setPlatform(platformsArr[platformNumber]);
    }, [platformNumber]);

    // avoid memory leak
    useEffect(() => {
        let isUnmount = false;
        return () => {
            isUnmount = true;
        }
    }, []);

    // for redirection
    let history = useHistory();

    /** get icon of supported server */
    const getRegionImgOw = (region) => {
        switch (region) {
            case "us":
                return <img src={usaFlag} title='USA server' alt="United States of America" />;
            case "eu":
                return <img src={europeFlag} title='Europe server' alt="Europe" />;
            case "asia":
                return <img src={chinaFlag} title='Asia flag' alt="asia" />;
            default:
                return null;
        }
    }

    /**
     * this function return icon, which represented platform on which you have a battleNet account
     * @param platform {string} - name of platform
     */
    const getPlatformIconOw = (platform) => {
        switch (platform) {
            case "pc":
                return <img src={desktop} alt='Desktop' />;
            case "xbl":
                return <img src={xbox} alt='Xbox Live' />;
            case "psn":
                return <img src={ps} alt='Playstation network' />;
            default:
                return null;
        }
    }

    /** changing data for form */
    const handleChangeData = (e) => {
        // remove error
        setIncorrect(false);

        // set data
        const { name, value } = e.target
        return setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    /** when search was successful, redirect to statistics page based on user data (username, battleTag, region, platform) */
    const successful = () => history.push(`/overwatch/stats/${platform}/${region}/${data.username}/${data.battleTag}`);

    /** searching for user */
    const handleSearchUser = (e) => {
        e.preventDefault()
        // check the user battleBet account is exist
        return validateOverwatchUser(platform, region, data.username, data.battleTag, successful, setIncorrect);
    };

    /** by this function user can change the current region */
    const handleSelectRegion = () => {
        if (regionNumber < regionsArr.length - 1) {
            return setRegionNumber(prev => prev + 1);
        } else {
            return setRegionNumber(0);
        }
    };

    /** by this function user can change the platform */
    const handleSelectPlatform = () => {
        if (platformNumber < platformsArr.length - 1) {
            return setPlatformNumber(prev => prev + 1);
        } else {
            return setPlatformNumber(0);
        }
    };


    return <OwSearchContainer>

            <Form>

            <h1>Overwatch statistics</h1>
            <OwPoweredBy>Powered by Ow-Api</OwPoweredBy>

            {/* form where user enter this battleNet data - nick and battleTag */}
            <OwFormElement>
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" name="username" value={data.username}
                    onChange={handleChangeData} />
            </OwFormElement>
            <OwFormElement right>
                <input type="text" placeholder="BattleTag" name="battleTag" value={data.battleTag}
                    onChange={handleChangeData} />
                <i className="fas fa-hashtag" />
            </OwFormElement>

            <FormElement>
                {/*platform - pc, xbx, psn*/}
                <OwSearchSettings onClick={handleSelectPlatform}>
                    <strong>Platform</strong>
                    {getPlatformIconOw(platform)}
                </OwSearchSettings>

                {/*region - asia, eu, america*/}
                <OwSearchSettings onClick={handleSelectRegion}>
                    <strong>Region</strong>
                    {getRegionImgOw(region)}
                </OwSearchSettings>
            </FormElement>

            {/* when user types incorrect data then show error*/}
            {incorrect && <FormInvalid>
                <strong>Incorrect data</strong>
            </FormInvalid>}
            <button onClick={handleSearchUser}>Search</button>
        </Form>

    </ OwSearchContainer>
};