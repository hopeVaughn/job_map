import React, { useState } from 'react'
import { Navbar, Footer } from "../components"
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { FormRow } from '../components'

const initialState = {
  stack: '',
  front_end: false,
  back_end: false,
  full_stack: false,
  resume_sent: false,
  resume_sent_date: ''
}

const CreateApplication = () => {
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate()

  // create current day and format to give to axios
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  // end of format day

  let companyId = useParams();
  const company_id = companyId.id;

  // set state values into variables to be passed into body for axios
  let stack = values.stack;
  let front_end = values.front_end;
  let back_end = values.back_end;
  let full_stack = values.full_stack;
  let resume_sent = values.resume_sent;
  let resume_sent_date = values.resume_sent_date;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const body = {
      resume_sent,
      resume_sent_date,
      stack,
      front_end,
      back_end,
      full_stack,
      company_id
    }
    try {
      const res = await axios.post('http://localhost:8080/api/applications/', body)
      const id = res.data[0].id
      navigate(`/application/${id}`)
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Wrapper>
      <Navbar />
      <div className="title">
        <h2 className="create-title">Create Application</h2>
        <form className='form create-forms' onSubmit={onSubmit}>
          {/* stack field */}
          <FormRow
            type='text'
            name='stack'
            value={values.stack}
            handleChange={handleChange}
          />
          <div className="position-row">
            <button type="button" className='btn'
              onClick={() => setValues({
                ...values,
                front_end: true,
                back_end: false,
                full_stack: false,
              })}>front end</button>
            <button type="button" className='btn' onClick={() => setValues({
              ...values,
              front_end: false,
              back_end: true,
              full_stack: false,
            })}>back end</button>
            <button type="button" className='btn' onClick={() => setValues({
              ...values,
              front_end: false,
              back_end: false,
              full_stack: true,
            })}>full stack</button>
          </div>
          <button
            className="btn btn-hero"
            type='submit'
            onClick={() =>
              setValues({ ...values, resume_sent: true, resume_sent_date: today })
            }>Apply now</button>
        </form>
      </div>
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.main`
.title{
  color:white;
  margin-top: 2rem;
}
.create-title{
  color:white;
  margin-top: 2rem;
}
.create-forms{
  background-color:black;
}
.position-row{
  display: flex;
  justify-content: space-around;
}
.btn-hero{
  margin-top: 2rem;
}
`

export default CreateApplication