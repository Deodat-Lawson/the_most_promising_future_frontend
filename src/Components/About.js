import React from 'react';
import { Book, Briefcase, GraduationCap } from 'lucide-react';
import './About.css';
import Navbar from "./Navbar";
import HomeBackground from "../Assets/HomeBackground.mp4";
import pfp from "../Assets/pfp.jpg";

const About = () => {

    const credentials = [
        {
            icon: <GraduationCap size={32} />,
            title: "Education",
            items: [
                "Bachelor's of Science in Computer Science - Johns Hopkins University",
            ]
        },
        {
            icon: <Briefcase size={32} />,
            title: "Experience",
            items: [
                "5 years as Software Engineer/Developer",
                "2 years as IT Manager",
            ]
        },
        {
            icon: <Book size={32} />,
            title: "Specializations",
            items: [
                "Full Stack Development",
                "Frontend and Backend Framework",
                "Machine Learning/AI/Deep Learning",
            ]
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


            <div className="about-page" style={{
                width: "65%", margin: "0 auto", paddingTop: '64px'
            }}>
                {/* Hero Section */}
                <div className="about-hero">
                    <div className="profile-container">
                        <div className="profile-image">
                            <img src={pfp} alt="Timothy Lin"/>
                        </div>
                        <h1>Timothy Lin</h1>
                        <p className="title">Founder & CEO</p>
                    </div>
                </div>

                {/* Personal Story Section */}
                <div className="about-container">
                    <section className="story-section">
                        <h2>About Me</h2>
                        <p>
                            I am a junior studying Computer Science, Applied Math and Statistics, and Finance at Johns Hopkins University. I have passion developing complex algorithms, machine learning projects, and quantitative modeling.
                        </p>
                        <p>
                            University Application has long been a tough process to go through. I have been through the process and I understand the stress and anxiety that comes with it. That's why I developed NORA to help students go through the process with ease.
                        </p>
                    </section>

                    {/* Credentials Grid */}
                    <section className="credentials-section">
                        <div className="credentials-grid">
                            {credentials.map((credential, index) => (
                                <div key={index} className="credential-card">
                                    <div className="credential-icon">
                                        {credential.icon}
                                    </div>
                                    <h3>{credential.title}</h3>
                                    <ul>
                                        {credential.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* Contact Section */}
                    <section className="contact-section">
                        <h2 style={{color: "white"}}>Let's Connect</h2>
                        <p>
                            I'm always excited to meet new students and progress together.
                            If you have any questions or just want to chat, feel free to reach out to me on LinkedIn.
                        </p>
                        <button
                            className="cta-button"
                            onClick={() => window.location.href = 'https://www.linkedin.com/in/tlin2004/'}>
                            Connect on LinkedIn
                        </button>
                    </section>
                </div>

                {/* Footer */}
                <footer className="about-footer">
                    <p>© 2024 The Most Promising Future. All rights reserved.</p>
                </footer>
            </div>
        </div>
            );
            };

            export default About;