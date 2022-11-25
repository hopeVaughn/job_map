import ListCompanies from "../components/ListCompanies";
import {Navbar, Footer } from '../components';
import styled from 'styled-components';

function ListedCompanies(props) {

  console.log(props.levelClicked)
 
  return (
    
    <Wrapper>
      <Navbar />
     <ListCompanies levelClicked={props.levelClicked}/>
     <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.main``;

export default ListedCompanies