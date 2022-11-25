import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
//import { companies, applications, contacts } from '../util/constants'
import { Networks, Notes, Stages } from '../components';
import styled from 'styled-components'
function CompanyPage(props) {
  const [company, setCompany] = useState({})

  // take the id   
  let { id } = useParams();



  // get all information about the company by id
  async function getCompany() {
    const response = await axios.get(`http://localhost:8080/api/applications/custom/${id}`)
    // console.log(response.data[0]);
    setCompany(response.data[0]) //if backend send just a object, maybe is better 
  }

  useEffect(() => {
    getCompany()
  }, []);


  return (
    <Wrapper>
      <div>
        <h1>{company.name}</h1>
        <h3>{company.stack}</h3>
      </div>
      <Notes />
      <Stages />
      <Networks />
    </Wrapper>
  )
}
const Wrapper = styled.main``
export default CompanyPage