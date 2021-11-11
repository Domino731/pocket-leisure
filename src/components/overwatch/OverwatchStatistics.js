import {getOverwatchStats} from "../../api/overwatch/operations";
import {useEffect, useState} from "react";
import {Container} from "../../styled-components/general/general-styles";
import {
    OwIcon,
    OwLevelIcon,
    OwPlayerBoard,
    OwName,
    OwPrestigeIcon,
    OwPrivate,
    OwStatsTable,
    OwStatsTitle,
    OwMedalBar,
    OwWonGamesBar,
    OwStatTitle,
    OwMedalsDiagram,
    OwLink, OwStatsGeneral, OwStatsSingle, OwStatsSingleOverall, OwLinksContainer
} from "../../styled-components/elements/overwatch/overwatch";
import {Link} from "react-router-dom";
import {Loading} from "../loading/Loading";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";

/**
 * Component with general overview for player stats
 */
export const OverwatchStatistics = () => {

    // references 
    const {platform, region, user, battleTag} = useParams();
    
    // state with user statistics
    const [stats, setStats] = useState(null);

    // when component mounted get general overwatch stats
    useEffect(() => {
        return getOverwatchStats(platform,
            region,
            user,
            battleTag,
            setStats);
    }, [platform, region, user, battleTag]);

 
    // wait for data
    if (stats === null) {
        return <Loading/>
    }
    // if player doesnt exist
    else if (stats === undefined){
        return <Redirect to='/overwatch-search-your-profile'/>
    }
    return <Container>

        {/*user portrait*/}
        <OwPlayerBoard>
            <OwLevelIcon src={stats.levelIcon}/>
            <OwPrestigeIcon src={stats.prestigeIcon}/>
            <OwIcon src={stats.icon}/>
        </OwPlayerBoard>

        {/*username*/}
        <OwName>{stats.name}</OwName>

        {/*if user has private profile (no access to stats)show info about it*/}
        {stats.private && <OwPrivate>
            <i className="fas fa-lock"/>
            <strong>Career profile visibility is set to private</strong>
        </OwPrivate>}

        {/*if user dont has private profile return stats*/}
        {stats.private !== true && <>
            <OwStatsGeneral>

                {/*overall*/}
                <OwStatsSingleOverall>
                    <OwStatsTitle>
                        Overall
                    </OwStatsTitle>
                    <OwStatsTable>
                        <tbody>
                        <tr>
                            <td>Games won</td>
                            <td>{stats.gamesWon}</td>
                        </tr>
                        <tr>
                            <td>Level</td>
                            <td>{stats.level}</td>
                        </tr>
                        <tr>
                            <td>Prestige level</td>
                            <td>{stats.prestige}</td>
                        </tr>

                        <tr>
                            <td>Endorsement</td>
                            <td>{stats.endorsement}</td>
                        </tr>
                        </tbody>
                    </OwStatsTable>
                </OwStatsSingleOverall>

                {/*quick play stats*/}
                <OwStatsSingle>
                    <OwStatsTitle>
                        Quick play
                    </OwStatsTitle>
                    <OwStatTitle>games</OwStatTitle>
                    <OwStatsTable>
                        <tbody>
                        <tr>
                            <td>Played</td>
                            <td>{stats.quickPlayStats.games.played}</td>
                        </tr>
                        <tr>
                            <td>Won</td>
                            <td>{stats.quickPlayStats.games.won}</td>
                        </tr>
                        </tbody>
                    </OwStatsTable>
                    <OwWonGamesBar played={stats.quickPlayStats.games.played} won={stats.quickPlayStats.games.won}/>


                    <OwStatTitle>Medals</OwStatTitle>
                    <OwStatsTable>
                        <tbody>
                        <tr>
                            <td>All</td>
                            <td>{stats.quickPlayStats.awards.medals}</td>
                        </tr>
                        <tr>
                            <td>Gold</td>
                            <td>{stats.quickPlayStats.awards.medalsGold}</td>
                        </tr>
                        <tr>
                            <td>Silver</td>
                            <td>{stats.quickPlayStats.awards.medalsSilver}</td>
                        </tr>
                        <tr>
                            <td>Bronze</td>
                            <td>{stats.quickPlayStats.awards.medalsBronze}</td>
                        </tr>
                        </tbody>
                    </OwStatsTable>

                    <OwMedalsDiagram>
                        <OwMedalBar allMedals={stats.quickPlayStats.awards.medals}
                                    medal={stats.quickPlayStats.awards.medalsGold} color="#D9AD45"/>
                        <OwMedalBar allMedals={stats.quickPlayStats.awards.medals}
                                    medal={stats.quickPlayStats.awards.medalsSilver} color="#C1C3CE"/>
                        <OwMedalBar allMedals={stats.quickPlayStats.awards.medals}
                                    medal={stats.quickPlayStats.awards.medalsBronze} color="#814C46"/>
                    </OwMedalsDiagram>
                </OwStatsSingle>

                {/*competitive stats*/}
                <OwStatsSingle>
                    <OwStatsTitle>
                        Competitive
                    </OwStatsTitle>

                    <OwStatTitle>games</OwStatTitle>
                    <OwStatsTable>
                        <tbody>
                        <tr>
                            <td>Played</td>
                            <td>{stats.competitiveStats.games.played}</td>
                        </tr>
                        <tr>
                            <td>Won</td>
                            <td>{stats.competitiveStats.games.won}</td>
                        </tr>
                        </tbody>
                    </OwStatsTable>
                    <OwWonGamesBar played={stats.competitiveStats.games.played} won={stats.competitiveStats.games.won}/>


                    <OwStatTitle>Medals</OwStatTitle>
                    <OwStatsTable>
                        <tbody>
                        <tr>
                            <td>All</td>
                            <td>{stats.competitiveStats.awards.medals}</td>
                        </tr>
                        <tr>
                            <td>Gold</td>
                            <td>{stats.competitiveStats.awards.medalsGold}</td>
                        </tr>
                        <tr>
                            <td>Silver</td>
                            <td>{stats.competitiveStats.awards.medalsSilver}</td>
                        </tr>
                        <tr>
                            <td>Bronze</td>
                            <td>{stats.competitiveStats.awards.medalsBronze}</td>
                        </tr>
                        </tbody>
                    </OwStatsTable>

                    <OwMedalsDiagram>
                        <OwMedalBar allMedals={stats.competitiveStats.awards.medals}
                                    medal={stats.competitiveStats.awards.medalsGold} color="#D9AD45"/>
                        <OwMedalBar allMedals={stats.competitiveStats.awards.medals}
                                    medal={stats.competitiveStats.awards.medalsSilver} color="#C1C3CE"/>
                        <OwMedalBar allMedals={stats.competitiveStats.awards.medals}
                                    medal={stats.competitiveStats.awards.medalsBronze} color="#814C46"/>
                    </OwMedalsDiagram>
                </OwStatsSingle>

            </OwStatsGeneral>


            <OwLinksContainer>

                {/*link to competitive stats*/}
                <OwLink>
                    <Link
                        to={`/overwatch/stats-competitive/${platform}/${region}/${user}/${battleTag}`}>
                        Competitive</Link>
                </OwLink>

                {/*link to quick play stats*/}
                <OwLink>
                    <Link
                        to={`/overwatch/stats-quick-play/${platform}/${region}/${user}/${battleTag}`}>
                        Quick play</Link>
                </OwLink>
            </OwLinksContainer>
        </>}

    </Container>

};