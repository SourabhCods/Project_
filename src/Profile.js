import React from 'react';
import './Profile.css';
import profile from './profile.png';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username;

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/Login');
    } else {
      axios.get('http://localhost:8080/verifyToken', { headers: { 'Authorization': `Bearer ${token}` } })
        .then(response => {
          console.log('Token is valid');
        })
        .catch(error => {
          console.error('Invalid token', error);
          navigate('/Login');
        });
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <main className="home-main">
        <aside className="profile-sidebar">
          <h2>Your Profile</h2>
          <img src={profile} alt="profile" height="110px" />
          {username && <b>{username}</b>}
          <button>About</button>
        </aside>
        <section className="profile-details">
          <div className="card">Skills</div>
          <div className="card">Projects</div>
          <div className="card">Coding Profiles</div>
          <div className="card">Achievements</div>
        </section>
        <section className="profile-extra">
          <div className="extra-section">Your Connections</div>
          <div className="extra-section">Collaborative Projects</div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
