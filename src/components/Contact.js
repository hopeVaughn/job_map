import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

import Avatar from 'react-avatar';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";



function Contact() {
  const[contact, setContact] = useState({})
  
  // take the id   
  let {id} = useParams();
  // console.log(id);


  // get all information about the company by id
  async function getContact () {
    const result = await axios.get(`http://localhost:8080/api/contacts/${id}`)
    setContact(result.data[0])  
  }

  useEffect(() => {
    getContact()      
  }, []);



  return (
    
    <Wrapper>
      <div className='press'>
        <button type="button" className="btn"> EDIT</button>
        <button type="button" className="btn"> DELETE</button>
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