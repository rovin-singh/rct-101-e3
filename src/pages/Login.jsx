import React, { useState, useContext, useEffect } from "react";
import {Navigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {state,dispatch} =useContext(AuthContext);
  const [email,setEmail]=useState("");
  const [password,setPass]=useState("");
  const submitHandled=(e)=>{
       e.preventDefault();
       dispatch({type:"login",token:"random"})
  }
   useEffect(()=>{
      console.log(state.isAuth)
    })
  if(state.isAuth)
   {
     return <Navigate to="/" />
   }
   return (
    <div>
      <form >
      <input data-cy="login-email" 
       placeholder="Enter Email"
       onChange={(e)=>setEmail(e.target.value)}
       />
      <input data-cy="login-password"
       placeholder="Enter Password"
       onChange={(e)=>setPass(e.target.value)}
       />
      <button data-cy="login-submit" onClick={submitHandled}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
