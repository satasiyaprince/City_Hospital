import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {

    const Login = localStorage.getItem('Dlogin')

    if (!Login){
        return <Navigate to="/login"/>
    }
    return (props.children)
};

export default PrivateRoute;