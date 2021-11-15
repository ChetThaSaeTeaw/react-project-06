import React from 'react';
import { Link } from 'react-router-dom';
import './GameMenu.css';

function GameMenu() {
    return (
        <div className="gamemenu_container">
            <ul>
                <li><Link to="/">Featured Games</Link></li>
                <li><Link to="/">Live Casino</Link></li>
                <li><Link to="/">Table Games</Link></li>
                <li><Link to="/">3D Slots</Link></li>
                <li><Link to="/">Slots</Link></li>
                <li><Link to="/">Video Poker</Link></li>
                <li><Link to="/">Other Games</Link></li>
            </ul>
        </div>
    )
}

export default GameMenu;
