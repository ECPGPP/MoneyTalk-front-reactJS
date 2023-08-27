import React, { useState } from "react";
import axios from "../api/axios";
import '../assets/AuthFormContainer.scss';
import '../assets/Register.scss';


const REGISTER_URL = "/api/register";

function Register(props: any) {
    
    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alias, setalias] = useState('');

    // behavior
    const handleSubmit = async (username: string, password: string) => {
        
        try {
            const response = await axios.post(
                REGISTER_URL, 
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    // CORS handling EZ, to rework
                    withCredentials: false
                    // withCredentials: true
            })
        } catch (error) {
            console.log("!ERR")
            console.log(error)
        }
    }

    // render
    return (
        <div className="auth-form-container register">
            <fieldset>
                <legend>Register</legend>
                <form onSubmit={()=>handleSubmit(username, password)}>
                    <label htmlFor="alias">alias</label>
                    <br />
                    <input value={alias} onChange={(e) => { setalias(e.target.value) }} id="alias" type="text" placeholder="your-alias" />
                    <br />
                    <label htmlFor="email">email</label>
                    <br />
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} id="email" type="email" placeholder="youremail@skeggang.net" />
                    <br />
                    <label htmlFor="password">password</label>
                    <br />
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" type="password" placeholder="yourpassword" />
                    <br />
                    <button>Submit 🤟</button>
                </form>
            </fieldset>
            <button type="button" onClick={() => props.onFormSwitch('loginForm')} >Already have an account ? Login 🤙</button>
        </div>
    )

}

export default Register