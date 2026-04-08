import axios from "axios";
import { createContext, useState, useEffect,  } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //const [token, setToken] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if(token){
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setIsLogin(true);  
        }
        else{
            delete axios.defaults.headers.common["Authorization"];
            setIsLogin(false);
            navigate("/")
        }
    }, [token]);

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
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
             if (res.status === 200) {
                return { success: true, data: res.data }
            }

        } catch (error) {
            console.log("Signup error:", error.response?.data || error.message);
        }
    };

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password
            }, {withCredentials:true});
            console.log(res)
            console.log(res.data.user);

            setUser(res.data.user);
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
            if (res.status === 200) {
                return { success: true, data: res.data }
            }
        } catch (error) {
            console.log("Login error:", error.response?.data || error.message);
            return { success: false, message: error.response?.data || error.message }
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
