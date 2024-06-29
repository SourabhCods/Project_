import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing({ onGetStarted, onSignup }) {
  return (
    <div className="landing-container">
      <h1>Welcome to TechMatch</h1>
      <p>Find the perfect tech job match for you!</p>
      <Link to="/Login" > <button className="heading">Login</button></Link>
      <Link to="/Signup" > <button className="heading">Signup</button></Link>
    </div>
  );
}

export default Landing;
