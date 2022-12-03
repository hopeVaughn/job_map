import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

import Avatar from 'react-avatar';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import ContactForm from './ContactForm';

function Contact() {
  const [contact, setContact] = useState({})
  const [showEdit, setShowEdit] = useState(false)
  const [showEditDelBtn, setShowEditDelBtn] = useState(true)
  const navigate = useNavigate();

  // take the id   
  let { id } = useParams();

  const toggleEdit = () => {
    setShowEdit(true);
    getContact();
    setShowEditDelBtn(false);
  };

  async function getContact() {
    const result = await axios.get(`http://localhost:8080/api/contacts/${id}`)
    setContact(result.data[0])
  }

  /////////////////////////////////////////////////////
  const deleteContact = (id) => {
    const choice = window.confirm("Are you sure you want to delete this contact?")
    if (choice) {
      try {
        axios.delete(`http://localhost:8080/api/contacts/${id}`)
          .then((res) => {
            alert("Contact Deleted")
            navigate(-1)
          })
      } catch (err) {
        console.error(err.message);
      }
    }
  }

  ///////////////////////////////////////////////////////////
  const updateContact = (body) => {
    try {
      axios.put(`http://localhost:8080/api/contacts/${id}`,
        {
          name: body.name,
          image: body.image,
          linkedin: body.linkedin,
          github: body.github,
          twitter: body.twitter
        })
        .then((res) => {
          getContact()
        })
        .then(() => {
          setShowEdit(false);
          setShowEditDelBtn(true);
        })
    } catch (err) {
      console.error(err.message);
    }
  }
  /////////////////////////////////////////////////////////////

  useEffect(() => {
    // eslint-disable-next-line
    getContact()
  });


  return (

    <Wrapper>
      {showEdit &&
        <>
          <h2 className='editTitle'>Edit Contact:</h2>
          <ContactForm onSubmit={updateContact} contact={contact} action="Submit" />
        </>
      }

      {!showEdit &&
        <>
          <p>{contact.name}</p>
          <div className='single' >
            <Avatar
              alt="contact photo"
              src={contact.image}
              size="300"
              round={true}
            />
            <div className='nick'>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <h2><FaLinkedin className='socialMediaIcon' /></h2>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <h2><FaGithub className='socialMediaIcon' /></h2>
              </a>
              <a href={contact.twitter} target="_blank" rel="noopener noreferrer" >
                <h2><FaTwitterSquare className='socialMediaIcon' /></h2>
              </a>
            </div>
          </div>
        </>
      }

      {showEditDelBtn &&
        <div className='press'>
          <button type="button" className="btn" onClick={() => toggleEdit(id)} >EDIT</button>
          <button type="button" className="btn" href="#" onClick={() => navigate(-1)} >RETURN</button>
          <button type="button" className="btn" onClick={() => deleteContact(id)}>DELETE</button>
        </div>
      }
    </Wrapper>

  )
}

export default Contact

const Wrapper = styled.section`
.socialMediaIcon{
  color: white;
}

.socialMediaIcon:hover{
  color: blue;
}

p{
  font-family: 'Delight Coffee', sans-serif;
  color: var(--clr-complement-1);
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
  padding: 4vh 25vh 4vh 25vh;
}

.press{
  display: flex;
  justify-content: space-evenly;
}

.editTitle{
  padding-top: 20px;
  color: white;
  text-align: center;
}
`