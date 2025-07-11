import React, { useState } from 'react';
import './navbar.css';
import AnimationFromUp from '../framerMotion/animationFromUp/AnimationFromUp';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <AnimationFromUp>

            <div className="container">
                <a href='https://arthursattah.github.io/Portfolio/' className='title'>
                    Portfolio
                </a>
                <div className='menus'>
                    <img src={menuOpen === false ? require("../../assets/nav/menuIcon.png") : require("../../assets/nav/closeIcon.png")}
                        alt="menu-Icon"
                        className='imgIcon' onClick={() => setMenuOpen(!menuOpen)} />

                    <ul className={`items ${menuOpen ? "" : "close"} `}>
                        <li className="item">
                            <a href="#about" onClick={() => setMenuOpen(false)}>
                                About
                            </a>
                        </li>
                        <li className="item" onClick={() => setMenuOpen(false)}>
                            <a href="#experiance">
                                Experience
                            </a>
                        </li>
                        <li className="item" onClick={() => setMenuOpen(false)}>
                            <a href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="item" onClick={() => setMenuOpen(false)}>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </AnimationFromUp>
    )
}

export default Navbar
