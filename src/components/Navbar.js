import React, {useState} from 'react';
import '../styles/Navbar.css'
import {NavLink} from 'react-router-dom'
import stingray from '../assets/stingray.png'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleHandler= () => {
        setMenuOpen((p) => !p);
    }

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <img src={stingray} alt=""/>
                        Anirban
                    </div>
                    <div className={`${"navbar-item"} ${menuOpen? "" : "is-menu" }`}>
                        <NavLink to="/Portfolio" activeClassName="navlinks" onClick={toggleHandler}>Home</NavLink>
                        <NavLink to="/about" activeClassName="navlinks" onClick={toggleHandler}>About</NavLink>
                        <NavLink to="/work" activeClassName="navlinks" onClick={toggleHandler}>Work</NavLink>
                        <NavLink to="/contact" activeClassName="navlinks" onClick={toggleHandler}>Contact</NavLink>
                    </div>
                    <div className="menu-toggle">
                        {menuOpen? <FaTimes onClick={toggleHandler} /> : <FaBars onClick={toggleHandler} />}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
