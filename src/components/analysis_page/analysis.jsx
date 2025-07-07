import flow from '/FlowChart.png'
import graph from '/graph.png'
import './style.css'

function Analysis(){
    const probabilities = [
        { roll: 2, odds: 2.78 },
        { roll: 3, odds: 5.56 },
        { roll: 4, odds: 8.33 },
        { roll: 5, odds: 11.11 },
        { roll: 6, odds: 13.89 },
        { roll: 7, odds: 16.67 },
        { roll: 8, odds: 13.89 },
        { roll: 9, odds: 11.11 },
        { roll: 10, odds: 8.33 },
        { roll: 11, odds: 5.56 },
        { roll: 12, odds: 2.78 },
    ];

    return(
        <div className="analysis">
            <h2>Game Balance Analysis</h2>
            <section>
                <p>
                    To achieve a relatively balanced experience for all players, random chance was added to attacking,
                    and the hazard mechanic was introduced with the goal of balancing the game in a fun way.
                </p>
            </section>

            <article>
                <h3>Attacking</h3>
                <p>
                    Attacking is done by rolling d6s. Each troop has an attacking power in a number of 6-sided dice they may roll.
                    Players are encouraged to group their troops to increase the number of dice used in an attack, allowing them to
                    influence the outcome.
                </p>
            </article>

            <article>
                <h3>Hazards</h3>
                <p>
                    Hazards are the primary random element in Heat Death. One of six hazards occurs starting round 3 and every 2 rounds
                    afterward. Specific hazards like Meteor Showers and Wormholes impact locations based on a 2d6 roll, forming a probability
                    distribution where rolls near 7 are more likely.
                </p>
            </article>

            <section className="table-section">
                <h3>Possibility Table (2d6)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Roll</th>
                            {probabilities.map(({ roll }) => (
                                <th key={roll}>{roll}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Odds (%)</td>
                            {probabilities.map(({ odds }) => (
                                <td key={odds}>{odds.toFixed(2)}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </section>

            <img src={graph}/>

            <section className="conclusion">
                <h3>Additional Insights</h3>
                <p>
                    This data tells us that the most hazardous tiles are at values like <strong>6, 7, 8</strong>, while safer tiles are at 
                    <strong> 2, 3, 11, and 12</strong>, based on the 2d6 distribution.
                </p>

                <h4>Other Quantitative Information</h4>
                <ul>
                    <li><strong>Average Game Duration:</strong> 3-5 hours, depending on playstyle and number of players.</li>
                    <li><strong>Average Time Taken Per Turn:</strong> 1-5 minutes, depending on how much a player plans during their turn.</li>
                </ul>
            </section>
            
            {/* <h1>Flowchart</h1>
            <img src={flow}/> */}
        </div>
    );
}

export default Analysis;