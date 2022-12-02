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
        <div className='outer-div b' key={x.id}> 
          <div className='grid-box b' onClick={() => listApplications(x.id)}>
            <div>{x.name}</div>
            <div>{x.resume_sent_date.slice(0, 10)}</div>
            <div>
              {x.resume_sent ? "Resume Sent" : " "}      
              {x.hr_interview ? "Hr Interview" : " "}
              {x.tech_interview ? "Tech Interview" : " "}
              {x.job_offer ? " ⭐ Got a Offer" : " "}
            </div>
            <div>
              {x.front_end ? "Front End" : " "}
              {x.back_end ? "Back End" : " "}
              {x.full_stack ? "Full Stack" : " "}
            </div>
          </div>
        </div>
        )}
    </section>
    </Wrapper>
  
  )
}

export default AllApplic

const Wrapper = styled.main`
color: white;
text-align: center;

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
  transform: scale(1.05);
  
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

.header{
  background: black;
}
`