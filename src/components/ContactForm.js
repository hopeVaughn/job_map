import React, { useEffect, useState } from 'react'

function ContactForm(props) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");

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

          <input type="submit" value={props.action} />
      </form>
  )
}

export default ContactForm