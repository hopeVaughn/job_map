import styled from 'styled-components';

function ListedCompaniesReturned(props) {



  return (
    <Wrapper>
        <div className='container'>
              <button className='child'>
                {props.lis.title}  
              </button>
              <div className='child b'>
                Information requested {/*base on the request*/}
              </div>      
        </div>
    </Wrapper>
  );  
}

const Wrapper = styled.section`
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  font-size: 1.5vw;
}

.container .child {
  flex-basis: calc(50% - 40px);
  height: 2.5vw;
  border-radius: 0.5rem;
  background-color: rgb(238, 160, 70);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5vw;
  font-size: 1.5vw;
}

.container .b {
  background-color: rgb(238, 0, 70);
}

button {
  cursor: pointer;
}
`

export default ListedCompaniesReturned