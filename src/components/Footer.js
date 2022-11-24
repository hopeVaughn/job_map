import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
    <h5>
      &copy; {new Date().getFullYear()}
      <span> job.map()</span>
    </h5>
    <h5> All rights reserved</h5>
  </Wrapper>
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background: var(--clr-black);

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer