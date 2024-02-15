import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProCards from "./components/ProCards";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";

const AppLayout = () => {
    return (
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/procards" element={<ProCards/>}/>
                </Routes>
            </div>

    );
}


const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
    <BrowserRouter>
        <AppLayout />
    </BrowserRouter>
);
