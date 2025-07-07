import logo from '/logo-black.svg'
import './style.css'

function Home(){
    return(
        <div className="home-cont">
            <section className="snap-section intro">
                <img src={logo}/>
                <h1>Heat Death</h1>
            </section>
            <section className="snap-section about">
                <p>The End of Civilization, is a space themed war game where advanced civilization compete in survival through exploration, resource management, and combat, aiming to be the empire standing.</p>
                
                <h3>Description</h3>
                <p></p>
                <div className="responsive-iframe-container">
                    <iframe 
                        src="https://www.youtube.com/embed/STf0WfJ3iDs" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture;
                        web-share"
                        allowfullscreen 
                    />
                </div>
            </section>
            <section className="snap-section desc">
                <div className='disp'>
                    <h1>Inspiration</h1>
                    <p>Our group's game is a space themed wargame heavily inspired by Catan, Dungeons and Dragons, Warhammer and Frostpunk. Working name “Heat Death: The end of Civilization” players begin as a type 2 civilization meaning that as a player they have access to a Dyson Sphere & Drill Site which produce Energy and Mineral respectively. Energy is the main combat currency which is necessary for building troops in factories to be used in combat. Minerals are the construction currency which is used to build all structures.</p>
                </div>
                <h1>Game Pillers</h1>
                <div className='disp2'>
                    <p>Strategic Exploration and Expansion - Explore and claim territories to capture resources, abilities and positioning advantage to gain dominance.</p>
                    <p>Dynamic, Accessible Warfare - Engage in battles that reward tactical troop management and coordinated strikes.</p>
                    <p>Survival - Navigate unseen hazards that change the map and challenge every players adaptability.</p>
                </div>
            </section>
            <section className='snap-section game-dynamics'>
                <h2>Main Game Dynamics</h2>
                <section>
                    <p>
                    The core mechanic in this game is to gather resources by developing more buildings each turn. Players then use those
                    resources to construct troops and attack enemy players with the objective of being the last player standing.
                    </p>
                    <p>
                    The most dominant strategy observed was exploring nearby planets, building many drill sites to gather materials, and using
                    those to develop higher-tier buildings and troops.
                    </p>
                    <p>
                    Since this is a strategic wargame, long-term planning proved more effective than short-term tactical decisions. Most players
                    followed this strategy, and those who deviated tended to fall behind. Overall, the game encourages base development before
                    engaging in combat.
                    </p>
                </section>

                <section>
                    <h3>Trade-offs and Dilemmas</h3>
                    <p>
                    One major trade-off was choosing not to follow the dominant strategy—developing troops early to sabotage others. While this
                    could interrupt opponents' progress, it severely hindered your own. The dilemma was whether a viable alternative strategy
                    existed.
                    </p>
                    <p>
                    Another dilemma came from the game's slow early pacing. If players spend the beginning only exploring and gathering
                    resources, the game becomes uneventful for a while. Choosing to fight early, however, means falling behind in development,
                    making it hard to catch up.
                    </p>
                </section>

                <section>
                    <h3>Length of a Typical Play Session</h3>
                    <p>
                    A typical session lasts between <strong>2–4 hours</strong>, depending on playstyle. If everyone rushes combat, the game may
                    extend, and similarly if everyone chooses to gather first. With 4 players, most games lasted 2–4 hours during playtesting,
                    though this varies with player count and strategy.
                    </p>
                </section>
            </section>
        </div>
    )
}

export default Home;