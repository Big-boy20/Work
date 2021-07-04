import React from 'react'
import ReactDOM from 'react-dom'
import './../css/main.css'

export default function Login () {
    
  return (
    <div className="container">
    <div className="login__container">
    <form>
         <h2 className="login__text">Username</h2>
         <input className="dataIn" name="email" type="email" placeholder="Email" />
    
    
         <h2 className="login__text">Password </h2> 
         <input className="dataIn" name="password" type="password" placeholder="Password" />
  
   </form>
   <button type="submit" className="button__login">Sign up</button >
    </div>
    </div>
  );
};

