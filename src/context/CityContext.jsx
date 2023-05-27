import { createContext, useState, useEffect } from 'react';

export const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const initialState = {
        city: '',
        h1seat: '',
        h2seat: '',
        h3seat: '',
    };

    const storedState = localStorage.getItem('appState');
    const [state, setState] = useState(storedState ? JSON.parse(storedState) : initialState);

    useEffect(() => {
        localStorage.setItem('CityState', JSON.stringify(state));
    }, [state]);

    const setCity = (city) => setState((prevState) => ({ ...prevState, city }));
    const setH1Seat = (h1seat) => setState((prevState) => ({ ...prevState, h1seat }));
    const setH2Seat = (h2seat) => setState((prevState) => ({ ...prevState, h2seat }));
    const setH3Seat = (h3seat) => setState((prevState) => ({ ...prevState, h3seat }));

    const contextValue = {
        state,
        setCity,
        setH1Seat,
        setH2Seat,
        setH3Seat,
    };

    return <CityContext.Provider value={contextValue}>{children}</CityContext.Provider>;
};
