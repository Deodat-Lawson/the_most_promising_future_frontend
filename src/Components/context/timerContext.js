import React, { useState, useEffect, createContext, useContext } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState(() => {
        const savedTimer = localStorage.getItem("timer");
        return savedTimer ? JSON.parse(savedTimer) : null;
    });

    const [category, setCategory] = useState(() => {
        const savedCategory = localStorage.getItem("category");
        return savedCategory ? JSON.parse(savedCategory) : null;
    });

    useEffect(() => {
        if (timer) {
            localStorage.setItem("timer", JSON.stringify(timer));
        } else {
            localStorage.removeItem("timer");
        }
    }, [timer]);

    useEffect(() => {
        if (timer) {
            localStorage.setItem("category", JSON.stringify(timer));
        } else {
            localStorage.removeItem("category");
        }
    }, [timer]);


    return (
        <TimerContext.Provider value={{ timer, setTimer }}>
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => useContext(TimerContext);