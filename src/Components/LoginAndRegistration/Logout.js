import React, { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useImmerReducer } from 'use-immer';
import { useUser } from "../context/userContext";
import Navbar from "../Navbar";
import { LogOut, Home } from 'lucide-react';
import HomeBackground from "../../Assets/HomeBackground.mp4";

function Logout() {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const initialState = {
        sendRequest: 0,
        errorMessage: ''
    };

    function ReducerFunction(draft, action) {
        switch (action.type) {
            case "changeSendRequest":
                draft.sendRequest = draft.sendRequest + 1;
                break;
            case 'setErrorMessage':
                draft.errorMessage = action.errorMessage;
                break;
            default:
                break;
        }
    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

    function FormSubmit() {
        dispatch({ type: 'changeSendRequest' });
    }

    useEffect(() => {
        if (state.sendRequest) {
            const source = Axios.CancelToken.source();

            async function Logout() {
                try {
                    const response = await Axios.post('http://3.22.143.86:8000/user/logout/', {},
                        { cancelToken: source.token }
                    );
                    console.log(response.data);
                    setUser(null);
                    navigate('/');
                } catch (error) {
                    console.log(error);
                    dispatch({
                        type: 'setErrorMessage',
                        errorMessage: 'Logout failed. Please try again.'
                    });
                }
            }

            Logout();
            return () => {
                source.cancel();
            }
        }
    }, [setUser, dispatch, navigate, state.sendRequest]);

    return (
        <div style={{
            minHeight: '100vh',
            background: 'transparent',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background */}

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

            <Navbar/>

            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 64px)', // Adjust based on navbar height
                padding: '20px'
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '40px',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    maxWidth: '400px',
                    width: '100%',
                    animation: 'fadeIn 0.5s ease-out'
                }}>
                    <h1 style={{
                        color: 'white',
                        fontSize: '28px',
                        marginBottom: '24px'
                    }}>
                        Logout Confirmation
                    </h1>

                    {state.errorMessage && (
                        <div style={{
                            color: '#ff4d4f',
                            background: 'rgba(255, 77, 79, 0.1)',
                            padding: '12px',
                            borderRadius: '8px',
                            marginBottom: '20px'
                        }}>
                            {state.errorMessage}
                        </div>
                    )}

                    <button
                        onClick={FormSubmit}
                        style={{
                            backgroundColor: 'white',
                            color: '#2563eb',
                            padding: '12px 32px',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease',
                            marginBottom: '24px'
                        }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <LogOut size={20}/> Logout
                    </button>

                    <div style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '14px'
                    }}>
                        Mis-clicked? {' '}
                        <button
                            onClick={() => navigate('/')}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                padding: '4px 8px',
                                fontSize: '14px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}
                        >
                            <Home size={16}/> Return Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;