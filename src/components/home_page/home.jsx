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
        </div>
    )
}

export default Home;