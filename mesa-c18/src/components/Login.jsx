import React, { useState } from 'react'
import "../styles/Login.css"

const Login = () => {

    const [state, setState] = useState({username: "", password: ""})

    const handleChange = (event, key) => setState({[key]: event.target.value});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Logueado");
    }

    const {password, username} = state

    return (
            <form className="login__container">
                <div>
                    <label className="labelStyle" >Username:</label>
                    <input  type="text" value={username} onChange={(event) => handleChange(event,"username")}  />
                </div>
                <div>
                    <label className="labelStyle" >Password:</label>
                    <input type="password" value={password} onChange={(event) => handleChange(event,"password")}  />
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
    )
}

export default Login;