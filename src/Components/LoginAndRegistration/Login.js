import React, {useEffect} from "react";
import Axios from "axios";
import {useNavigate} from 'react-router-dom';
import {Grid, Typography, TextField, Button, AppBar} from "@mui/material";
import {useImmerReducer} from 'use-immer';
import {useUser} from "../context/userContext";

function Login() {
    const navigate = useNavigate();
    const { setUser } = useUser();

    const initialState = {
        usernameValue: '',
        passwordValue: '',
        sendRequest: 0,
        token: ''
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
            <AppBar position="static">
                <Typography variant="h6">
                    Register
                </Typography>
            </AppBar>
            <Grid container fullWidth={true} justifyContent="center" alignItems="center"
                  className="registration_container">
                <Grid item>

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
                                    '& .MuiInputBase-root': {
                                        height: '50px', // Set desired height here
                                    },
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
                                    '& .MuiInputBase-root': {
                                        height: '50px', // Set desired height here
                                    },
                                }}
                                onChange={(e) => dispatch({
                                    type: 'catchPasswordChange',
                                    passwordChosen: e.target.value
                                })}
                            />
                        </div>

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


    );

}

export default Login;