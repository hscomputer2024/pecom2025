//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//import Hello from './Hello';
//import Talbagicha from './Hello';

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Clicked from './suc_Login';
import Clicked2 from './suc_Registration';
import Admin_dashboard from './Admin_dashboard';*/

import Admin_dashboard from './Admin_dashboard';
import Employee_dashboard from './Employee_dashboard';
import PLogin from './PLogin';
import URegistration from './URegistration';
import SRegistration from './SRegistration';
import User_dashboard from './User_dashboard';
import Check_Stocks from './Check_Stocks';
import Check_Menu from './Check_Menu';
import Check_Offer from './Check_Offer';
import User_Bill from './User_Bill';
import S_Bill from './S_Bill';
import UFilter from './UFilter';
function App() {
  return(
    <>
      {/*<Employee_dashboard />*/}
      <Admin_dashboard />
      {/*<PLogin />*/}
      {/*<URegistration />*/}
      {/*<SRegistration />*/}
      {/*<User_dashboard />*/}
      {/*<Check_Stocks />*/}
      {/*<Check_Menu />*/}
      {/*<Check_Offer />*/}
      {/*<User_Bill />*/}
      {/*<S_Bill />*/}
      {/*<UFilter />*/}
    </>
  );
}
export default App
/*function MyApp(){
  return(
    <>
    <h1>I am here</h1>
    <Hello />
    </>
  );
}*/
/*function App(){
  return(
    //<Login />
    //<Registration />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/successL" element={<Clicked />} />
        <Route path="/successR" element={<Clicked2 />} />
      </Routes>
    </Router>
  );
}
//export default App

export default App*/

