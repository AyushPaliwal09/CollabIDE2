import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    //const [token, setToken] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [isLogin, setIsLogin] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const res = axios.get("http://localhost:5000/api/auth/get-user", { withCredentials: true });
            res.then((response) => {
                setUser(response.data);
                setIsLogin(true);
            });
        }
        else {
            delete axios.defaults.headers.common["Authorization"];
            setIsLogin(false);
            // navigate("/")
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
                setIsLogin(true);
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
            }, { withCredentials: true });
            console.log(res)
            console.log(res.data.user);

            setUser(res.data.user);
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
            if (res.status === 200) {
                setIsLogin(true);
                return { success: true, data: res.data }
            }
        } catch (error) {
            console.log("Login error:", error.response?.data || error.message);
            return { success: false, message: error.response?.data || error.message }
        }
    };

    const firebaseLogin = async (username, email, uid) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/firebase-auth", {
                username,
                email,
                uid
            });
            console.log(res);

            setUser(res.data.user);
            setToken(res.data.token);
            localStorage.setItem("token", res.data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
            if (res.status === 200) {
                setIsLogin(true);
                return { success: true, data: res.data }
            }
        } catch (error) {
            console.log("Google login error:", error.response?.data || error.message);
            return { success: false, message: error.response?.data || error.message }
        }
    };

    // const githubLogin = async (username, email, uid) => {
    //     try {
    //         const res = await axios.post("http://localhost:5000/api/auth/github-auth", {
    //             username,
    //             email,
    //             uid
    //         });
    //         console.log(res);

    //         setUser(res.data.user);
    //         setToken(res.data.token);
    //         localStorage.setItem("token", res.data.token);
    //         axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
    //         if (res.status === 200) {
    //             setIsLogin(true);
    //             return { success: true, data: res.data }
    //         }
    //     } catch (error) {
    //         console.log("GitHub login error:", error.response?.data || error.message);
    //         return { success: false, message: error.response?.data || error.message }
    //     }
    // };


    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setIsLogin(false);
        navigate("/auth")
    };

    return (
        <AuthContext.Provider value={{ user, isLogin, token, login, logout, signup, firebaseLogin }}>

            {children}
        </AuthContext.Provider>
    );
};
