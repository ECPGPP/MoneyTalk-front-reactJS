import React, { useState } from "react";
import { Login, Register } from "../components/Index";
import './Home.css';

function Home() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [success, setSuccess] = useState(false);
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName: any) => {
        setCurrentForm(formName);
    }

    const handleOnCLick = (e: any) => {
        // isLoggedIn === false ? setIsLoggedIn(true) : setIsLoggedIn(false);
        success === false ? setSuccess(true) : setSuccess(false);
    }

    // if (isLoggedIn) {
    //     return (
    //         <div className="home">
    //             <h1><span className="mobilehidden"> Welcome to </span>MoneyTalk 💲💬</h1>
    //             <h2>Hi BOBBY What's up today ?</h2>
    //             <button onClick={handleOnCLick}>MOCKlogout</button>
    //         </div>
    //     )
    // } else {
        return (
            <>{success?(
                <div>
                    <h1>you are logged in !</h1>
                    <button onClick={handleOnCLick}>MOCK FRONT LOGOUT</button>
                </div>

            ):(
            <div className="home">
                <h1><span className="mobilehidden"> Welcome to </span>MoneyTalk 💲💬</h1>
                {
                    currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
                }
                <button onClick={handleOnCLick}>MOCK FRONT LOGIN</button>
            </div>
            )}
            </>
        )
}
export default Home;
