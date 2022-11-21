import React from "react";
import 'animate.css';
import styled from 'styled-components';
import Axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Levels from "../components/Levels";

function LandingPage() {

  const [state, setState] = useState([]);

  const fetchData = () => {
    try {
      Axios.get(`http://localhost:8080/api/applications`).then((res) => {
        setState(res.data)
      })

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="charts">
        <div>
          reserved for the bar graph
        </div>

        <div >
          reserved for the donut graph
        </div>
      </div>

      <Levels state={state} navigate={navigate}/>      

    </Wrapper>
  )
}

const Wrapper = styled.div`
.charts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  width: 100%;
  height: 40vh;
  background-color: #a6b570;
}
.statistics {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  column-gap: 40px;
  width: 100%;
  height: 40vh;
  background-color:#9dab6a;
  align-items: flex-start;  
}

.landing {
  width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.statistics_btn {
  width: 80%;
  height: 6vh;
  font-size: min(3vh, 4vw);
  
  transition-property: color;
  transition-duration: 0s;
  transition-delay: 5s;
  animation: progress 0.8s ease-in, font 1s;
  color: white;
  
}
.statistics_btn:hover {
  background-color: #041f0b;
  cursor: pointer;
}

.resume_btn {
  width: 70%;
  margin-left: 15%;
}

.hr_iterviews_btn {
  width: 55%;
  margin-left: 22.5%;
}

.tech_iterviews_btn {
  width: 40%;
  margin-left: 30%;
}

.offers_btn {
  width: 25%;
  margin-left: 37.5%;
}

.all_companies_btn {
  width: 10%;
  margin-left: 45%;
  font-size: min(2vh, 2vw);
}

@keyframes progress {
  from {width: 0%;}
  0% {
    background-color: white;
  }
 
  50% {
    background-color: grey;
  }
  
  100% {
    background-color: black;
  }
}

@keyframes font {
  0% {color: transparent;}
  75%{color: transparent;}
  100% {color: inherit;}
}
`
export default LandingPage;