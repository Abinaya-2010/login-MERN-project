import React from "react";
import {Link} from 'react-router-dom';
import './Home.css';
function Home(){
    return(<nav className = "nav-bar">
        <div className = "box">
        <Link className = "nav-link" to = "/login">Login</Link>
        <Link className = "nav-link" to = "/register">Register</Link>
        </div>
     </nav>);
}
export default Home;