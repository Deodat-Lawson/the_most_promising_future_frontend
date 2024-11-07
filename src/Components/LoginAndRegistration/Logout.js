import React, {useEffect} from "react";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import {Grid, Typography, TextField, Button, AppBar} from "@mui/material";
import {useImmerReducer} from 'use-immer';
import {useUser} from "../context/userContext";
import Navbar from "../Navbar";
import HomeBackground from "../../Assets/HomeBackground.mp4";

function Logout() {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const initialState = {
        usernameValue: '',
        passwordValue: '',
        sendRequest: 0,
        token: '',
        errorMessage: '' // New state property for error message
    }

    function ReducerFunction(draft, action) {
        switch (action.type) {
            case "catchUsernameChange":
                draft.usernameValue = action.usernameChosen;
                break;
            case "catchPasswordChange":
                draft.passwordValue = action.passwordChosen;
                break;
            case "changeSendRequest":
                draft.sendRequest = draft.sendRequest + 1;
                break;
            case 'catchToken':
                draft.token = action.tokenValue;
                break;
            case 'setErrorMessage': // New case for setting error message
                draft.errorMessage = action.errorMessage;
                break;
            default:
                break;
        }
    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

    function FormSubmit(e) {
        e.preventDefault();
        console.log("submitted form");
        dispatch({type: 'changeSendRequest'});
    }

    useEffect(() => {
        if (state.sendRequest) {
            const source = Axios.CancelToken.source();

            async function SignIn() {
                try {
                    const response = await Axios.post('http://localhost:8000/user/login/', {
                        username: state.usernameValue,
                        password: state.passwordValue,
                    }, {cancelToken: source.token});
                    console.log(response.data.username);
                    setUser(response);
                    navigate('/');
                } catch (error) {
                    console.log(error);
                    dispatch({ type: 'setErrorMessage', errorMessage: 'Authentication failed. Please try again.' });
                }
            }

            SignIn();
            return () => {
                source.cancel();
            }
        }
    }, [setUser, dispatch, navigate, state.passwordValue, state.sendRequest, state.usernameValue]);


    //get user info
    // useEffect(() => {
    //     async function getUserInfo() {
    //         try {
    //             const response = await Axios.get('http://localhost:8000/user/user/', {
    //                 headers: {
    //                     Authorization: `Token ${localStorage.getItem('token')}`
    //                 }
    //             });
    //             console.log(response);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //
    //     getUserInfo();
    // }, [state.token]);


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
                        Login
                    </Typography>
                </AppBar>
                <Grid container fullWidth={true} justifyContent="center" alignItems="center"
                      className="registration_container">
                    <Grid item sx={{marginBottom:'20px'}}>

                        <h1>Login</h1>

                        <form onSubmit={FormSubmit}>
                            <div className="form-group">
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

                            {state.errorMessage && (
                                <Typography color="error" variant="body2">
                                    {state.errorMessage}
                                </Typography>
                            )}

                            <Button type="submit" variant="contained" color="primary">Login</Button>

                            <Grid item container justifyContent="center" style={{marginTop: '1rem'}}>
                                <Typography variant='small' sx={{
                                    color: 'black',
                                }}>Do not have an account? <span onClick={() => navigate('/register')} style={{
                                    cursor: 'pointer',
                                    color: "#0288D1"
                                }}>SIGN UP</span> </Typography>
                            </Grid>

                        </form>
                    </Grid>
                </Grid>
            </div>
        </div>
    );

}

export default Logout;