import React from 'react';
import { Book, Briefcase, GraduationCap, Award } from 'lucide-react';
import './About.css';
import Navbar from "./Navbar";
import HomeBackground from "../Assets/HomeBackground.mp4";

const About = () => {

    const credentials = [
        {
            icon: <GraduationCap size={32} />,
            title: "Education",
            items: [
                "Master's in Education Counseling - Stanford University",
                "Bachelor's in Psychology - Harvard University",
                "Certified College Counselor (CCC)"
            ]
        },
        {
            icon: <Briefcase size={32} />,
            title: "Experience",
            items: [
                "10+ years as University Admissions Officer",
                "5 years as Head of College Counseling",
                "Educational Consultant for International Students"
            ]
        },
        {
            icon: <Award size={32} />,
            title: "Achievements",
            items: [
                "Helped 1000+ students secure university admissions",
                "95% success rate in top-choice placements",
                "Featured in Education Weekly Magazine"
            ]
        },
        {
            icon: <Book size={32} />,
            title: "Specializations",
            items: [
                "International University Applications",
                "Scholarship Application Strategy",
                "Career Path Development"
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
                            <img src="/api/placeholder/150/150" alt="Timothy Lin"/>
                        </div>
                        <h1>Timothy Lin</h1>
                        <p className="title">Founder & CEO</p>
                    </div>
                </div>

                {/* Personal Story Section */}
                <div className="about-container">
                    <section className="story-section">
                        <h2>My Story</h2>
                        <p>
                            My journey in educational consulting began when I witnessed talented students
                            struggling to navigate the complex university admission process. With over 15 years
                            of experience in higher education, I've dedicated my career to helping students
                            unlock their full potential and access the best educational opportunities.
                        </p>
                        <p>
                            Having served as both a university admissions officer and college counselor,
                            I understand the admissions process from both sides. This unique perspective
                            allows me to provide invaluable insights to my students, helping them present
                            their strongest applications and find their perfect university match.
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

                    {/* Philosophy Section */}
                    <section className="philosophy-section">
                        <h2>My Approach</h2>
                        <p>
                            I believe every student has unique potential that deserves to be recognized
                            and nurtured. My approach combines personalized attention with data-driven
                            insights to help students make informed decisions about their academic future.
                            I work closely with each student to understand their aspirations, strengths,
                            and challenges, creating tailored strategies that lead to successful outcomes.
                        </p>
                    </section>

                    {/* Contact Section */}
                    <section className="contact-section">
                        <h2 style={{color: "white"}}>Let's Connect</h2>
                        <p>
                            I'm always excited to meet new students and help them on their academic journey.
                            Whether you're just starting to think about universities or ready to begin the
                            application process, I'm here to help.
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