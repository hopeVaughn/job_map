import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';


function AddContact() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { name, image, linkedin, github, twitter };
      const response = axios.post(`http://localhost:8080/api/contacts/`, body)
        .then((res) => {
          
          alert("Contact Added")
          navigate('/network');
         
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
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="name">Name:  </label>
            <input 
              type="text" 
              name='name'
              placeholder='Contact Name' 
              onChange={(e) => setName(e.target.value)}
              value={name || ""}  
              required
            />
          </div>

          <div className='form-control'>
            <label htmlFor="image">Photo:  </label>
            <input 
              type="text" 
              name='image' 
              placeholder='adrress image' 
              onChange={(e) => setImage(e.target.value)}
              value={image || ""}  
            />
          </div>

          <div className='form-control'>
            <label htmlFor="comment">LinkedIn: </label>
            <input 
              type="text" 
              name='linkedin'
              placeholder='link' 
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin || ""}  
            />
          </div>
          
          <div className='form-control'>
            <label htmlFor="comment">GitHub: </label>
            <input 
              type="text" 
              name='github'
              placeholder='link' 
              onChange={(e) => setGithub(e.target.value)}
              value={github || ""}  
            />
          </div>

          <div className='form-control'>
            <label htmlFor="comment">Twitter: </label>
            <input 
              type="text" 
              name='twitter'
              placeholder='link' 
              onChange={(e) => setTwitter(e.target.value)}
              value={twitter || ""}  
            />
          </div>

          <input type="submit" value="Add New Contact" />
        </form>
      </div>
      <Link to="/network">
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