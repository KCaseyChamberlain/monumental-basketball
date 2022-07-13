import React, { Component } from "react";
import Player from "./Player.js";
import players from "../players.json";

class Players extends Component {
    
    state = {
        players
    };

    render() {

        return (
            <section className='flex-row'>
                <div className='container flex-row space-between'>
                    {
                        this.state.players.map(player => (
                            <Player
                                personId={player.personId}
                                playerName={player.playerName}
                                birthDate={player.birthDate}
                                imageUrl={player.imageUrl}
                                yearsProService={player.yearsProService}
                                height={player.height}
                                weight={player.weight}
                            />
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Players;