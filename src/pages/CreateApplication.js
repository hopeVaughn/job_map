import { Navbar, Footer } from "../components"
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const CreateApplication = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="title">
        <h2>Create Application</h2>
      </div>
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.main`
.title{
  color:white;
  margin-top: 2rem;
}
`

export default CreateApplication