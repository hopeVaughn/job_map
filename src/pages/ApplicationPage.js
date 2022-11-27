import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Networks, Notes, Stages, Navbar, Footer } from '../components';
import styled from 'styled-components'


function CompanyPage(props) {
  const [company, setCompany] = useState({})

  // take the id   
  let { id } = useParams();



  // get all information about the company by id
  async function getCompany() {
    const response = await axios.get(`http://localhost:8080/api/applications/custom/${id}`)
    // console.log(response.data[0]);
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
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.main``
export default CompanyPage