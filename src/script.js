import React from "react";
import ReactDOM from "react-dom/client"
import ProCards from "./components/ProCards";
import Header from "./components/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Cart from "./components/Cart";

const AppLayout = () => {
    return (
        <Router>
            <div>
                <Header />
                <ProCards />
            </div>
        </Router>

    )
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<AppLayout />);