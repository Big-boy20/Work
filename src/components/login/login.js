import React from 'react'
import ReactDOM from 'react-dom'


export default function Login () {
    
  return (
    <div className="login__container">
    <form>
         <h2 className="login__text">Email</h2>
         <input name="email" type="email" placeholder="Email" />
    
    
         <h2 className="login__text">Password </h2> 
         <input name="password" type="password" placeholder="Password" />
  
   </form>
   <button type="submit" className="button__login">Log-in</button >
    </div>
  );
};

