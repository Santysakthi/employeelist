import './Register.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/');
  };

  return (
    <div className="register">
      <h2>Register Page</h2>
      <form >
         <span >Please enter a first name</span>
             <input type="text" placeholder="First Name" name="firstName" />
             <span>Please enter a last name</span>
             <input type="text" placeholder="Last Name" name="lastName" />
             <span >Please enter an email address</span>
             <input type="email"  placeholder="Email"name="email"/>
             <span>Please enter an Password </span>
              <input type="Password"  placeholder="Password"name="Password"/>
              <span >Conform Password address</span>
              <input type="Password"  placeholder="Password"name="Password"/>
              <button type='button' onClick={() => window.location.href = "/"}>Back to Loginpage</button>
         </form>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
