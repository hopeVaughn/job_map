import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';
import CreateContact from '../pages/CreateContact';
import ContactForm from './ContactForm';


function AddContact() {

  
  const navigate = useNavigate();



  const handleSubmit = async (body) => {
    
    try {
      
      const response = axios.post(`http://localhost:8080/api/contacts/`, body)
        .then((res) => {
          
          alert("Contact Added")
          navigate('/contacts');
         
        })
        
      } catch (err) {
        console.error(err.message);
      }    
  };


   

    
    
  return (
    <Wrapper>
      <div className="Appform">
      <div className='form-add'>
        <h2>ADD New contact:</h2>

       <ContactForm onSubmit={handleSubmit} action="AddContact"/> 
      
      </div>
      <Link to="/contacts">
        <div className='addbtn'>
          <button type="button" > CANCEL </button>
        </div>
      </Link>
    
    </div>
    </Wrapper>
  )
}

export default AddContact

const Wrapper = styled.section`
color: white;
text-align: center;

.form-control{
  font-size: 30px;
}
`