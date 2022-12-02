import React from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from '../hooks/useDebounce';

function AllApplic() {
  const [inputSearch, setInputSearch] = useState(""); 
  const [searchData, setSearchData] = useState([]); 
  const [getAll, setGetAll] = useState([]);

 
  //debounce used to wait user type couple words before call
  const debouncedValue = useDebounce(inputSearch, 500);


  async function allApplic(parameter) {
    try {
      const res = await axios.get(`http://localhost:8080/api/applications/all/`);
      setGetAll(res.data);
      const filteredData = res.data.filter(app => app.name.includes(parameter))
      setSearchData(filteredData);
    } catch (err) {
      console.error(err.message);
    }
  }

  const listAll = () => {
    allApplic("");
    setSearchData(getAll);
  }

  const clear = () => {
    setSearchData([]);
  }
  
  const navigate = useNavigate();
  const listApplications = (id) => {
    navigate(`/application/${id}`)
  }

  const handleChange = (event) => {
    setInputSearch(event.target.value.charAt(0).toUpperCase());
  };

  useEffect (() => {
    inputSearch === '' ? setSearchData([]) : allApplic(inputSearch);
  }, [debouncedValue])

  return (
    <Wrapper>
     <section>
        <button className='btn' onClick={listAll}>
          See All Applications
        </button >
        <button className='btn'onClick={clear}>
          Clear
        </button >
        <br/>
        <div>OR</div>
        <br/>
        <span>Search by company name: </span>
        <input
          id="parameter"
          type="text"
          onChange={handleChange}
          placeholder="Company name"
        ></input>
        <br/>
        <br/>
        <br/>     
          <div className='container'>
            <div className='childb'>
              Company Name
            </div>
            <div className='childb'>
              Application Date
            </div>
            <div className='childb'>
              Stage
            </div>
            <div className='childb'>
              Applied Position
            </div>
          </div>

      {searchData.length > 0 &&
        searchData.map((x) =>
        {
          let message;
          let color;
            if(x.resume_sent){
              message = "Resume Sent"
              color = 'red'
            } 
            if(x.hr_interview){
              message = "Hr Interview"
              color = 'orange'
            } 
            if(x.tech_interview){
              message = "Tech Interview"
              color = 'lightOrange'
            } 
            if(x.job_offer){
              message = "⭐ Got a Offer"
              color = 'yellow'
            } 
          return (    
              <div className='container b' key={x.id}>
                <div className={`${color} child btn`} onClick={() => listApplications(x.id)}>
                  {x.name}
                </div>
                <div className="title">{x.resume_sent_date.slice(0, 10)}</div>
                <div className="title">{message}</div>
                <div className="title">
                  {x.front_end ? "Front End" : " "}
                  {x.back_end ? "Back End" : " "}
                  {x.full_stack ? "Full Stack" : " "}
                </div>
              </div>
          )}
        )}
      </section>
    </Wrapper>
  )
}

export default AllApplic

const Wrapper = styled.main`
color: white;
text-align: center;

.btn{
  margin: 1%;
  border-radius: 0.5rem;
}

.b:hover {
  transform: scale(1.03);
  background: var(--clr-primary-600);
  border-radius: 0.5rem;
}

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
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  gap: 10px;
  justify-content: center;
  align-items: space-between;
  font-size: 1.5vw;
}

.container .childb {
  background-color: gray;
  flex-basis: calc(50% - 40px);
  height: 3vw;
  border-radius: 0.5rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vw;
}

.red {
  background-color: #9A031E;
}

.orange {
  background-color: #D95D39;
}

.lightOrange {
  background-color: #F18805;
}

.yellow {
  background-color: #F0A202;
}

`