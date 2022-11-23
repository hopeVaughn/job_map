import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { companies, applications } from '../util/constants'

function CompanyPage(props) {
  const [company, setCompany] = useState({})

  // take the id   
  let { id } = useParams();



  // get all information about the company by id
  async function getCompany() {
    const response = await axios.get(`http://localhost:8080/api/applications/custom/${id}`)
    console.log(response.data[0]);
    setCompany(response.data[0]) //if backend send just a object, maybe is better 
  }

  useEffect(() => {
    getCompany()
  }, []);


  return (
    <>
      <div>
        <h1>{company.name}</h1>
        <h3>  {company.stack}  </h3>

      </div>
    </>
  )
}

export default CompanyPage