import styled from 'styled-components';

function ListedCompaniesLabelMiddle() {

  return (
    <Wrapper>
      <div className='container'>
          <div className='childb'>
                  Company Name    {/*Fixed*/}
          </div>
          <div className='childb'>
              Resume Submission Date {/*base on the request*/}
          </div>
      </div>
    </Wrapper> 
  )
}

const Wrapper = styled.section`
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  font-size: 1.5vw;
}

.container .childb {
  background-color: rgb(93, 158, 40);
  flex-basis: calc(50% - 40px);
  height: 3vw;
  border-radius: 0.5rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vw;
}

`


export default ListedCompaniesLabelMiddle