import React from "react";
import Player from "./Player.js";
import players from "../players.json";

function Person() {

    return (
        <section className='flex-row'>
            <div className='container'>
                {
                    <Player/>
                }
            </div>
        </section>
    );
}

export default Person;