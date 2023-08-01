import React, { useState } from "react";

function Login() {

    //1 state

    const [postedLogin, setpostedLogin] = useState('');

    //2 behavior

    //3 render

    return (
        <div className="login">
            <h1>OLA</h1>
            <form action="" method="">
                <input type="text"/>
            </form>
            <p>{'postedLogin'}</p>
        </div>
    );

}

export default Login;