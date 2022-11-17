import React from "react";
import 'animate.css';
import styled from 'styled-components';


/*
function LandingPage() {
  return (
    <div className="landing">
      <div className="charts">
        <div>
          reserved for the bar graph
        </div>

        <div >
          reserved for the donut graph
        </div>
      </div>
      

      <div className="statistic">
        <div className="statistic_btn all_companies_btn">All Companies</div>
        <div className="statistic_btn offers_btn">5 offers</div>
        <div className="statistic_btn tech_iterviews_btn">10 Tech Interviews</div>
        <div className="statistic_btn hr_iterviews_btn">15 HR Interviews</div>
        <div className="statistic_btn resume_btn">20 Resumes Sent</div>    
      </div>
      
  </div>
  )
}
*/



function LandingPage() {
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
      

      <div className="statistic">
        <div className="statistic_btn all_companies_btn">All Companies</div>
        <div className="statistic_btn offers_btn">5 offers</div>
        <div className="statistic_btn tech_iterviews_btn">10 Tech Interviews</div>
        <div className="statistic_btn hr_iterviews_btn">15 HR Interviews</div>
        <div className="statistic_btn resume_btn">20 Resumes Sent</div>  
      </div>
      
  </Wrapper>
  )
}

const Wrapper = styled.div`
.charts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  border: 3px solid #73AD21;
  width: 100%;
  height: 40vh;
  background-color: hsl(209, 23%, 60%);
}
.statistic {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  column-gap: 40px;
  border: 3px solid #73AD21; 
  width: 100%;
  height: 40vh;
  background-color:darkseagreen;
  align-items: flex-start;
  content: delay: 2s;
  
}

.landing {
  width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
}

.statistic_btn {
  width: 80%;
  height: 6vh;
  font-size: min(3vh, 4vw);
  background-color: black;
  transition-property: color;
  transition-duration: 0s;
  transition-delay: 5s; 
  animation: progress 0.8s ease-in, font 0.6s;
  color: white; 
 
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