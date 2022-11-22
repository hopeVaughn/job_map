import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

function CompanyPage(props) {
  const [company, setCompany] = useState({})
   
  // take the id   
  let {id} = useParams();
  console.log("id:", id);
 

  // get all information about the company by id
  async function getCompany () {
    const result = await axios.get(`http://localhost:8080/api/companies/${id}`)
    console.log('++++', result);
    setCompany(result.data[0]) //if backend send just a object, maybe is better 
  }

  useEffect(() => {
    getCompany()      
  }, []);


  return (
    <>
      <div>
          <h1>CompanyPage</h1> 
          <h3>  Just Exemplos, can delete the div </h3>
      ___  {company.name}   
      ___  {company.user_id}
      </div>
    </>
  )
}

export default CompanyPage