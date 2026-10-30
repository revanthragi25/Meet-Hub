import React, { useState } from "react";
import "./register.css";


function Register() {
const [userdetails,setUserdetails] =useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
})
const [errors,setErrors]=useState({})

function handleInput(e){
    setUserdetails({...userdetails, [e.target.name] : e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
      const hasErrors = Object.values(errors).some(
    (error) => error !== ""
  );

  if (!hasErrors) {
    console.log("Registration successful!");
    console.log(userdetails);
  }
}

function validateField(name,value){
     let error = "";
    if(name==="name"){
        if(!value.trim()){
            error="Name is required"
        }
    }
    if(name==="email"){
       if (!value.trim()) {
      error = "Email is required";
    } 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Enter a valid email";
    }
    }
    if (name === "password") {
    if (!value) {
      error = "Password is required";
    } else if (value.length < 8) {
      error = "Password must contain at least 8 characters";
    }
  }
  if (name === "confirmPassword") {
    if (!value) {
      error = "Please confirm your password";
    } else if (value !== userdetails.password) {
      error = "Passwords do not match";
    }
  }
  setErrors((prev)=>({
    ...prev,[name]:error})
  )
}

  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-logo">
          Meet<span>Hub</span>
        </h1>

        <h2>Create an Account</h2>
        <p className="register-subtitle">
          Join MeetHub and discover amazing events.
        </p>

        <form className="register-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userdetails.name}
              placeholder="Enter your full name"
              onChange={handleInput}
              onBlur={(e)=>{validateField(e.target.name,e.target.value)}}
              required
            />{errors.name && (
    <p className="error-message">{errors.name}</p>
  )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userdetails.email}
              placeholder="Enter your email address"
              onChange={handleInput}
              onBlur={(e)=>{validateField(e.target.name,e.target.value)}}
              required
            />{errors.email && (
    <p className="error-message">{errors.email}</p>
  )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userdetails.password}
              placeholder="Create a password"
              onChange={handleInput}
              onBlur={(e)=>{validateField(e.target.name,e.target.value)}}
              required
            />{errors.password && (
    <p className="error-message">{errors.password}</p>
  )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={userdetails.confirmPassword}
              placeholder="Re-enter your password"
              onChange={handleInput}
              onBlur={(e)=>{validateField(e.target.name,e.target.value)}}
              required
            />{errors.confirmPassword && (
    <p className="error-message">{errors.confirmPassword}</p>
  )}
          </div>

          <button type="submit" className="register-button" >
            Create Account
          </button>

        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>

      </div>
    </div>
  );
}

export default Register;