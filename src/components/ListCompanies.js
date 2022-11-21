import styled from 'styled-components';


function ListCompanies() {




const test = [
  {
    id: 1,
    user_id: "5c2ea821-8462-4c2b-8bb7-eb1b30739837",
    name: "Amazon", 
  },
  {
    id: 2,
    user_id: "5c2ea821-8462-4c2b-8bb7-eb1b30739837",
    name: "Google",
  },
  {
    id: 3,
    user_id: "5c2ea821-8462-4c2b-8bb7-eb1b30739837",
    name: "Tesla",
  },
  {
    id: 4,
    user_id: "5c2ea821-8462-4c2b-8bb7-eb1b30739837",
    name: "Twitter",
  },
  {
    id: 5,
    user_id: "5c2ea821-8462-4c2b-8bb7-eb1b30739837",
    name: "LHL",
  }
]



  return (
    <>
      <Wrapper>
        <div className='childa'>
          <span className="quantity">{test.length}</span>   Hr Interview
        </div>
    
        <div className='container'>
          <div className='childb'>
             Company Name    {/*Fixed*/}
          </div>
          <div className='childb'>
            Resume Submission Date {/*base on the request*/}
          </div>
        </div>
      
        {test.map((t) =>
        <div className='container'>
              <button className='child a'>
                {t.name}  
              </button>
              <div className='child b'>
                Information requested {/*base on the request*/}
              </div>      
        </div>
       )}
      </Wrapper>

      
  
    </>
  )
}

export default ListCompanies

const Wrapper = styled.section`
.childa {
  flex-basis: calc(100% - 40px);
  height: 8vw;
  border-radius: 0.5rem;
  background-color: rgb(238, 160, 70);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4% 30% 4% 30%;
  font-size: 2vw;
  white-space:pre;
 }

 .childa .quantity{
  font-size:5vw
 }
 

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