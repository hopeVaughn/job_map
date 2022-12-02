import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function ContactForm(props) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com/");
  const [github, setGithub] = useState("https://github.com/");
  const [twitter, setTwitter] = useState("https://twitter.com/");

 function handleSubmit(e) {
    e.preventDefault()
    const body = { name, image, linkedin, github, twitter };
    props.onSubmit(body)

 }

 useEffect(() => {
  if(!props.contact) {
    return
  }

  setName(props.contact.name) 
  setImage(props.contact.image)
  setLinkedin(props.contact.linkedin)
  setGithub(props.contact.github)
  setTwitter(props.contact.twitter)
  
}, [props.contact]);

  return (
    <Wrapper>
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
              placeholder='https://' 
              pattern='https://.*' 
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin || ""}  
            />
          </div>
          
          <div className='form-control'>
            <label htmlFor="comment">GitHub: </label>
            <input 
              type="text" 
              name='github'
              placeholder='https://'
              pattern='https://.*' 
              onChange={(e) => setGithub(e.target.value)}
              value={github || ""}  
            />
          </div>

          <div className='form-control'>
            <label htmlFor="comment">Twitter: </label>
            <input 
              type="text" 
              name='twitter'
              placeholder='https://'
              pattern='https://.*' 
              onChange={(e) => setTwitter(e.target.value)}
              value={twitter}  
            />
          </div>
          <br/>
          <input type="submit" className="btn" value={props.action} />
      </form>
      </Wrapper>
  )
}

export default ContactForm

const Wrapper = styled.section`
color: white;
text-align: center;

.form-control{
  font-size: 30px;
}
`