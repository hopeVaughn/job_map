import React from "react";
import 'animate.css';
import styled from 'styled-components';
import { Levels, Navbar, Footer } from "../components/";

function LandingPage(props) {


  return (
    <Wrapper>
      <Navbar />
      <Levels setLevelClicked={props.setLevelClicked} />
      <Footer />
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


`
export default LandingPage;