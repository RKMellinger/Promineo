import React, {useRef} from "react";
import App from './App'
import Login from './Login'




export default function Validate() {
    let userNameRef = useRef()
    let passwordRef = useRef()
    if(userNameRef === "User" && passwordRef === "12345"){
        return <App />
    }else {
        return <Login/>
    }
}

