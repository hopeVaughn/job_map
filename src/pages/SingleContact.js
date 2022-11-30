// add edit
import React from 'react'
import Contact from '../components/Contact'
import { Navbar } from '../components';
import styled from 'styled-components';

function SingleContact() {
  return (

    <Wrapper >
      <Navbar />
      <div className='parent'>
        <Contact />
      </div>
      <div className="footer">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> job.map()</span>
        </h5>
        <h5> All rights reserved</h5>
      </div>
    </Wrapper>

  )
}
const Wrapper = styled.main`
.parent{
  min-height:78vh;
}
.footer { 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: var(--clr-primary-400);

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
    margin-bottom:0;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
}
`
export default SingleContact