import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, Star } from 'lucide-react';
import './UniAppPlanning.css';
import HomeBackground from "../../Assets/HomeBackground.mp4";

const UniAppPlanning = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleFormPage = () => {
        navigate('/universityApp/form');
    };

    return (
        <div className="app-container">
            {/* Background Video */}
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                >
                    <source
                        src={HomeBackground}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"/>
            </div>

            {/* Animated Background Elements */}
            <div className="floating-elements">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="floating-icon"
                        style={{
                            animationDelay: `${index * 0.5}s`,
                            left: `${index * 20}%`
                        }}
                    >
                        {index % 2 === 0 ? <GraduationCap size={24} /> : <Star size={24} />}
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h1 className="main-title">
                    NORA Quick Guide
                </h1>

                <div className="features-grid">
                    <div className="feature-card">
                        <GraduationCap size={32} />
                        <h3 style={{color:'white'}}>Personalized Guidance</h3>
                        <p>Get tailored university recommendations based on your profile</p>
                    </div>
                    <div className="feature-card">
                        <Star size={32} />
                        <h3 style={{color:'white'}}>Expert Insights</h3>
                        <p>Learn from comprehensive analysis of your academic strengths</p>
                    </div>
                </div>

                <button
                    className="start-button"
                    onClick={handleFormPage}
                    aria-label="Start Application Process"
                >
                    <span>Try Out Now</span>
                    <ArrowRight size={20} />
                </button>

                <div className="info-text" style={{color:'white'}}>
                    Begin your journey to academic success today
                </div>
            </div>
        </div>
    );
};

export default UniAppPlanning;