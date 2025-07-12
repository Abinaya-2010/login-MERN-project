import React from "react";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom" ;
import './Register.css';

function Register(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const registerUser = async(e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/register',{email,password});
        if(res.data.status === "ok"){
            alert("Register Sucessful!");
        }
        else{
            alert(res.data.error);
        }
        navigate('/');
    } 
    return(
        <div className = "form-container">
            <form onSubmit = { registerUser }>
                <input type = "email" className = "custom-input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)
                }/>
                <input type = "password" className = "custom-input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                
                <button type="submit" className="custom-button">Register</button>
                </form>
        </div>
    );
}
export default Register;