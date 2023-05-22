import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;