import React from 'react';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <form >
        <input
          type="text"
          name="email" 
          className="form-control my-3"         
          
        />
        <input
          type="password"
          name="password"
          
          
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/register" className="btn btn-warning">register</Link>
    </div>
  )
}

export default Login