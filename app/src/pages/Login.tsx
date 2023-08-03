import React, { useState } from "react";
import { isPropertySignature } from "typescript";

function Login(props: any){
    // state
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    // behavior
    const handleSubmit = (e: any) => {
        e.preventDefault();

    }
    // render
    return(
        <div className="auth-form-container">
            <fieldset>
                <legend>Login</legend>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="email">email</label>
                        <br />
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" type="email" placeholder="youremail@skeggang.net" />
                        <br />
                        <label htmlFor="password">password</label>
                        <br />
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password" type="password" placeholder="yourpassword" />
                        <br />
                        <button>Submit 🤟</button>
                </form>
            </fieldset>
            <button onClick={()=>props.onFormSwitch('register')} > Don't have an account ? Register ✍️</button>
        </div>
    )

}

export default Login;