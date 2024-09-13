import './Login.css'
// function Login() {
//     return (
      // <div className="login">
      //   <h1>login</h1>
      //   <form>
      //       <label>username :</label>
      //       <input type="text"></input>
      //       <label>password :</label>
      //       <input type="password"></input>
      //       <button type="button" onClick={() => window.location.href = '/dashboard'}> Login </button>
      //        <label>New User ?</label>
      //        <button type='button' onClick = {() => window.location.href = "/register"}>Register</button>
      //   </form>
      // </div>
//     );
//   }
//   export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div className="login">
        <h1>login</h1>
        <form>
            <label>username :</label>
            <input type="text"></input>
            <label>password :</label>
            <input type="password"></input>
            {/* <button type="button" onClick={() => window.location.href = '/dashboard'}> Login </button>
             <label>New User ?</label>
             <button type='button' onClick = {() => window.location.href = "/register"}>Register</button> */}
             <button onClick={handleLogin}>Login</button>
             <button onClick={() => navigate('/register')}>New-user</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
