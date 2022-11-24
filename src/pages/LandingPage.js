import React from "react";
import 'animate.css';
import styled from 'styled-components';
import Levels from "../components/Levels";

function LandingPage(props) {


  return (
    <Wrapper>
      <div className="charts">
        <div>
          reserved for the bar graph
        </div>

        <div >
          reserved for the donut graph
        </div>
      </div>

      <Levels setLevelClicked={props.setLevelClicked} />

    </Wrapper>
  )
}

const Wrapper = styled.div`
.charts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  width: 100%;
  height: 40vh;
  background-color: black;
}

.landing {
  width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
}


`
export default LandingPage;