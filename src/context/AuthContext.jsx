import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INTIAL_STATE = {
    currentUser: null,
};

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }} >
        {children}
        </AuthContext.Provider>
    );
};