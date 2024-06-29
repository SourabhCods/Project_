import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Course from './Course';
import Crequest from './Crequest';
import Notification from './Notification';
import Message from './Message';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import other components as needed

const RouExample = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/courses' element={<Course/>}></Route>
      <Route path='/requests' element={<Crequest/>}></Route>
      <Route path='/Notification' element={<Notification/>}></Route>
      <Route path='/Messages' element={<Message/>}></Route>
    </Routes>
    </BrowserRouter>
  )
} 

export default RouExample;
