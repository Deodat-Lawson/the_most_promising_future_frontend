import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';
import Navbar from "./Navbar";
import HomeBackground from "../Assets/HomeBackground.mp4";

const Services = () => {
    const services = [
        {
            title: "Quick Guide",
            description: "Get an idea of where you are at in the process of application and what you need to do next.",
            features: [
                "University Recommendation",
                "Current Application Overview",
                "General Overview",
            ],
            link: "/universityApp/"
        },
        {
            title: "Pomodoro Timer (Beta)",
            description: "Improve your productivity and focus with the Pomodoro technique. Our timer helps you break down work into intervals, allowing you to work efficiently and take regular breaks.",
            features: [
                "Customizable work intervals",
                "Break reminders",
                "Task tracking",
                "Progress visualization",
                "Time management tips"
            ],
            link: "/timer"
        },
        {
            title: "University Matching",
            description: "Our comprehensive university matching service helps you find the perfect institution based on your academic profile, interests, and career goals. We analyze factors such as academic programs, campus culture, location, and admission requirements to provide personalized recommendations.",
            features: [
                "Personalized university shortlisting",
                "Academic profile evaluation",
                "Admission probability assessment",
                "Location and culture matching",
                "Budget and financial aid guidance"
            ],
            link: "/featureUnavailable"
        },
        {
            title: "Application Guidance",
            description: "Navigate the complex university application process with confidence. Our experienced counselors provide step-by-step guidance on applications, essays, and documentation requirements for your target universities.",
            features: [
                "Application strategy planning",
                "Essay writing assistance",
                "Document preparation support",
                "Portfolio development",
                "Interview preparation"
            ],
            link: "/featureUnavailable"
        },
        {
            title: "Career Planning",
            description: "Build a strong foundation for your future career. Our career planning services help you align your academic choices with your professional aspirations, ensuring you're on the right path to achieve your career goals.",
            features: [
                "Career assessment and exploration",
                "Major selection guidance",
                "Industry insights and trends",
                "Internship planning",
                "Professional development roadmap"
            ],
            link: "/featureUnavailable"
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

            <div className="services-page" style={{paddingTop: '64px', width: "65%", margin: "0 auto"}}>
                {/* Header Section */}


                <div className="services-header">
                    <h1 style={{color:'white'}}>Our Services</h1>
                    <p>Comprehensive support for your academic journey, from university selection to career
                        planning.</p>
                </div>

                {/* Services Section */}

                <div className="services-container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-header">
                                    <div className="service-icon">
                                        {service.icon}
                                    </div>
                                    <h2>{service.title}</h2>
                                </div>

                                <p className="service-description">{service.description}</p>

                                <div className="features-container">
                                    <h3>Key Features:</h3>
                                    <ul className="features-list">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <div className="feature-dot"/>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a href={service.link} className="learn-more-link">
                                    Learn More <ArrowRight size={20}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <footer className="services-footer">
                    <p>© 2024 The Most Promising Future. All rights reserved.</p>
                </footer>
            </div>

        </div>
            );
            };

            export default Services;