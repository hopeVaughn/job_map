import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate, links } from "react-router-dom";
import axios from 'axios'
function Create() {
const [companyName, setCompanyName] = useState({ name:''});

  const handleChange = (e) => {
    setCompanyName({...companyName, [e.target.name]: e.target.value}); 
  }

  // makes axios post to back end upon form submit to company name
  const companySubmit = async(e) => {
    e.preventDefault();
    const companyFormData = new FormData();
    companyFormData.append('name', companyName.name)
  
    try {
    const response = await axios({
      method:"post",
      url:"/api/companies",
      data: companyFormData,
      headers:{"Content-Type": "multipart/form-data"},
    })
      console.log("response.data", response.data);
      console.log("response", response);
        
    } catch (error) {
      console.error(error.message)
    }
    setCompanyName('')
  }
  
 
  return (
    <Wrapper>
      <div className="title">
        <h2>Create Application</h2>
      </div>
      <form onSubmit={companySubmit} className="title company-form">
        <label>
          <span className='company-name'> Company Name: <br/></span>
          <input type='text' name="company" value={companyName} onChange={handleChange} placeholder="Add Company Name"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    </Wrapper>
  )
}

const Wrapper = styled.main`
.title{
  color:white;
  margin-top: 2rem;
}
.company-form{
  margin-top: 3rem;
}
.company-name{
padding-bottom:1rem;
}

`
export default Create