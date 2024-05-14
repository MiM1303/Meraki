
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import LoadingAnimation from "../routes/LoadingAnimation.json";
import Lottie from 'lottie-react';

const PrivateRoute = ({children}) => {
        const {user, loading} = useContext(AuthContext);
        const location = useLocation();
        console.log(location.pathname);
        if(loading)
        {
            return <span className="mx-auto loading loading-infinity loading-lg"></span>
        }
        if(user)
        {
            return children;
        }
        return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;