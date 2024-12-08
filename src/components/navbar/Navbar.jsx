import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <navbar className="container">
            <a href='/' className='title'>
                Portfolio
            </a>
            <div className='menus'>
                <img src={menuOpen===false ? require("../../assets/nav/menuIcon.png") : require("../../assets/nav/closeIcon.png") }
                     alt="menu-Icon" 
                    className='imgIcon'  onClick={()=>setMenuOpen(!menuOpen)}/>

                <ul className={`items ${menuOpen ? "" : "close" } `}>
                    <li className="item">
                        <a href="#about" onClick={()=>setMenuOpen(false)}>
                            About
                        </a>
                    </li>
                    <li className="item" onClick={()=>setMenuOpen(false)}>
                        <a href="#experiance">
                            Experiance
                        </a>
                    </li>
                    <li className="item" onClick={()=>setMenuOpen(false)}>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="item" onClick={()=>setMenuOpen(false)}>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

        </navbar>
    )
}

export default Navbar
