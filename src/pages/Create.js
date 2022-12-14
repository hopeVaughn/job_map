import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Navbar, Company } from '../components';

function Create() {
  const url = '/create/'
  const navigate = useNavigate()
  const [companyName, setCompanyName] = useState('');
  const [addNew, setAddNew] = useState(false)
  const [addExisting, setAddExisting] = useState(false)
  const [companies, setCompanies] = useState([])


  const handleChange = (e) => {
    setCompanyName(e.target.value);
  }

  // makes axios post to back end upon form submit to company name
  const companySubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name: companyName }
      const response = await axios.post("http://localhost:8080/api/companies", body)
      const id = response.data[0].id
      navigate(`/create/${id}`)
    } catch (error) {
      console.error(error.message)
    }
    setCompanyName('')
  }

  //get all companies
  const getAllCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/companies');
      setCompanies(response.data)
    } catch (err) {
      console.error(err.message);
    }
  }

  console.log(companies);
  return (
    <Wrapper className='parent'>
      <Navbar />
      <div className="title">
        <h2>Create Application</h2>
      </div>

      <div className="title create-btns">
        <button className='btn' onClick={() => {
          if (addNew) {
            setAddNew(false)
          }
          setAddExisting(true)
          getAllCompanies()
        }}>Add Existing Company</button>

        <button className='btn' onClick={() => {
          if (addExisting) {
            setAddExisting(false)
          }
          setAddNew(true)
        }}>Add New Company</button>
      </div>

      {addNew &&
        <form onSubmit={companySubmit} className="title company-form">
          <label>
            <span className='company-name'> Company Name: <br /></span>
            <input type='text' name="company" value={companyName} onChange={handleChange} placeholder="Add Company Name" className='place-holder' />
          </label>
          <input type="submit" value="Submit" className='btn' />
        </form>
      }
      {addExisting &&
        <ul className="company-container">
          {companies.map((company) => {
            return <Company key={company.id}{...company} url={url} />
          })}
        </ul>
      }
      <div className="footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> job.map( )</span>
        </h5>
        <h5> All rights reserved</h5>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.parent{
  min-height:100vh;
}
h2{
    font-family: 'Delight Coffee', sans-serif;
    color:var(--clr-complement-1)
}
.btn{
  font-family: 'Delight Coffee', sans-serif;
  font-size:1rem;
}
.place-holder{
  font-family: 'Delight Coffee', sans-serif;
  font-size:1rem;
}
.title{
  color:white;
  margin-top: 2rem;
}
.company-form{
  font-family: 'Delight Coffee', sans-serif;
  color: var(--clr-complement-1);
  font-size:1.5rem;
  margin-top: 3rem;
}
.company-name{
padding-bottom:1rem;
}
.create-btns{
  display:flex;
  justify-content: space-around;
}
.footer { 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position:absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: var(--clr-primary-400);

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    font-family: 'Delight Coffee', sans-serif;
    color: var(--clr-complement-1);
    font-size:1.5rem;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
    margin-bottom:0;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
}
.btn{
  box-shadow:none;
}
.container{
  background:rgb(35, 6, 51);
}
`
export default Create