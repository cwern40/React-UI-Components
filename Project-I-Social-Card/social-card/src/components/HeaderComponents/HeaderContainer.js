import React from 'react';
import './Header.css';
import './HeaderContent';
import './HeaderTitle';
import './ImageThumbnail';
import Headerimg from './ImageThumbnail';
import Headertitle from './HeaderTitle';
import Headercontent from './HeaderContent';

const Headercontainer = () => {
    return (
        <div className="header-container">
            <Headerimg />
            <div className="title-section">
                <Headertitle />
                <Headercontent />
            </div>
        </div>
    )
};

export default Headercontainer;