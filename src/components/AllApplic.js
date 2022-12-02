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
    setInputSearch(event.target.value);
  };

  useEffect (() => {
    inputSearch === '' ? setSearchData([]) : allApplic(inputSearch);
  }, [debouncedValue])

  return (
    <Wrapper>
     <section>
        <button className='btn'
          onClick={listAll}
        >
          See All Applications
        </button >
        <button className='btn'
          onClick={clear}
        >
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
        <div className='outer-div'> 
          <div className='grid-box header'>
            <div>Company</div>
            <div>Resume Sent Date</div>
            <div>Stage</div>
            <div>Applied Position</div>
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
          return (<div className='outer-div b' key={x.id}> 
            <div className={` ${color} grid-box b`} onClick={() => listApplications(x.id)}>
              <div>{x.name}</div>
              <div>{x.resume_sent_date.slice(0, 10)}</div>
              <div>{message}</div>
              <div>
                {x.front_end ? "Front End" : " "}
                {x.back_end ? "Back End" : " "}
                {x.full_stack ? "Full Stack" : " "}
              </div>
            </div>
          </div>)}
        )}
      </section>
    </Wrapper>
  
  )
}

export default AllApplic

const Wrapper = styled.main`
color: white;
text-align: center;

.header{
  background-color: gray;
  font-size: 120%;
}

.outer-div {
  width: 100%;
  text-align: -webkit-center;
}

.btn{
  margin: 1%;
}

.b {
  cursor: pointer;
}
.b:hover {
  transform: scale(1.03);
}

.title{
  margin-bottom: 2vw;
}

.grid-box {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 0;
  border: groove;
  border-radius: 0.5rem;
  background-color: gray;
  color: #FFFFFF;
  width: 70% 
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