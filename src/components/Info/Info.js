import React from 'react';
import './Info.css';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div className="info_container">
            <div>
                <h5>INFORMATION</h5>
                <Link to="/">ABOUT US</Link>
                <Link to="/">FAIR GAMMING</Link>
                <Link to="/">PRIVACY POLICY</Link>
                <Link to="/">COOKIE POLICY</Link>
                <Link to="/">RESPONSIBLE GAMING</Link>
            </div>
            <div>
                <h5>PLAYER SUPPORT</h5>
                <Link to="/">BANKKING</Link>
                <Link to="/">FAQ'S</Link>
                <Link to="/">CONTACT US</Link>
                <Link to="/">TERMS AND CONDITIONS</Link>
                <Link to="/">BONUSES TERMS AND CONDITIONS</Link>
            </div>
            <div>
                <h5>ONLINE CASINO</h5>
                <Link to="/">LIVE CASINO</Link>
                <Link to="/">ONLINE SLOTS</Link>
                <Link to="/">JACKPOT GAMES</Link>
                <Link to="/">ONLINE ROULETTE</Link>
                <Link to="/">ONLINE BLACKJACK</Link>
            </div>
            <div>
                <h5>USEFUL LINKS</h5>
                <Link to="/">BLOG</Link>
                <Link to="/">AFFILIATES</Link>
                <Link to="/">REAL MONEY CASINO</Link>
            </div>
        </div>
    )
}

export default Info;
