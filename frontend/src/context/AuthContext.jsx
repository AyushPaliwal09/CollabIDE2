import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const signup = async (username, email, password) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", {
                username,
                email,
                password
            });
            console.log(res);
            
            setUser(res.data.user);
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);

        } catch (error) {
            console.log("Signup error:", error.response?.data || error.message);
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            });
            console.log(res.data.user);
            

            setUser(res.data.user);
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);

        } catch (error) {
            console.log("Login error:", error.response?.data || error.message);
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};
