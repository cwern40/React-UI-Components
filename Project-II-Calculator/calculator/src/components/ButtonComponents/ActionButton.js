import React from 'react';
import './Button.css';

const Actionbutton = props => {
    return (
        <button className="large">{props.text}</button>
    );
};

export default Actionbutton