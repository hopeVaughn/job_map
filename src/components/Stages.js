import React, { useState, useEffect } from 'react';
import styled from "styled-components";



function Stages(props) {
  // console.log('stage prop:', props.stage);
  const [values, setValues] = useState({})

  const { resume_sent, hr_interview, tech_interview, job_offer } = props.stage;
  const initialState = {
    resume_sent,
    hr_interview,
    tech_interview,
    job_offer,
  }

  useEffect(() => {
    setValues(initialState)
  }, [])
  // console.log('initial state:', initialState);
  console.log('value state:', values);
  return (
    <Wrapper>
      <div className="stages">
        {/* onclick will dynamically change the class name to visually render active mode */}
        <div className={`sent btn ${values.resume_sent ? 'active' : ''}`} onClick={() =>
          setValues({
            ...values,
            resume_sent: true,
            hr_interview: false,
            tech_interview: false,
            job_offer: false
          })}>sent</div>
        <div className={`hr btn ${values.hr_interview ? 'active' : ''}`}
          onClick={() =>
            setValues({
              ...values,
              resume_sent: false,
              hr_interview: true,
              tech_interview: false,
              job_offer: false
            })}>hr interview</div>
        <div className={`tech btn ${values.tech_interview ? 'active' : ''}`} onClick={() =>
          setValues({
            ...values,
            resume_sent: false,
            hr_interview: false,
            tech_interview: true,
            job_offer: false
          })}>tech interview</div>
        <div className={`offer btn ${values.job_offer ? 'active' : ''}`} onClick={() =>
          setValues({
            ...values,
            resume_sent: false,
            hr_interview: false,
            tech_interview: false,
            job_offer: true
          })}>job offer</div>
      </div>
    </Wrapper>
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