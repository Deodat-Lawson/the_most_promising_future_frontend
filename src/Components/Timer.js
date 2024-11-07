import React, { useState, useEffect } from "react";
import { useUser } from "./context/userContext";
import Navbar from "./Navbar";
import { Button, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/system";

const TimerContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in-out',
});

const TimerDisplay = styled(Typography)({
    fontSize: '4rem',
    margin: '1rem 0',
    animation: 'pulse 1s infinite',
});

const TimerButton = styled(Button)({
    marginTop: '1rem',
    padding: '0.5rem 2rem',
    fontSize: '1.2rem',
    animation: 'bounce 1s infinite',
});

const Timer = ({ workDuration = 25, breakDuration = 5 }) => {
    const [time, setTime] = useState(workDuration * 60);
    const [isActive, setIsActive] = useState(false);
    const [isWorkSession, setIsWorkSession] = useState(true);

    const { user } = useUser();

    useEffect(() => {
        console.log("Current user:", user);

        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }

        if (time === 0) {
            clearInterval(interval);
            setIsWorkSession(!isWorkSession);
            setTime((isWorkSession ? breakDuration : workDuration * 60));
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, time, isWorkSession, breakDuration, workDuration, user]);

    return (
        <TimerContainer>
            <Navbar />
            <Box>
                <Typography variant="h4">Hi {user && user.data.username ? user.data.username : "Guest"}</Typography>
                <TimerDisplay>
                    {isWorkSession ? "Work Session" : "Break Session"}: {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
                </TimerDisplay>
                <TimerButton variant="contained" color="primary" onClick={() => setIsActive(!isActive)}>
                    {isActive ? "Pause" : "Start"}
                </TimerButton>
            </Box>
        </TimerContainer>
    );
};

export default Timer;