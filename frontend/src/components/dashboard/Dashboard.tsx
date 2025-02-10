import React from "react";
import {useSelector} from "react-redux";

export const Dashboard: React.FC = () => {
    const { user } = useSelector((state: any) => state.auth);

    return (
        <div className="container mt-5">
            <h1>Dashboard</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Welcome {user?.name}</h5>
                    <p className="card-text">Email: {user?.email}</p>
                </div>
            </div>
        </div>
    )
}
