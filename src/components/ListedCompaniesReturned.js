import styled from 'styled-components';

function ListedCompaniesReturned(props) {

  const name = props.lis.name
  // console.log(name);

  return (
    <Wrapper>
        <div className='container'>

              <button className={`
              
              ${name === 'Amazon' ? 'child a' : ''}
              ${name === 'Google' ? 'child g' : ''}
              ${name === 'Tesla' ? 'child t' : ''}
              ${name === 'Twitter' ? 'child tw' : ''}
              ${name === 'LHL' ? 'child l' : ''}
              
              `}>
                {name}  
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

.child {
  flex-basis: calc(50% - 40px);
  height: 2.5vw;
  border-radius: 0.5rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5vw;
  font-size: 1.5vw;
}

.a {
  background-color: purple;
}

.g {
  background-color: green;
}

.t {
  background-color: blue;
}

.tw {
  background-color: orange;
}

.l {
  background-color: red;
}


.container .b {
  background-color: rgb(238, 0, 70);
}

button {
  cursor: pointer;
}
`

export default ListedCompaniesReturned