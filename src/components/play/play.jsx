import './style.css'
import board_dark from '/board/dark_scale_board.jpg'
import board_light from '/board/light_scale_board.png'
import currency from '/board/PrinttAbleCurrency.png'

//players
import player_blue from '/board/BluePlayer.png'
import player_green from '/board/GreenPlayer.png'
import player_orange from '/board/OrangePlayer.png'
import player_pink from '/board/PinkPlayer.png'
import player_red from '/board/RedPlayer.png'
import player_yellow from '/board/YellowPlayer.png'

//cards
import ARGON_card from '/Cards/A.R.G.O.N. [III].png'
import ASTA_card from '/Cards/A.S.T.A. [III].png'
import breaching_vessel_card from '/Cards/BREACHING VESSEL [I].png'
import building_card from '/Cards/Building Card.png'
import drill_maintenance_card from '/Cards/DRILL MAINTENANCE.png'
import drill_site_card from '/Cards/DRILL SITE.png'
import dyson_sphere_card from '/Cards/DYSON SPHERE.png'
import energy_surge_card from '/Cards/ENERGY SURGE.png'
import exploration_vessel_card from '/Cards/EXPLORATION VESSEL [I].png'
import factory_card from '/Cards/FACTORY.png'
import force_field_card from '/Cards/FORCE FIELD.png'
import force_field_spacecraft from '/Cards/FORCEFIELD SPACECRAFT [II].png'
import hazard_card from '/Cards/Hazard Card.png'
import meteor_card from '/Cards/METEOR SHOWER.png'
import mother_ship_card from '/Cards/MOTHER SHIP [II].png'
import railgun_card from '/Cards/RAILGUN [II].png'
import solar_flare_card from '/Cards/SOLAR FLARE.png'
import space_laser_card from '/Cards/SPACE LASER [III].png'
import space_station_card from '/Cards/SPACE STATION.png'
import stricker_spacecraft_card from '/Cards/STRIKER SPACECRAFT [II].png'
import striker_vessel_card from '/Cards/STRIKER VESSEL [I].png'
import super_nova_explotion_card from '/Cards/SUPER NOVA EXPLOTION.png'
import turret_card from '/Cards/TURRET [I].png'
import troop_card from '/Cards/Troop Card.png'
import wormhole_card from '/Cards/WORMHOLE.png'

function Play(){
    const openPDF = (filename) => {
        window.open(`/docs/${filename}`, '_blank');
    };

    const downloadImage = (filename)=>{
        const a = document.createElement("a");
        a.href = `/board/${filename}`;
        a.download = `/board/${filename}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return(
        <div className="collection">
            <div className='board-select'>
                <div className='board-hold'>
                    <h1>Dark-scale board</h1>
                    <img src={board_dark} className='board'/>
                    <a onClick={()=>{openPDF("HighInk_compressed.pdf")}}>Download</a>
                </div>
                <div className='board-hold'>
                    <h1>Light-scale board</h1>
                    <img src={board_light} className='board'/>
                    <a onClick={()=>{openPDF("LowInk_compressed.pdf")}}>Download</a>
                </div>
            </div>
            
            <div className='board-hold non-board'>
                <h1>Printable Currency</h1>
                <img src={currency} className='board click' onClick={()=>{downloadImage('PrinttAbleCurrency.png')}}/>
            </div>
            
            <div className='board-hold non-board'>
                <h1>Players</h1>
                <div className='players-grid'>
                    <img src={player_blue} className='click' onClick={()=>{downloadImage('BluePlayer.png')}}/>
                    <img src={player_green} className='click' onClick={()=>{downloadImage('GreenPlayer.png')}}/>
                    <img src={player_orange} className='click' onClick={()=>{downloadImage('OrangePlayer.png')}}/>
                    <img src={player_pink} className='click' onClick={()=>{downloadImage('PinkPlayer.png')}}/>
                    <img src={player_red} className='click' onClick={()=>{downloadImage('RedPlayer.png')}}/>
                    <img src={player_yellow} className='click' onClick={()=>{downloadImage('YellowPlayer.png')}}/>
                </div>
            </div>
        </div>
    );
}

export default Play;
