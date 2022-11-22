import axios from "axios";
import { useEffect, useState} from "react";
import styled from 'styled-components';


function ListCompanies() {

  const [list, setList] = useState([])
  const [stage, setStage] = useState([])

  const x = 0   //change the parameter depends how is configurate on Landing Page  props

// case 0 = AllCompanies
// case 1 = Offers
// case 2 = Tech interviews
// case 3 = Hr Interviews
// case 4 = resume sent
  const getList = async (stage) => {
    try {
          switch (stage) {
            case 0:
              const all = await axios.get("http://localhost:8080/api/companies/")
              //console.log(res.data[0]);
              setList(all.data);
              setStage('  All Companies')
              break;
            
            case 1:
              const offers = await axios.get("http://localhost:8080/api/applications/job_offers")
              console.log(offers.data[1]);
              setList(offers.data);
              setStage('  Job Offers')
              break;

             case 2:
              const tech = await axios.get("http://localhost:8080/api/applications/tech_interviews")
              console.log(tech.data);
              setList(tech.data);
              setStage('  Tech Interviews')
            break;

            case 3:
              const hr = await axios.get("http://localhost:8080/api/applications/hr_interviews")
              console.log(hr.data);
              setList(hr.data);
              setStage('  HR Interviews')
            break;

            case 4:
              const resumesent = await axios.get("http://localhost:8080/api/applications/resumes")
              console.log(resumesent.data);
              setList(resumesent.data);
              setStage('  Resumes Sent')
            break;
            
            default:
            
            break;
          }

    } catch (err) {
          alert(err.message);
      }
  }


  useEffect(() => {
    getList(x)   
    
  }, []);


  return (
    <>
      <Wrapper>
        <div className='childa'>
          <span className="quantity">{list.length}</span>   {stage}
        </div>
    
        <div className='container'>
          <div className='childb'>
             Company Name    {/*Fixed*/}
          </div>
          <div className='childb'>
            Resume Submission Date {/*base on the request*/}
          </div>
        </div>
      
      {list.map((t) =>
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