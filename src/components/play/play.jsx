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