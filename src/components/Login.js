import React, { useEffect } from "react";
const Login = () => {

    const handleLogin = ()=>{

    }
    return (
        <div>
            <div className="loginCard">
                <form onSubmit={handleLogin}>
                    <label>User Name: </label><input type="text"/>
                    <label>Password: </label><input type="password"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};
export default Login;