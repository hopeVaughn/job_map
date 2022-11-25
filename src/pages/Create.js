import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate, links } from "react-router-dom";
function Create() {
  return (
    <Wrapper>
      <div className="title">
        <h2>Create Application</h2>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.main`

h2{
  color: white;
}
`
export default Create