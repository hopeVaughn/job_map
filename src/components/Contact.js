import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

import Avatar from 'react-avatar';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";



function Contact() {
  const[contact, setContact] = useState({})
  const navigate = useNavigate();
  
  // take the id   
  let {id} = useParams();
  

  
  async function getContact () {
    const result = await axios.get(`http://localhost:8080/api/contacts/${id}`)
    setContact(result.data[0])  
  }
  

  const deleteContact =  (id) => {
    try{
     axios.delete(`http://localhost:8080/api/contacts/${id}`)
    .then((res) => {
          
      alert("Contact Deleted")
      navigate('/network');
     
    })
    
  } catch (err) {
    console.error(err.message);
  }  
  }
  
  
  
    useEffect(() => {
      getContact()      
    }, []);



  return (
    
    <Wrapper>
      <div className='press'>
        <button type="button" className="btn" > EDIT</button>
        <button type="button" className="btn" onClick={() => deleteContact(id)}> DELETE</button>
      </div>

      <p>{contact.name}</p>
      
      <div className='single' >
        <Avatar
          alt="contact photo"
          src={contact.image}
          size="300"
          round={true}
        />
            
        <div className='nick'>
          <div>Id that Contact:<h1>{id}</h1></div> 

          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <h2><FaLinkedin/></h2>
          </a>      
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <h2><FaGithub/></h2>
          </a>
          <a href={contact.twitter} target="_blank" rel="noopener noreferrer" >
            <h2><FaTwitterSquare/></h2>
          </a>           
        </div>
      </div>
    </Wrapper>
  
  )
}

export default Contact

const Wrapper = styled.section`
p{
  font-size: 7vh;
  text-align: -webkit-center;
  color: #eff1e4;
  padding-top: 4vh;
}

.single{
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4vh;
  padding-bottom: 4vh;
}

.press{
  display: flex;
  justify-content: space-evenly;
}

`