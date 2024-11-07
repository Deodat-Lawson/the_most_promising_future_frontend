import React from 'react';
import {Search, BookOpen, School, ArrowRight, Clock} from 'lucide-react';
import './Home.css';
import Navbar from "./Navbar";
import HomeBackground from '../Assets/HomeBackground.mp4';
import { useNavigate} from "react-router-dom";
import logo from '../Assets/logo2.png';
import {useUser} from "./context/userContext";

const Home = () => {
    const {user} = useUser();
    const navigate = useNavigate();
    const services = [
        {
            icon: <Search size={32}/>,
            title: "University Matching",
            description: "Find the perfect university based on your academic goals, interests, and preferences."
        },
        {
            icon: <BookOpen size={32}/>,
            title: "Application Guidance",
            description: "Get expert assistance with your applications, essays, and required documents."
        },
        {
            icon: <School size={32}/>,
            title: "Career Planning",
            description: "Align your university choice with your future career aspirations."
        },
        {
            icon: <Clock size={32}/>,
            title: "Pomodoro Timer",
            description: "Use the Pomodoro technique to manage your time and improve your productivity."
        }
    ];

    return (
        <div className="video-background">
            <Navbar/>

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

            <div style={{
                width: "65%", margin: "0 auto"
            }}>
                {/* Hero Section */}
                <div style={{
                    padding: '80px 20px',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'

                }}>
                    <img src={logo} alt="logo" style={{
                        width: '200px',
                        margin: '0 auto 32px',
                        marginTop: '5rem'
                    }}/>

                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#1a365d',
                        marginBottom: '24px',
                    }}>
                        New Outlooks, Real Achievements
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        color: '#4a5568',
                        maxWidth: '800px',
                        margin: '0 auto 32px'
                    }}>
                        Your journey to academic excellence starts here. Let us guide you to the university that best
                        fits your aspirations.
                    </p>
                    <button style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '12px 24px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'



                    }}
                            onClick={user && user.data.username ? (
                                ()=> navigate('/services')
                            ) : (
                                ()=> navigate('/register')
                            )}>
                        Get Started
                        <ArrowRight/>
                    </button>
                </div>

                {/* Services Section */}
                <div style={{
                    padding: '80px 20px',
                    flex: 1,
                    backgroundColor: '#f8fafc'
                }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        color: '#1a365d',
                        textAlign: 'center',
                        marginBottom: '48px'
                    }}>
                        Our Services
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '32px',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 20px'
                    }}>
                        {services.map((service, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '32px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    color: '#2563eb',
                                    marginBottom: '16px'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: '#1a365d',
                                    marginBottom: '16px'
                                }}>
                                    {service.title}
                                </h3>
                                <p style={{
                                    color: '#4a5568',
                                    lineHeight: '1.6'
                                }}>
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '80px 20px',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '24px',
                        color: 'white'
                    }}>
                        Ready to Shape Your Future?
                    </h2>
                    <p style={{
                        fontSize: '20px',
                        marginBottom: '32px',
                        opacity: 0.9
                    }}>
                        Try out a free consultation with our AI education experts to right now.
                    </p>
                    <button style={{
                        backgroundColor: 'white',
                        color: '#2563eb',
                        padding: '12px 32px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                            onClick={() => navigate('/universityApp/form')}>
                        Demo
                    </button>
                </div>

                {/* Footer */}
                <footer style={{
                    backgroundColor: '#1a365d',
                    color: 'white',
                    padding: '24px',
                    textAlign: 'center'
                }}>
                    <p>© 2024 The Most Promising Future. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;