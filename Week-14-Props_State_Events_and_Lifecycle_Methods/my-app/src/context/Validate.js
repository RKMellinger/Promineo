import React, {useState, useRef, useEffect} from "react";
import App from '../App'
import Login from '../components/Login'




export default function Validate() {
    let userNameRef = useRef()
    let passwordRef = useRef()
    if(userNameRef === "User" && passwordRef === "12345"){
        return <App />
    }else {
        return <Login/>
    }
}

