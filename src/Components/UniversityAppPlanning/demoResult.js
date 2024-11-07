import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FormattedResponse from "./fromattedResponse";

function DemoResult() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data;

    if (!data) {
        return (
            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(45deg, #1a365d, #2563eb)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px 20px'
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '40px',
                    borderRadius: '20px',
                    textAlign: 'center',
                    color: 'white',
                    maxWidth: '500px',
                    width: '100%'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>No Results Available</h2>
                    <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
                        Please complete the university application form to see your matches.
                    </p>
                    <button
                        onClick={() => navigate('/form')}
                        style={{
                            background: 'white',
                            color: '#2563eb',
                            border: 'none',
                            padding: '15px 30px',
                            borderRadius: '10px',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <ArrowLeft /> Go to Application Form
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(45deg, #1a365d, #2563eb)',
            padding: '40px 20px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Header Section */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '40px',
                    gap: '20px'
                }}>
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            background: 'white',
                            border: 'none',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <ArrowLeft /> Back
                    </button>

                    <h1 style={{
                        color: 'white',
                        margin: 0,
                        fontSize: '2.5rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}>Your University Matches</h1>
                </div>

                {/* Results Grid */}
                <div style={{
                    display: 'grid',
                    gap: '30px'
                }}>
                    {Array.isArray(data) ? data.map((item, index) => (
                        <div key={index} style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: '20px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        }}>
                            <pre style={{
                                margin: 0,
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                fontSize: '1.1rem',
                                fontFamily: 'Monaco, monospace',
                                lineHeight: 1.5,
                                color: '#1a365d'
                            }}>
                                <FormattedResponse response={item} />
                            </pre>
                        </div>
                    )) : (
                        <div style={{
                            background: 'white',
                            padding: '30px',
                            borderRadius: '20px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        }}>
                            <pre style={{
                                margin: 0,
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                fontSize: '1.1rem',
                                fontFamily: 'Monaco, monospace',
                                lineHeight: 1.5,
                                color: '#1a365d'
                            }}>
                                <FormattedResponse response={data} />
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DemoResult;