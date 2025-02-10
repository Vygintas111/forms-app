import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from "react-redux";

export const ProtectedRoute: React.FC = () => {
    const { user } = useSelector((state: any) => state.auth);

    if (!user) {
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>;
}