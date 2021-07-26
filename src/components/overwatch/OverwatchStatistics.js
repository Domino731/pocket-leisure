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
    OwLink
} from "../../styled-components/elements/overwatch/overwatch";
import {Link} from "react-router-dom";
import {Loading} from "../loading/Loading";

export const OverwatchStatistics = (props) => {

    // state with user statistics
    const [stats, setStats] = useState(undefined)
    useEffect(() => {
        getOverwatchStats(props.match.params.platform,
            props.match.params.region,
            props.match.params.user,
            props.match.params.battleTag,
            setStats)
    }, [props.match.params])

    if (stats === undefined) {
        return <Loading/>
    }

    return <Container>
        <OwPlayerBoard>
            <OwLevelIcon src={stats.levelIcon}/>
            <OwPrestigeIcon src={stats.prestigeIcon}/>
            <OwIcon src={stats.icon}/>
        </OwPlayerBoard>
        <OwName>{stats.name}</OwName>

        {stats.private && <OwPrivate>
            <i className="fas fa-lock"/>
            <strong>Career profile visibility is set to private</strong>
        </OwPrivate>}
        {stats.private !== true && <>
            <OwStatsTitle>
                <span>Overall</span>
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


            <section>
                <OwStatsTitle>
                    <span>Quick play</span>
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
                {/*<OwMedalBar medals={stats.competitiveStats.awards.medals} gold={stats.competitiveStats.awards.medalsGold}*/}
                {/*            silver={stats.competitiveStats.awards.medalsSilver}/>*/}
                <OwMedalsDiagram>
                    <OwMedalBar allMedals={stats.quickPlayStats.awards.medals}
                                medal={stats.quickPlayStats.awards.medalsGold} color="#D9AD45"/>
                    <OwMedalBar allMedals={stats.quickPlayStats.awards.medals}
                                medal={stats.quickPlayStats.awards.medalsSilver} color="#C1C3CE"/>
                    <OwMedalBar allMedals={stats.quickPlayStats.awards.medals}
                                medal={stats.quickPlayStats.awards.medalsBronze} color="#814C46"/>
                </OwMedalsDiagram>
            </section>
            <section>
                <OwStatsTitle>
                    <span>Competitive</span>
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
                {/*<OwMedalBar medals={stats.competitiveStats.awards.medals} gold={stats.competitiveStats.awards.medalsGold}*/}
                {/*            silver={stats.competitiveStats.awards.medalsSilver}/>*/}
                <OwMedalsDiagram>
                    <OwMedalBar allMedals={stats.competitiveStats.awards.medals}
                                medal={stats.competitiveStats.awards.medalsGold} color="#D9AD45"/>
                    <OwMedalBar allMedals={stats.competitiveStats.awards.medals}
                                medal={stats.competitiveStats.awards.medalsSilver} color="#C1C3CE"/>
                    <OwMedalBar allMedals={stats.competitiveStats.awards.medals}
                                medal={stats.competitiveStats.awards.medalsBronze} color="#814C46"/>
                </OwMedalsDiagram>
            </section>

            <OwLink>
                <Link to={`/overwatch/stats-competitive/${props.match.params.platform}/${props.match.params.region}/${props.match.params.user}/${props.match.params.battleTag}`}>Complete competitive</Link>
            </OwLink>

            <OwLink>
                <Link to={`/overwatch/stats-quick-play/${props.match.params.platform}/${props.match.params.region}/${props.match.params.user}/${props.match.params.battleTag}`}>Complete quick play</Link>
            </OwLink>


        </>}


    </Container>

}