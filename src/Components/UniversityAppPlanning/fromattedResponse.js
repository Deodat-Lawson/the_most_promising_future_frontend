import React from 'react';
import './FormattedResponse.css';

const FormattedResponse = ({ response }) => {
    const parseResponse = (text) => {
        const sections = text.split('\n\n');
        return sections.map((section, index) => {
            if (section.startsWith('Skill Level Overview:')) {
                return (
                    <div key={index}>
                        <h3>Skill Level Overview</h3>
                        <span key={index} className="fade-in-word"
                              style={{animationDelay: `${index * 0.1}s`}}>
                            {section.replace('Skill Level Overview:', '').trim()}
                        </span>
                    </div>
                );
            } else if (section.startsWith('University Suggestions:')) {
                const suggestions = section.replace('University Suggestions:', '').trim().split('\n').map((item) => item.trim());
                return (
                    <div key={index}>
                        <h3>University Suggestions</h3>
                        <span key={index} className="fade-in-word"
                              style={{animationDelay: `${index * 0.1}s`}}>
                            {suggestions.map((suggestion, idx) => (
                                <li key={idx}>{suggestion}</li>
                            ))}
                        </span>
                    </div>
                );
            } else if (section.startsWith('Improvement Recommendations:')) {
                const recommendations = section.replace('Improvement Recommendations:', '').trim().split('\n').map((item) => item.trim());
                return (
                    <div key={index}>
                        <h3>Improvement Recommendations</h3>
                        <span key={index} className="fade-in-word"
                              style={{animationDelay: `${index * 0.1}s`}}>
                            {recommendations.map((recommendation, idx) => (
                                <li key={idx}>{recommendation}</li>
                            ))}
                        </span>
                    </div>
                );
            }
            return <span key={index} className="fade-in-word"
                         style={{animationDelay: `${index * 0.1}s`}} >{section}</span>;
        });
    };

    return (
        <div style={{ fontFamily: 'Times New Roman, serif', textAlign:'left' }}>
            {parseResponse(response)}
        </div>
    );
};

export default FormattedResponse;
