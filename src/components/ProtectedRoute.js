import React, { Children }  from "react";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({Children})=>{
    const token = localStorage.getItem('token');

    if (!token){
        return <Navigate to ="/" />

    }
    return Children;

};
export default ProtectedRoute;