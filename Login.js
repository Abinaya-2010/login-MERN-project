import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Login.css';

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const loginUser = async(e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/login',{email,password});
        if(res.data.status === 'ok'){
            alert("Login Sucessful!");
        }
        else{
            alert(res.data.error);
        }
        navigate('/');
    } 
    return(
        <div class = "form-container">
            <form onSubmit = { loginUser }>
                <input type = "email" className = "custom-input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)
                }/>
                <input type = "password" className = "custom-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                
            <div className="button-div">
                <button type="submit" className="custom-button">Login</button></div>
                </form>
        </div>
    );
}
export default Login;