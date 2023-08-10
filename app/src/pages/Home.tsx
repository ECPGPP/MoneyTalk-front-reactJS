import React, { useState } from "react";
import { Login, Register } from "../components/Index";
import './Home.css';

function Home() {
    const [currentForm, setCurrentForm] = useState('loginForm');
    const toggleForm = (formName: any) => {
        setCurrentForm(formName);
    }

    return (
        <div className="home">
            <h1><span className="mobilehidden"> Welcome to </span>MoneyTalk 💲💬</h1>
            {
                currentForm === 'loginForm' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    )
}
export default Home;
