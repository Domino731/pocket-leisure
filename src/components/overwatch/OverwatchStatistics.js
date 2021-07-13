import {getOverwatchStats} from "../../api/overwatch/operations";
import {useEffect} from "react";

export const OverwatchStatistics = (props) => {
    useEffect(()=>{
       getOverwatchStats(props.match.params.platform, props.match.params.region, props.match.params.user, props.match.params.battleTag)
    },[])
    return <h1>asd</h1>
}