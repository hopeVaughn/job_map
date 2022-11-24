import React from "react";
import 'animate.css';
import styled from 'styled-components';
import { Levels, Charts } from "../components/";

function LandingPage(props) {


  return (
    <Wrapper>
      <Charts />
      <Levels setLevelClicked={props.setLevelClicked} />
    </Wrapper>
  )
}

const Wrapper = styled.div`

.landing {
  width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
}


`
export default LandingPage;