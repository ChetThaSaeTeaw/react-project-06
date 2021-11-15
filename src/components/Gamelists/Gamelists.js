import React from 'react';
import './Gamelists.css';
import { listsgames } from './Listsgames';

function Gamelists() {
    const gameList = listsgames.map((game , index) => {
        return (
            <div className="game_container" key={index}>
                <img src={game.gamePic} alt={game.gameTitle} />
                <div className="overlay_game">
                    <p>{game.gameTitle}</p>
                    <i className="fas fa-play-circle"></i>
                </div>
            </div>
        )
    })
    return (
        <div className="gamelists_contianer">
            {gameList}
        </div>
    )
}

export default Gamelists;
