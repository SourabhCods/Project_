// 


import React from 'react';
import './Home.css';
import ProLogo from './ProLogo.png';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Techmatch</h1>
                <p>Find your Companion today!</p>
            </header>
            <main className="home-main">
                <div className="card">
                    <img src={ProLogo} alt="ProLogo" height="150px"/>
                    <h2>Username</h2>
                    <p>Short bio or description...</p>
                </div>
            </main>
            <footer className="home-footer">
                <button className="home-button">Get Started</button>
            </footer>
        </div>
    );
};

export default Home;
