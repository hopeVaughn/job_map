import React from 'react'
import Axios from 'axios';
import styled from 'styled-components'
import { useEffect, useState } from "react";
function Charts() {
  return (
    <Wrapper>
      <div className="container">
        <h2 className='section-center'>Charts</h2>

      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  column-gap: 40px;
  width: 100%;
  height: 40vh;
  background-color:black;
  align-items: flex-start;  
}
`
export default Charts