import ListAllContact from '../components/ListAllContact';
import {Navbar, Footer } from '../components';
import styled from 'styled-components';



import React from 'react'

function Network() {
  return (
    <Wrapper>
      <Navbar />
   
    <div>

    <ListAllContact />

    </div>
    <Footer />
    </Wrapper>
    
  )
}

const Wrapper = styled.main``;

export default Network