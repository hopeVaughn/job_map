import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import styled from "styled-components";



function Stages() {
  const [values, setValues] = useState({ isLoaded: false })
  // take the id   
  let applicationId = useParams();
  // get all info on application by application id
  const getStage = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/applications/${applicationId.id}`);
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  }
  //start of handleSubmit calls to dynamically change back end data and className data for front end
  const handleSent = async () => {
    const resume_sent = true;
    const hr_interview = false;
    const tech_interview = false;
    const job_offer = false;
    const body = { resume_sent, hr_interview, tech_interview, job_offer }
    try {
      await axios.put(`http://localhost:8080/api/applications/${applicationId.id}`, body)
        .then(setValues({
          ...values,
          ...body
        }))
    } catch (error) {
      console.error(error)
    }
  }
  //handle hr call
  const handleHR = async () => {
    const resume_sent = false;
    const hr_interview = true;
    const tech_interview = false;
    const job_offer = false;
    const body = { resume_sent, hr_interview, tech_interview, job_offer }
    console.log(hr_interview);
    try {
      await axios.put(`http://localhost:8080/api/applications/${applicationId.id}`, body).then(
        setValues({
          ...values,
          ...body
        }))
    } catch (error) {
      console.error(error)
    }
  }
  //handle tech call
  const handleTech = async () => {
    const resume_sent = false;
    const hr_interview = false;
    const tech_interview = true;
    const job_offer = false;
    const body = { resume_sent, hr_interview, tech_interview, job_offer }
    try {
      await axios.put(`http://localhost:8080/api/applications/${applicationId.id}`, body)
        .then(setValues({
          ...values,
          ...body
        }))
    } catch (error) {
      console.error(error)
    }
  }
  //handle offer call
  const handleOffer = async () => {
    const resume_sent = false;
    const hr_interview = false;
    const tech_interview = false;
    const job_offer = true;
    const body = { resume_sent, hr_interview, tech_interview, job_offer }
    try {
      await axios.put(`http://localhost:8080/api/applications/${applicationId.id}`, body)
        .then(setValues({
          ...values,
          ...body
        }))
    } catch (error) {
      console.error(error)
    }
  }
  //end of handleSubmit calls to dynamically change back end data and className data for front end

  useEffect(() => {
    //render component and applying styling only after state is managed
    getStage().then((fetchData) => {
      const { resume_sent, hr_interview, tech_interview, job_offer } = fetchData;
      const initialState = {
        resume_sent,
        hr_interview,
        tech_interview,
        job_offer,
        isLoaded: true
      }
      setValues(initialState)
    })
  }, [])

  return (
    <Wrapper>
      {values.isLoaded && (
        <div className="stages">
          {/* onclick will dynamically change the class name to visually render active mode */}
          <div className={`sent btn ${values.resume_sent ? 'active' : ''}`} onClick={handleSent}>sent</div>
          <div className={`hr btn ${values.hr_interview ? 'active' : ''}`} onClick={handleHR}>hr interview</div>
          <div className={`tech btn ${values.tech_interview ? 'active' : ''}`} onClick={handleTech}>tech interview</div>
          <div className={`offer btn ${values.job_offer ? 'active' : ''}`} onClick={handleOffer}>job offer</div>
        </div>
      )}
    </Wrapper >
  )
}

const Wrapper = styled.div`
.stages{
  display:flex;
  justify-content: space-around;
  margin: 5rem 25rem 0 25rem;
}
.active{
  background: var(--clr-primary-800);
}

`
export default Stages