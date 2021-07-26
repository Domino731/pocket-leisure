import {Form, FormElement, FormInvalid} from "../../styled-components/elements/user-form/user-form";
import {useEffect, useState} from "react";
import {OwSearchSettings} from "../../styled-components/elements/overwatch/overwatch";
import {getRegionImgOw, getPlatformIconOw} from "../../functions/overwatchSearch";
import {validateOverwatchUser} from "../../api/overwatch/operations";
import {useHistory} from "react-router";
import {Container} from "../../styled-components/general/general-styles";
import {Loading} from "../loading/Loading";

export const OverwatchSearchProfile = () => {
    // array with which are supported by the api
    const regionsArr = ["eu", "us", "asia"]

    // array with platforms supported by the api => xbox, ps ,pc
    const platformsArr = ["pc", "psn", "xbl"]

    const [regionNumber, setRegionNumber] = useState(0)

    const [platformNumber, setPlatformNumber] = useState(0)

    // state with data, on the basis of this, the user will be searched
    const [data, setData] = useState({username: "", battleTag: ""})

    // region on which the search will be based
    const [region, setRegion] = useState(regionsArr[regionNumber])

    // platform on which the search will be based
    const [platform, setPlatform] = useState(platformsArr[platformNumber])

    // incorrect data msg
    const [incorrect, setIncorrect] = useState({error: ""})

    // checking flag, changes when user click button then handleSearchUser function will check the user with the given data exists
    const [checkingFlag, setCheckingFlag] = useState(false)

    // listening to regionNumber state, when he changed, change region
    useEffect(() => {
        setRegion(regionsArr[regionNumber])
    }, [regionNumber])

    // listening to platformNumber state, when he changed, change platform
    useEffect(() => {
        setPlatform(platformsArr[platformNumber])
    }, [platformNumber])

    // for redirection
    let history = useHistory()

    // changing data
    const handleChangeData = (e) => {
        const {name, value} = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // when search was successful, redirect to statistics page based on user data (username, battleTag, region, platform)
    const successful = () => {
        history.push(`/overwatch/stats/${platform}/${region}/${data.username}/${data.battleTag}`)
    }
    // searching for user
    const handleSearchUser = (e) => {
        e.preventDefault()
        setCheckingFlag(true)
        validateOverwatchUser(platform, region, data.username, data.battleTag, successful, setIncorrect)
        setCheckingFlag(false)
    }

    // by this function user can change the current region
    const handleSelectRegion = () => {
        if (regionNumber < regionsArr.length - 1) {
            setRegionNumber(prev => prev + 1)
        } else {
            setRegionNumber(0)
        }
    }

    //  by this function user can change the platform
    const handleSelectPlatform = () => {
        if (platformNumber < platformsArr.length - 1) {
            setPlatformNumber(prev => prev + 1)
        } else {
            setPlatformNumber(0)
        }
    }
    return <Container>
        {checkingFlag === false && <Form>
            <h1>Overwatch statistics</h1>
            <FormElement>
                <i className="fas fa-user"/>
                <input type="text" placeholder="Username" name="username" value={data.username}
                       onChange={handleChangeData}/>
            </FormElement>
            <FormElement right>
                <input type="text" placeholder="BattleTag" name="battleTag" value={data.battleTag}
                       onChange={handleChangeData}/>
                <i className="fas fa-hashtag"/>
            </FormElement>


            <FormElement>
                <OwSearchSettings onClick={handleSelectPlatform}>
                    <strong>Platform</strong>
                    {getPlatformIconOw(platform)}
                </OwSearchSettings>

                <OwSearchSettings onClick={handleSelectRegion}>
                    <strong>Region</strong>
                    {getRegionImgOw(region)}
                </OwSearchSettings>
            </FormElement>

            <FormInvalid>
                <strong>{incorrect.error}</strong>
            </FormInvalid>
            <button onClick={handleSearchUser}>Search</button>
        </Form>}
        {checkingFlag && <Loading/>}
    </Container>
}