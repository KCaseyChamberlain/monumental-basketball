import React from "react";

function Player(props) {

    return (
        <section className="player-card">
            <h3 className="player-name"></h3>
            <img
                className='player-image'
                src={props.img}
                alt=''
            />
            <div className="player-stats">
            </div>
        </section>
    );
}

export default Player;