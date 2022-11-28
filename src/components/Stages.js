import React, { useState } from 'react';
import styled from "styled-components";

const initialState = {
  sent_resume: false,
  hr_interview: false,
  tech_interview: false,
  job_offer: false,
}

function Stages({ stage }) {
  const [values, setValues] = useState(initialState)
  console.log(values);
  return (
    <Wrapper>
      <div className="stages">
        {/* onclick will dynamically change the class name to visually render active mode */}
        <div className={`sent btn ${values.sent_resume ? 'active' : ''}`} onClick={() =>
          setValues({
            ...values,
            sent_resume: true,
            hr_interview: false,
            tech_interview: false,
            job_offer: false
          })}>sent</div>
        <div className={`hr btn ${values.hr_interview ? 'active' : ''}`}
          onClick={() =>
            setValues({
              ...values,
              sent_resume: false,
              hr_interview: true,
              tech_interview: false,
              job_offer: false
            })}>hr interview</div>
        <div className={`hr btn ${values.tech_interview ? 'active' : ''}`} onClick={() =>
          setValues({
            ...values,
            sent_resume: false,
            hr_interview: false,
            tech_interview: true,
            job_offer: false
          })}>tech interview</div>
        <div className={`hr btn ${values.hr_interview ? 'active' : ''}`} onClick={() =>
          setValues({
            ...values,
            sent_resume: false,
            hr_interview: true,
            tech_interview: false,
            job_offer: false
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