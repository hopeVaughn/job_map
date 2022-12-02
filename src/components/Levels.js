import React from 'react';
import Axios from 'axios';
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Levels(props) {

  const [quantity, setQuantity] = useState([]);

  const fetchData = () => {
    try {
      Axios.get(`http://localhost:8080/api/applications`).then((res) => {
        console.log(res.data);
        setQuantity(res.data)
      })
        .catch(err => console.log(err))

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  const navigate = useNavigate();

  const buttonClicked = (button) => {
    props.setLevelClicked(button)
    navigate("/companies")
  }
  /*
  if(outputdata.length % 2 === 0){
    let name = 'resumes'
  }else{
    name='resume'
  }
  
  let names = [resume,interview,offer]
  */


  return (
    <Wrapper>
      <div className="statistics">
        <div
          className="statistics_btn offers_btn offer" onClick={() => buttonClicked(1)}>
          <h4>{` Offers: ${quantity[3]}`}</h4>
        </div>

        <div
          className="statistics_btn tech_iterviews_btn btn" onClick={() => buttonClicked(2)}>
          <h4>{`Tech Interviews: ${quantity[2]} `}</h4>
        </div>

        <div className="statistics_btn hr_iterviews_btn btn" onClick={() => buttonClicked(3)}>
          <h4>{`HR Interviews: ${quantity[1]} `}</h4>
        </div>

        <div className="statistics_btn resume_btn btn" onClick={() => buttonClicked(4)}>
          <h4>{` Resumes Sent: ${quantity[0]}`}</h4>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.statistics {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  column-gap: 40px;
  width: 100%;
  height: 80vh;
  background: var(--clr-primary-900);
  align-items: flex-start;  
}
.statistics_btn {
  display: flex;
  width: 80%;
  height: 6vh;
  justify-content:center;
  align-items:center;
  font-size: min(3vh, 4vw);
  transition-property: color;
  transition-duration: 0s;
  transition-delay: 5s;
  animation: progress 2s ease-in, font 2.25s;
  color: white;
  
}
.statistics_btn:hover {
  background-color: #041f0b;
  cursor: pointer;
}

.resume_btn {
  width: 70%;
  margin-left: 15%;
  
   background-color: #9A031E;
}

.hr_iterviews_btn {
  width: 55%;
  margin-left: 22.5%;
 background-color: #D95D39;
}

.tech_iterviews_btn {
  width: 40%;
  margin-left: 30%;
  background-color: #F18805;
}

.offers_btn {
  width: 25%;
  margin-left: 37.5%;
  
}

.all_companies_btn {
  width: 10%;
  margin-left: 45%;
  font-size: min(2vh, 2vw);
  background:purple;
}
 h4, h5{
  margin:0;
  line-height:0;
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





.offer {
  border-radius: 0.5rem;
  background: #F0A202;
  font-size: 2vw;
  margin-top: 0.3em;
  color: white;
  position: relative;
  z-index: 0;
} 

.offer:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
  opacity: 1;
}

.offer {
  color: var(--clr-complement-1);
}

.offer {
  background: transparent;
}

.offer:after {
  color: white;
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #F0A202;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
} 

`
export default Levels
