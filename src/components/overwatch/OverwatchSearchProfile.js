import {Form, FormElement, FormInvalid} from "../../styled-components/elements/user-form/user-form";
import {useEffect, useState} from "react";
import {
    OwSearchContainer,
    OwFormElement,
    OwPoweredBy,
    OwSearchSettings
} from "../../styled-components/elements/overwatch/overwatch";
import {getRegionImgOw, getPlatformIconOw} from "../../functions/overwatchSearch";
import {validateOverwatchUser} from "../../api/overwatch/operations";
import {useHistory} from "react-router";
import {Loading} from "../loading/Loading";

/**
 * Component which is responsible for search user, and redirect him to his stats
 * @returns {JSX.Element} - form, by which user can find his battle net profile
 */
export const OverwatchSearchProfile = () => {

    // array with which are supported by the api
    const regionsArr = ["eu", "us", "asia"];

    // array with platforms supported by the api => xbox, ps ,pc
    const platformsArr = ["pc", "psn", "xbl"];

    // state with a number, when increase this state next region to be displayed
    const [regionNumber, setRegionNumber] = useState(0);

    // state with a number, when increase this state next platform to be displayed
    const [platformNumber, setPlatformNumber] = useState(0);

    // state with data, on the basis of this, the user will be searched
    const [data, setData] = useState({username: "", battleTag: ""});

    // region on which the search will be based
    const [region, setRegion] = useState(regionsArr[regionNumber]);

    // platform on which the search will be based
    const [platform, setPlatform] = useState(platformsArr[platformNumber]);

    // incorrect data msg
    const [incorrect, setIncorrect] = useState({error: ""});

    // checking flag, changes when user click button then handleSearchUser function will check the user with the given data exists
    const [checkingFlag, setCheckingFlag] = useState(false);


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

    // changing data for form
    const handleChangeData = (e) => {

        // set data
        const {name, value} = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }));

        // remove error
        return setIncorrect({error: ""});
    };

    // when search was successful, redirect to statistics page based on user data (username, battleTag, region, platform)
    const successful = () => {
        return history.push(`/overwatch/stats/${platform}/${region}/${data.username}/${data.battleTag}`);
    };
    // searching for user
    const handleSearchUser = (e) => {
        e.preventDefault()

        // set loading screen
        setCheckingFlag(true);


        // remove loading screen
        setCheckingFlag(false);

        // check the user battle net account is exist
        return validateOverwatchUser(platform, region, data.username, data.battleTag, successful, setIncorrect);
    };

    // by this function user can change the current region
    const handleSelectRegion = () => {
        if (regionNumber < regionsArr.length - 1) {
            return setRegionNumber(prev => prev + 1);
        } else {
            return setRegionNumber(0);
        }
    };

    //  by this function user can change the platform
    const handleSelectPlatform = () => {
        if (platformNumber < platformsArr.length - 1) {
            return setPlatformNumber(prev => prev + 1);
        } else {
            return setPlatformNumber(0);
        }
    };


    return <OwSearchContainer>

        {checkingFlag === false && <Form>

            <h1>Overwatch statistics</h1>
            <OwPoweredBy>Powered by Ow-Api</OwPoweredBy>
            <OwFormElement>
                <i className="fas fa-user"/>
                <input type="text" placeholder="Username" name="username" value={data.username}
                       onChange={handleChangeData}/>
            </OwFormElement>
            <OwFormElement right>
                <input type="text" placeholder="BattleTag" name="battleTag" value={data.battleTag}
                       onChange={handleChangeData}/>
                <i className="fas fa-hashtag"/>
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

            {/*when user types invalid data*/}
            <FormInvalid>
                <strong>{incorrect.error}</strong>
            </FormInvalid>
            <button onClick={handleSearchUser}>Search</button>
        </Form>}


        {/*when handleSearchUserFunction is looking for user set loading screen*/}
        {checkingFlag && <Loading/>}
    </ OwSearchContainer>
};