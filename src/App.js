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
import Services from './Components/Services';
import About from './Components/About';
import Logout from "./Components/LoginAndRegistration/Logout";
import DemoResult from "./Components/UniversityAppPlanning/demoResult";
import FeatureUnavailable from "./Components/FeatureUnavailable";

function App() {
    return (
        <BrowserRouter>

            <div className="App">

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/timer" element={<Timer/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/featureUnavailable" element={<FeatureUnavailable/>}/>

    
                    <Route path="/planning/life" element={<LifePlanning/>}/>
                    <Route path="/planning/life/form" element={<LifePlanningForm/>}/>


                    <Route path="/universityApp/" element={<UniAppPlanning/>}/>
                    <Route path="/universityApp/form" element={<UniAppPlanningForm/>}/>
                    <Route path="/universityApp/demoResult" element={<DemoResult/>}/>

                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/logout" element={<Logout/>}/>

                </Routes>
            </div>
        </BrowserRouter>

    );
}


export default App;