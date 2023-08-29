import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";


function IdentityDisplayer(){

    const [cookies, setCookies, removeCookies] = useCookies();
    const username = cookies['username'];
    console.log(username)
    
    return(
        <div>
            <h4>
                You are connected as { username }
            </h4>
        </div>
    )
}

export default IdentityDisplayer