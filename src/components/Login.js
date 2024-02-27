import React, { useState } from "react";
import login from "/src/components/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (!response.ok) {
                setError("Invalid credentials");
                return;
            }

            const data = await response.json();
            // Assuming the response contains a token
            console.log("Token:", data.token);
            // Navigate to ProCards page
            navigate("/home");
        } catch (error) {
            console.error('Error:', error);
            setError("An error occurred");
        }
    };

    return (
        <div>
            <div className="loginCard">
                <form onSubmit={handleSubmit}>
                    <label>User Name: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Login;
