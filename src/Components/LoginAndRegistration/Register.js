import React, {useEffect} from "react";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import {AppBar, Grid, Typography, TextField, Button} from "@mui/material";
import {useImmerReducer} from 'use-immer';
import Navbar from "../Navbar";

import "./Register.css";
import HomeBackground from "../../Assets/HomeBackground.mp4";

function Register() {
    const navigate = useNavigate();
    const initialState = {
        usernameValue: '',
        emailValue: '',
        passwordValue: '',
        password2Value: '',
        sendRequest: 0,
        usernameError: '',
        emailError: '',
        passwordError: ''
    }

    function ReducerFunction(draft, action) {
        switch (action.type) {
            case "catchUsernameChange":
                draft.usernameValue = action.usernameChosen;
                break;
            case "catchEmailChange":
                draft.emailValue = action.emailChosen;
                break;
            case "catchPasswordChange":
                draft.passwordValue = action.passwordChosen;
                break;
            case "catchPassword2Change":
                draft.password2Value = action.password2Chosen;
                break;
            case "changeSendRequest":
                draft.sendRequest = draft.sendRequest + 1;
                break;
            case "setUsernameError":
                draft.usernameError = action.errorMessage;
                break;
            case "setEmailError":
                draft.emailError = action.errorMessage;
                break;
            case "setPasswordError":
                draft.passwordError = action.errorMessage;
                break;
            default:
                break;
        }
    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

    function FormSubmit(e) {
        e.preventDefault();
        if (state.passwordValue !== state.password2Value) {
            dispatch({type: 'setPasswordError', errorMessage: 'Passwords do not match'});
        } else {
            console.log("email", state.emailValue);
            dispatch({type: 'changeSendRequest'});
        }
    }

    useEffect(() => {
        if (state.sendRequest) {
            const source = Axios.CancelToken.source();

            async function SignUp() {
                try {
                    console.log("sending request to 3.22.143.86:8000" );
                    const response = await Axios.post('https://api.noraai.org/user/register/', {
                        username: state.usernameValue,
                        email: state.emailValue,
                        password: state.passwordValue,
                        re_password: state.password2Value,
                    }, {cancelToken: source.token});
                    console.log(response);
                    navigate('/login');
                } catch (error) {
                    if (error.response) {
                        if (error.response.data.username) {
                            dispatch({type: 'setUsernameError', errorMessage: 'Username already exists'});
                        }
                        if (error.response.data.email) {
                            dispatch({type: 'setEmailError', errorMessage: 'Email already exists'});
                        }
                    }
                }
            }

            SignUp();
            return () => {
                source.cancel();
            };
        }
    }, [state.sendRequest, navigate, state.usernameValue, state.emailValue, state.passwordValue, state.password2Value, dispatch]);

    return (
        <div>
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

            <div className="page-container">
                <Navbar/>
                <AppBar position="static">
                    <Typography variant="h6">
                        Register
                    </Typography>
                </AppBar>
                <Grid container fullWidth={true} justifyContent="center" alignItems="center"
                      className="registration_container">
                    <Grid item sx={{marginBottom: '20px'}}>
                        <h1>Create Your Account</h1>
                        <form onSubmit={FormSubmit}>
                            <div className="form-group" sx={{
                                marginBottom: 0,
                                marginTop: 0,
                            }}>

                                <TextField
                                    className="registration_text_class"
                                    fullWidth={true}
                                    label="Username"
                                    variant="outlined"
                                    type="registration_text"
                                    value={state.usernameValue}
                                    error={!!state.usernameError}
                                    helperText={state.usernameError}

                                    sx={{
                                        padding: 0,
                                        margin: 0,
                                        '& .MuiInputBase-root': {
                                            height: '50px',
                                        },

                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: '20px', paddingLeft: '8px', paddingTop: '5px'}  // Adjust font size and padding if needed
                                    }}
                                    onChange={(e) => dispatch({
                                        type: 'catchUsernameChange',
                                        usernameChosen: e.target.value
                                    })}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    className="registration_text_class"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={state.emailValue}
                                    error={!!state.emailError}
                                    helperText={state.emailError}

                                    sx={{
                                        padding: 0,
                                        margin: 0,
                                        '& .MuiInputBase-root': {
                                            height: '50px',
                                        },

                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: '20px', paddingLeft: '8px', paddingTop: '5px'}  // Adjust font size and padding if needed
                                    }}
                                    onChange={(e) => dispatch({
                                        type: 'catchEmailChange',
                                        emailChosen: e.target.value
                                    })}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    className="registration_text_class"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    value={state.passwordValue}
                                    error={!!state.passwordError}
                                    helperText={state.passwordError}

                                    sx={{
                                        padding: 0,
                                        margin: 0,
                                        '& .MuiInputBase-root': {
                                            height: '50px',
                                        },

                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: '20px', paddingLeft: '8px', paddingTop: '5px'}  // Adjust font size and padding if needed
                                    }}
                                    onChange={(e) => dispatch({
                                        type: 'catchPasswordChange',
                                        passwordChosen: e.target.value
                                    })}
                                />
                            </div>
                            <div className="form-group">
                                <TextField
                                    className="registration_text_class"
                                    label="Re-enter Password"
                                    variant="outlined"
                                    type="password"
                                    value={state.password2Value}
                                    error={!!state.passwordError}
                                    helperText={state.passwordError}

                                    sx={{
                                        padding: 0,
                                        margin: 0,
                                        '& .MuiInputBase-root': {
                                            height: '50px',
                                        },

                                    }}
                                    InputLabelProps={{
                                        style: { fontSize: '20px', paddingLeft: '8px', paddingTop: '5px'}  // Adjust font size and padding if needed
                                    }}
                                    onChange={(e) => dispatch({
                                        type: 'catchPassword2Change',
                                        password2Chosen: e.target.value
                                    })}
                                />
                            </div>
                            <Button type="submit" variant="contained" color="primary">Register</Button>
                            <Grid item container justifyContent="center" style={{marginTop: '1rem'}}>
                                <Typography variant='small' sx={{color: 'black'}}>
                                    Already have an account?  <span onClick={() => navigate('/login')} style={{
                                    cursor: 'pointer',
                                    color: "#0288D1"
                                }}>SIGN IN</span>
                                </Typography>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Register;