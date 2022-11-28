// add edit
import React from 'react'
import Contact from '../components/Contact'
import { Navbar, Footer } from '../components';
import styled from 'styled-components';

function SingleNetwork() {
  return (
    <Wrapper>
      <Navbar />
      <div>
        <Contact />
      </div>
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.main``
export default SingleNetwork