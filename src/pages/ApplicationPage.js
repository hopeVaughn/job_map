import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Networks, Notes, Stages, Navbar } from '../components';
import styled from 'styled-components'


function CompanyPage(props) {
  const [company, setCompany] = useState({})

  // take the id   
  let { id } = useParams();



  // get all information about the company by id
  async function getCompany() {
    const response = await axios.get(`http://localhost:8080/api/applications/custom/${id}`)
    setCompany(response.data[0])
  }

  useEffect(() => {
    getCompany()
  }, []);


  return (
    <Wrapper>
      <Navbar />
      <div>
        <h1>{company.name}</h1>
        <h3>{company.stack}</h3>
      </div>
      <Notes applicationID={id} />
      <Stages />
      <Networks />
      <div className="footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> job.map()</span>
        </h5>
        <h5> All rights reserved</h5>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
color: antiquewhite;
text-align: center;
.footer { 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* position: fixed; */
  /* z-index: 1; */
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: var(--clr-primary-400);

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    /* margin: 0.1rem; */
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
}
`
export default CompanyPage