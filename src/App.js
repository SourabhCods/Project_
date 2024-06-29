import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Course from './Course';
import Crequest from './Crequest';
import Notification from './Notification';
import Message from './Message';
import Landing from './Landing';
import SplashScreen from './SplashScreen';
import Login from './Login';
import Signup from './Signup';

function MainApp() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Landing />
      )}
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainApp/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/courses' element={<Course/>}></Route>
        <Route path='/requests' element={<Crequest/>}></Route>
        <Route path='/Notification' element={<Notification/>}></Route>
        <Route path='/Messages' element={<Message/>}></Route>
        <Route path='/Landing' element={<Landing/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
