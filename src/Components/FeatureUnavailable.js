import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft, Clock } from 'lucide-react';
import './FeatureUnavailable.css';

const FeatureUnavailable = () => {
    const navigate = useNavigate();

    return (
        <div className="feature-unavailable">

            <div className="animated-bg">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-circle" style={{
                        animationDelay: `${i * 0.5}s`
                    }} />
                ))}
            </div>

            <div className="content-container">
                <div className="icon-container">
                    <Construction className="construction-icon" size={64} />
                </div>

                <h1>Feature Coming Soon</h1>

                <div className="message-container">
                    <p className="main-message">
                        We're working hard to bring this feature to life!
                    </p>
                    <div className="status-badge">
                        <Clock size={20} />
                        <span>Under Development</span>
                    </div>
                </div>

                <div className="info-text">
                    <p>This feature is currently under development and will be available in a future update.</p>
                    <p>Thank you for your patience!</p>
                </div>

                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft size={20} />
                    Return to Previous Page
                </button>
            </div>
        </div>
    );
};

export default FeatureUnavailable;