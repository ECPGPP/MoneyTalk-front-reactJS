import React, { useState } from "react";

function Register(props: any){
    // state
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[username, setusername]=useState('');

    const REGISTER_URL = "/api/register";

    // behavior
    const handleSubmit = (e: any) => {
        e.preventDefault();

    }
    // render
    return(
        <div className="auth-form-container">
            <fieldset>
                <legend>Register</legend>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="username">username</label>
                        <br />
                        <input value={username} onChange={(e)=>{setusername(e.target.value)}} id="username" type="text" placeholder="your-username" />
                        <br />
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
            <button onClick={()=>props.onFormSwitch('loginForm')} >Already have an account ? Login 🤙</button>
        </div>
    )

}

export default Register