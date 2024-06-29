// src/components/SplashScreen.js

import React from 'react';
import './SplashScreen.css';
import logo from './logo.jpg'

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <img src={logo} alt="logo" className="logo" height="150px" />
            <h1>TechMatch</h1>
            <p>Connecting Tech Enthusiasts and Professionals</p>
        </div>
    );
};

export default SplashScreen;
