import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
    const { isLogin } = useContext(AuthContext);
    console.log("ProtectedRoute - isLogin:", isLogin); // Debugging log

    if (isLogin === null) {
        return <div>Loading...</div>; // ya spinner
    }
    if (!isLogin) {
        return <Navigate to="/auth" />;
    }

    return children;
};

export default ProtectedRoute;