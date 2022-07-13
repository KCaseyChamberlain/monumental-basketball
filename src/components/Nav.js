import React from 'react';
import { FaBasketballBall } from "react-icons/fa"

function Nav() {
    return (
        <header className='flex-row center'>
            <FaBasketballBall size={40} />
            <h2>Monumental Basketball</h2>
            <FaBasketballBall size={40} />
        </header>
    );
}

export default Nav;