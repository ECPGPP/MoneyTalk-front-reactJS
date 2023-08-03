import React, { useState } from "react";
import {Login, Register} from "../components/Index";

function Home() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName:any) => {
        setCurrentForm(formName);
    }

    return(
        <>
        <h1>Welcome to MoneyTalk ! 💲💬</h1>

        {
            currentForm === 'login' ? <Login onFormSwitch={toggleForm} />:<Register onFormSwitch={toggleForm} />
        }

        </>
    )

}
export default Home;
