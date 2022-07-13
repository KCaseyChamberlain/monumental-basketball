import React from "react";

function Player(props) {

    return (
        <section className="player-card">
            <h3 className="player-name">{props.playerName}</h3>
            <img
                className='player-image'
                src={props.imageUrl}
                alt='player headshot'
            />
            <div className="player-stats flex-row space-between">
                <p>{props.birthDate}</p>
                <p>ht. {props.height}</p>
                <p>{props.weight} lbs</p>
            </div>
        </section>
    );
}

export default Player;