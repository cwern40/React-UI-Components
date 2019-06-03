import React from 'react';
import './Button.css';

const Number = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
}

export default Number;