import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";





function Register(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  /*---------------------*/

  const navigate = useNavigate();

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = Axios.post(`http://localhost:8080/api/authentication/register`, body)
        .then((res) => {
          const parseRes = res.json();
          if (parseRes.jwtToken) {
            localStorage.setItem("token", parseRes.jwtToken);
            props.setAuth(true);
            console.log("Registered Successfully")
            navigate("/landing")
            ;
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
    <Wrapper>
      <div >       
        <h1 className="mt-5 text-center">Register</h1>
        <form className="register" onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"            
            placeholder="email"            
            className="form-control my-3"
            onChange={(event) => setEmail(event.target.value)            
            } 
          />

          <input
            type="password"
            name="password"          
            placeholder="password"            
            className="form-control my-3"
            onChange={(event) => setPassword(event.target.value)            
            } 
          />

          <input
            type="text"
            name="name"            
            placeholder="name"            
            className="form-control my-3"
            onChange={(event) => setName(event.target.value)            
            } 
          />

          <button className="btn btn-success btn-block">Submit</button>
        </form>
        
        <Link to="/login" className="btn btn-warning">login</Link>      
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.register {
  display: flex;
  flex-direction: column;
  align-items: center; 
  
}


`

export default Register