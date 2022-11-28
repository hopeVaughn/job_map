import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const Company = ({ id, name, url }) => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <div className="container btn">
        <footer>
          <h5 className="btn" onClick={() => navigate(`${url}${id}`)}>{name}</h5>
        </footer>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
.container {
  display:flex;
  flex-direction:column;
  align-items:center;
  color:white;
  background: var(--clr-primary-900);
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5 {
    margin-bottom: 0;
    font-weight: 400;
  }
  h5:hover{
    cursor:pointer;
  }
`
export default Company