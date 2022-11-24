import React from 'react'
import Axios from 'axios';
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { PieChart, SimpleBarChart } from './charts/'
function Charts() {
  return (
    <Wrapper>

      <div className="container">
        <SimpleBarChart />
        <PieChart />
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
.container {
  display: flex;
  justify-content: space-between;
  width: 75%;
  height: 35vh;
  margin-left: 7.5rem;
  background-color:black;

  
}

`
export default Charts