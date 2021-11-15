import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoMYB from '../../Image/logomyb.png';

function Navbar() {
    return (
        <div className="navbar_container">
            <div>
                <img src={logoMYB} alt="Logo_Pic" />
                <Link to="/">Casino</Link>
                <Link to="/">Bonuses</Link>
                <Link to="/">Banking</Link>
                <Link to="/">Support</Link>
            </div>
            <div>
                <div>
                    <Link to="/">Login</Link>
                </div>
                <div>
                    <Link to="/">JOIN NOW</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
