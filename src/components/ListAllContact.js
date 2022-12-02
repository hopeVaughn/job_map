import styled from 'styled-components';
import axios from "axios";
import Avatar from 'react-avatar';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListAllContact() {
  const [allContact, setAllContact] = useState([])
  const navigate = useNavigate();

  async function getAllContact() {
    try {
      const result = await axios.get(`http://localhost:8080/api/contacts/`)
      setAllContact(result.data)
    } catch (error) {
      console.error(error.response);
    }
  }
  //pass the id to btn
  const btnSingleContact = (id) => {
    navigate(`/contacts/${id}`)
  }

  useEffect(() => {
    getAllContact()
  }, []);

  return (
    <Wrapper>
      <div className='addBtn'>
        <Link to="/contact">
          <button type="button" className="btn">ADD New Contact</button>
        </Link>
      </div>
      <h1>List of All Contacts</h1>
      {allContact.map((contact) =>
        <div className='list' key={contact.id} onClick={() => btnSingleContact(contact.id)}>
          <Avatar
            alt="contact photo"
            src={contact.image}
            size="85"
            round={true}
            className="cover"
          />
          <div className='nick'>{contact.name}</div>
        </div>
      )}
    </Wrapper>
  )
}



const Wrapper = styled.section`
h1{
  font-family: 'Delight Coffee', sans-serif;
  color: var(--clr-complement-1);
  text-align: -webkit-center;

  padding-top: 30px;
}

.list {
  font-family: 'Delight Coffee', sans-serif;
  color: var(--clr-complement-1);
  font-size: 1.23rem;
  display: flex;
  flex-direction: row; 
  height: 10vh;
  border-style: outset;
  margin: 4% 30% 4% 30%;
  border-radius: 0.5rem;
  align-items: center;
  cursor: pointer;
}

.list:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 5px rgba(233, 233, 233, 0.6);
}

.nick {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5480a2;
  flex-basis: calc(65% - -30px);
  border-radius: 0.5rem;
  height: 3vh;
}
.cover{
  object-fit: cover;
  width: 100%;
}
.btn{
  font-family: 'Delight Coffee', sans-serif;
  color: var(--clr-complement-1);
  font-size:1.25rem;
}
.addBtn {
 
  padding-top: 1.5rem;
  text-align: center;
  height: 50px;
  margin: auto;
  }
`
export default ListAllContact