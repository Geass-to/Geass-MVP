import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INTIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    },[state.currentUser])

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }} >
        {children}
        </AuthContext.Provider>
    );
};