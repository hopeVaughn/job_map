import React from "react";
import 'animate.css';
import styled from 'styled-components';
import { Levels, Navbar } from "../components/";

function LandingPage(props) {


  return (
    <Wrapper>
      <Navbar />
      <Levels setLevelClicked={props.setLevelClicked} />
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

.landing {
  width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer { 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: var(--clr-primary-400);

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    font-family: 'Delight Coffee', sans-serif;
    color: var(--clr-complement-1);
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
export default LandingPage;