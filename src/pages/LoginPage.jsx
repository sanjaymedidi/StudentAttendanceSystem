import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) =>{
       e.preventDefault();

       if(username && password ){
        navigate("/dashboard");  
       }
       else{
        alert("please enter username && password");
       }
    }


  return (
    <div className="intro-container">
    <div className="intro">
      <h1 className="intro-title">
       <span className="name">Student</span><br />
        Attendance System
      </h1>
      <p className="line">A smart and simple way to record, track, and manage student attendance online.</p>
    </div>
 <div className="login-box">
        <h2>Teacher's Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input type="text"
             placeholder="Enter your username" 
             value={username} 
             onChange={(e)=> setUsername(e.target.value)}/>

          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
