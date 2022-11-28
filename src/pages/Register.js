import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FormRow } from '../components'
import { toast } from 'react-toastify';
import { Logo } from '../components'
import styled from 'styled-components';
import Axios from 'axios';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

function Register() {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password || !name) {
      toast.error('please fill out all fields');
      return
    }
    if (!values.isMember) {
      try {
        const body = { email, password, name };
        const response = Axios.post(`http://localhost:8080/api/authentication/register`, body)
          .then((res) => {
            const parseRes = res.data;
            if (parseRes.jwtToken) {
              localStorage.setItem("token", parseRes.jwtToken);
              console.log("Registered Successfully")
              navigate("/landing");
            } else {
              console.log(parseRes);
            }
          })
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (

    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <Link to="/landing" className='btn btn-block'>
          submit
        </Link>
        <p>
          {values.isMember ? 'Not a user yet?' : 'Already a user'}
          <button type='button' onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .title-top{
    color:var(--clr-white);
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--clr-white);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    display:flex;
    justify-content:center;
    margin-top: 1rem;
  }
  .member-btn {
  
    background: transparent;
    border: transparent;
    color: var(--clr-primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Register