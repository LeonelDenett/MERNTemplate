import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Layout from "../components/Layout";

export default function Navigator() {
    return(
        <BrowserRouter>
            <ToastContainer/>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}