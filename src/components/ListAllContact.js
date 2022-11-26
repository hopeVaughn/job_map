import styled from 'styled-components';
import axios from "axios";
import Avatar from 'react-avatar';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListAllContact() {


const [allContact, setAllContact] = useState([])



 async function getAllContact () {
  const result = await axios.get(`http://localhost:8080/api/contacts/`)
  setAllContact(result.data) 
}



 useEffect(() => {
  getAllContact()      
  }, []);


  const navigate = useNavigate();
  //pass the id 
  const btnSingleContact = (id) =>{
    navigate(`/network/${id}`)
  }


  return (

    <>
      <Wrapper>

          <div className='addbtn'>
        <Link to="/contacts">
             <button type="button" className="btn" > ADD </button>
        </Link>
          </div>

        <h1>List of All Contacts</h1>
        {allContact.map((c) =>
          <div className='list' key={c.id} onClick={() => btnSingleContact(c.id)}>
            <Avatar
              alt="contact photo"
              src={c.image}
              size="85"
              round={true}
              className="cover"
            />

            <div className='nick'>{c.name}</div>
          </div>
        )}
      </Wrapper>
    </>

  )

}

export default ListAllContact

const Wrapper = styled.section`
h1{
  text-align: -webkit-center;
  color: #eff1e4;
}

.list {
  color: #eff1e4;
  display: flex;
  flex-direction: row; 
  height: 10vh;
  border-style: outset;
  margin-top: 4vh;
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

.addbtn {
  padding: 8px;
  width: 30%;
  text-align: center;
  border: 3px solid green;
  width: 80px;
  height: 50px;
  margin: auto;
  }
`