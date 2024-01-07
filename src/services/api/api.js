import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
export default function AuthUser() {

    const navi = useNavigate();

    const getToken = ()=>{
        const tokenString = sessionStorage.getItem('token');
        console.log(tokenString);
        const userToken = JSON.parse(null);
        return userToken;
    }

    
    const getUser = ()=>{
        const userString = sessionStorage.getItem('user');
        const userDetails = JSON.parse(userString);
        return userDetails;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token)=>{
        sessionStorage.setItem('token','12345678');
        sessionStorage.setItem('user','1');
        console.log(user,token);
        setToken(token);
        setUser(user);
        navi('/prescription_home')
    }
    
    const http = axios.create({
        baseURL: "http://localhost:8002/api",
        headers: {
            "Content-type": "application/json"
        }
    });

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}