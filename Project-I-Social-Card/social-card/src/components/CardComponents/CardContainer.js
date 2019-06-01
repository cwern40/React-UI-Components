import React from 'react';
import './Card.css';
import './CardBanner';
import './CardContent';
import Cardbanner from './CardBanner';
import Cardcontent from './CardContent';

const Cardcontainer = () => {
    return (
    <div className="card-container">
        <Cardbanner />
        <Cardcontent />
    </div>
    );
}

export default Cardcontainer;