import React from 'react';
import './Navbar.css';
import sms from './sms.jpg';
import bell from './bell.png';
import profile from './profile.png';
import { Link } from 'react-router-dom';
import Home from './Home';


export default function Navbar() {
  return (
   
    <div>
      <nav className='navbar'>
        <div className='head'>
        <Link to="/Home" > <button className="heading">Home</button></Link>
        <Link to="/Courses" ><button className="heading">Courses</button></Link>
       
        <Link to="/requests" ><button className="heading">Connection Requests</button></Link>
        
        <div className="icons">
        <Link to="/Landing" ><button className="heading">Login/Signup</button></Link>
          <Link to="/messages">
         <button className="sms">
             <img src={sms} alt="sms" height="40px" />
           </button>
           </Link> 
           <Link to="/notification">
           <button className="sms">
             <img src={bell} alt="bell" height="40px" />
           </button>
           </Link>
           <Link to="/Profile">
           <button className="sms">
             <img src={profile} alt="profile" height="40px" />
           </button>
           </Link>
          </div>
        </div>

      </nav>
    </div>
  );
}





