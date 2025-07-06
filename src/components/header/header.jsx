import { useState } from 'react'

import menu from '/menu.svg'
import close from '/close.svg'
import logo from '/logo-white.svg'
import './style.css'

function Header(){
    const [isOpen, setOpen] = useState(false)

    const showMenu = ()=>{
        setOpen(!isOpen);
    }

    const openPDF = ()=>{
        window.open('/docs/rules.pdf', '_blank');
    };

    return(
        <div className={`header${isOpen ? ' header-open' : ' header-closed'}`}>
            <nav className='head-cont nav'>
                <div className='selectors'>
                    <a href="/" className='head-logo'><img src={logo}/></a>

                    <div className='nav-tog' onClick={showMenu}>
                        {isOpen ? <img src={close} className='nav-close' />
                                : <img src={menu} className='nav-open' />}
                    </div>

                    <div className={`nav-opt${isOpen ? ' show-opt' : ''}`}>
                        <ul className='nav-list'>
                            <li><a href="/" className='link'>HOME</a></li>
                            <li><a href="/play" className='link'>PLAY</a></li>
                            <li><a href="/story" className='link'>BACKSTORY</a></li>
                            <li><a onClick={openPDF} className='link'>RULES</a></li>
                            <li><a href="/analysis" className='link'>ANALYSIS</a></li>
                            <li><a href="/meeting-minutes" className='link'>MEETING MINUTES</a></li>
                            <li><a href="/credits" className='link'>CREDITS</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;