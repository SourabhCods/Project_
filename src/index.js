import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Rou from './Rou';
import Login from './Login';
import SignUp from './Signup';
import Home from './Home';
import Course from './Course';
import Crequest from './Crequest';
// import Landing from './Landing';
import Message from './Message';
import Notification from './Notification';
import Profile from './Profile';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Rou/> */}
    
    {/* <Home/> */}
    {/* <Course/>
    <Crequest/>
    <Message/>
    <Notification/>
    <Profile/>
    <Login/>
    <SignUp/>
     */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

