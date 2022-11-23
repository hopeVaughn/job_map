import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';


function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*---------------------*/
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = Axios.post(`http://localhost:8080/api/authentication/login`, body)
        .then((res) => {
          const parseRes = res.data;
          if (parseRes.jwtToken) {
            localStorage.setItem("token", parseRes.jwtToken);
            props.setAuth(true);
            console.log("Logged in Successfully");
          } else {
            props.setAuth(false);
            console.log(parseRes);
          }
        })
        
      } catch (err) {
        console.error(err.message);
      }

  };


  return (
    <div>
      Login
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          placeholder='email'
          className="form-control my-3"          
          onChange={(event) => setEmail(event.target.value)            
          }       
          
        />
        <input
          type="password"
          name="password"
          placeholder='password'
          className="form-control my-3" 
          onChange={(event) => setPassword(event.target.value)
          }
          
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/register" className="btn btn-warning">register</Link>
    </div>
  )
}

export default Login