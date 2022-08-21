import React from 'react';
import img from '../../images/NotFound.png'

const NotFound = () => {
    return (
        <div>
            <img className="w-full h-screen" src={img} alt="Not Found" />
        </div>
    );
};

export default NotFound;