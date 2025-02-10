import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Layout} from "./components/layout/Layout.tsx";
import {Login} from "./components/auth/Login.tsx";
import {Register} from "./components/auth/Register.tsx";
import {TemplatesList} from "./components/templates/TemplatesList.tsx";
import {ProtectedRoute} from "./components/common/ProtectedRoute.tsx";
import {Dashboard} from "./components/dashboard/Dashboard.tsx";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/templates" element={<TemplatesList />} />
                    </Route>

                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
}

const Home: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1>Welcome to Forms Flow</h1>
            <p>Create and manage your forms easily!</p>
        </div>
    );
}
export default App;