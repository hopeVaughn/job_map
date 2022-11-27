import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
const Company = ({ id, name }) => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <div className="container btn">
        <footer>
          <h5 onClick={() => navigate(`/create/${id}`)} className="btn">{name}</h5>
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
  background: black;
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