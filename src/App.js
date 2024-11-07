// src/App.js
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Timer from './Components/Timer';
import LifePlanning from './Components/LifePlanning/LifePlanning';
import LifePlanningForm from './Components/LifePlanning/Form';
import UniAppPlanning from './Components/UniversityAppPlanning/UniAppPlanning';
import UniAppPlanningForm from './Components/UniversityAppPlanning/UniAppPlanningForm';
import Registration from './Components/LoginAndRegistration/Register';
import Login from './Components/LoginAndRegistration/Login';
import Home from './Components/Home';

function App() {
    return (
        <BrowserRouter>

        <div className="App">
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo" />*/}
            {/*    <p>Edit <code>src/App.js</code> and save to reload.</p>*/}
            {/*    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">*/}
            {/*        Learn React*/}
            {/*    </a>*/}
            {/*</header>*/}

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/timer" element={<Timer />} />
                        <Route path="/register" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/planning/life" element={<LifePlanning />} />
                        <Route path="/planning/life/form" element={<LifePlanningForm />} />
                        <Route path="/universityApp/" element={<UniAppPlanning />} />
                        <Route path="/universityApp/form" element={<UniAppPlanningForm />} />
                    </Routes>
        </div>
        </BrowserRouter>

    );
}


export default App;