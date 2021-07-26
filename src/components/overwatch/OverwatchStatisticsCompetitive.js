import {useEffect, useState} from "react";
import {getOverwatchCompetitiveStats} from "../../api/overwatch/operations";
import {Container} from "../../styled-components/general/general-styles";
import {
    OwMedalBar,
    OwMedalsDiagram, OwPrivate,
    OwStatsTable,
    OwStatsTitle,
    OwStatTitle,
    OwWonGamesBar
} from "../../styled-components/elements/overwatch/overwatch";
import {Loading} from "../loading/Loading";

export const OverwatchStatisticsCompetitive = (props) => {
    const [stats, setStats] = useState(undefined)
    useEffect(() => {
        getOverwatchCompetitiveStats(props.match.params.platform,
            props.match.params.region,
            props.match.params.user,
            props.match.params.battleTag,
            setStats)
    }, [props.match.params])
    if (stats === undefined) {
        return <Loading/>
    }
    if(stats === "privateProfile"){
        return <Container>
            <OwStatsTitle>
                <span>Competitive</span>
            </OwStatsTitle>
            <OwPrivate>
                <i className="fas fa-lock"/>
                <strong>Career profile visibility is set to private</strong>
            </OwPrivate>
        </Container>
    }
    else if (stats === "privateProfile") {
        return <h1>asd</h1>
    }
        return <Container>
            <OwStatsTitle>
                <span>Competitive</span>
            </OwStatsTitle>

            {/*games*/}
            <section>
                <OwStatTitle>Games</OwStatTitle>
                <OwStatsTable>
                    <tbody>
                    <tr>
                        <td>Played</td>
                        <td>{stats.games.played}</td>
                    </tr>
                    <tr>
                        <td>Won</td>
                        <td>{stats.games.won}</td>
                    </tr>
                    </tbody>
                </OwStatsTable>
                <OwWonGamesBar played={stats.games.played} won={stats.games.won}/>
            </section>


            {/*medals*/}
            <section>
                <OwStatTitle>Medals</OwStatTitle>
                <OwStatsTable>
                    <tbody>
                    <tr>
                        <td>All</td>
                        <td>{stats.awards.medals}</td>
                    </tr>
                    <tr>
                        <td>Gold</td>
                        <td>{stats.awards.medalsGold}</td>
                    </tr>
                    <tr>
                        <td>Silver</td>
                        <td>{stats.awards.medalsSilver}</td>
                    </tr>
                    <tr>
                        <td>Bronze</td>
                        <td>{stats.awards.medalsBronze}</td>
                    </tr>
                    </tbody>
                </OwStatsTable>


                {/*medals diagram  */}
                <OwMedalsDiagram>
                    <OwMedalBar allMedals={stats.awards.medals}
                                medal={stats.awards.medalsGold} color="#D9AD45"/>
                    <OwMedalBar allMedals={stats.awards.medals}
                                medal={stats.awards.medalsSilver} color="#C1C3CE"/>
                    <OwMedalBar allMedals={stats.awards.medals}
                                medal={stats.awards.medalsBronze} color="#814C46"/>
                </OwMedalsDiagram>
            </section>

            <section>
                {/*assists*/}
                <OwStatTitle>Assists</OwStatTitle>
                <OwStatsTable>
                    <tbody>
                    <tr>
                        <td>Defensive</td>
                        <td>{stats.completeStats.assists.defensiveAssists}</td>
                    </tr>
                    <tr>
                        <td>Offensive</td>
                        <td>{stats.completeStats.assists.offensiveAssists}</td>
                    </tr>
                    </tbody>
                </OwStatsTable>
            </section>

            {/*average stats*/}
            <section>
                <OwStatTitle>Average per 10 min</OwStatTitle>
                <OwStatsTable>
                    <tbody>
                    <tr>
                        <td>Damage</td>
                        <td>{stats.completeStats.average.allDamageDoneAvgPer10Min}</td>
                    </tr>
                    <tr>
                        <td>Barrier damage</td>
                        <td>{stats.completeStats.average.barrierDamageDoneAvgPer10Min}</td>
                    </tr>
                    <tr>
                        <td>Death</td>
                        <td>{stats.completeStats.average.deathsAvgPer10Min}</td>
                    </tr>
                    <tr>
                        <td>Eliminations</td>
                        <td>{stats.completeStats.average.eliminationsAvgPer10Min}</td>
                    </tr>
                    <tr>
                        <td>Objective kills</td>
                        <td>{stats.completeStats.average.objectiveKillsAvgPer10Min}</td>
                    </tr>
                    <tr>
                        <td>Objective time</td>
                        <td>{stats.completeStats.average.objectiveTimeAvgPer10Min}</td>
                    </tr>
                    <tr>
                        <td>Solo kills</td>
                        <td>{stats.completeStats.average.soloKillsAvgPer10Min}</td>
                    </tr>
                    <tr>
                        <td>Time on fire</td>
                        <td>{stats.completeStats.average.timeSpentOnFireAvgPer10Min}</td>
                    </tr>
                    </tbody>
                </OwStatsTable>
            </section>

            {/*best stats and records*/}
            <section>
                <OwStatTitle>best</OwStatTitle>
                <OwStatsTable>
                    <tbody>
                    <tr>
                        <td>Damage</td>
                        <td>{stats.completeStats.best.allDamageDoneMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Barrier damage</td>
                        <td>{stats.completeStats.best.barrierDamageDoneMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Defensive kills</td>
                        <td>{stats.completeStats.best.defensiveAssistsMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Eliminations</td>
                        <td>{stats.completeStats.best.eliminationsMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Kill streak</td>
                        <td>{stats.completeStats.best.killsStreakBest}</td>
                    </tr>
                    <tr>
                        <td>Multi kills</td>
                        <td>{stats.completeStats.best.multikillsBest}</td>
                    </tr>
                    <tr>
                        <td>Melee kills</td>
                        <td>{stats.completeStats.best.meleeFinalBlowsMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Objective kills</td>
                        <td>{stats.completeStats.best.objectiveKillsMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Objective time</td>
                        <td>{stats.completeStats.best.objectiveTimeMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Solo kills</td>
                        <td>{stats.completeStats.best.soloKillsMostInGame}</td>
                    </tr>
                    <tr>
                        <td>Time on fire</td>
                        <td>{stats.completeStats.best.timeSpentOnFireMostInGame}</td>
                    </tr>
                    </tbody>
                </OwStatsTable>
            </section>

            {/*stats on combat*/}
            <section>
                <OwStatTitle>On combat</OwStatTitle>
                <OwStatsTable>
                    <tbody>
                    <tr>
                        <td>Damage</td>
                        <td>{stats.completeStats.combat.damageDone}</td>
                    </tr>
                    <tr>
                        <td>Barrier damage</td>
                        <td>{stats.completeStats.combat.barrierDamageDone}</td>
                    </tr>
                    <tr>
                        <td>Deaths</td>
                        <td>{stats.completeStats.combat.deaths}</td>
                    </tr>
                    <tr>
                        <td>Eliminations</td>
                        <td>{stats.completeStats.combat.eliminations}</td>
                    </tr>
                    <tr>
                        <td>Melee kills</td>
                        <td>{stats.completeStats.combat.meleeFinalBlows}</td>
                    </tr>
                    <tr>
                        <td>Objective kills</td>
                        <td>{stats.completeStats.combat.meleeFinalBlows}</td>
                    </tr>
                    <tr>
                        <td>Objective time</td>
                        <td>{stats.completeStats.combat.objectiveTime}</td>
                    </tr>
                    <tr>
                        <td>Solo kills</td>
                        <td>{stats.completeStats.combat.soloKills}</td>
                    </tr>
                    <tr>
                        <td>Time on fire</td>
                        <td>{stats.completeStats.combat.timeSpentOnFire}</td>
                    </tr>
                    </tbody>
                </OwStatsTable>
            </section>
        </Container>
}