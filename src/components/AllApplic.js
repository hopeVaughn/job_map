import React from 'react'
import styled from 'styled-components';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from '../hooks/useDebounce';

function AllApplic() {
  const [inputSearch, setInputSearch] = useState(""); 
  const [all, setAll] = useState([]); 

  //a busca so vai ser executada apos 500ms , por causa do debounce 
  const debouncedValue = useDebounce(inputSearch, 500);


  async function allApplic(parameter) {
    try {
      const res = await axios.get(`http://localhost:8080/api/applications/all/`);
      const filteredData = res.data.filter(app => app.name.includes(parameter))
      setAll(filteredData);
    } catch (err) {
      console.error(err.message);
    }
  }
  
  const navigate = useNavigate();
  const listApplications = (id) => {
    navigate(`/application/${id}`)
  }


  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };

  useEffect (() => {
    inputSearch === '' ? setAll([]) : allApplic(inputSearch);
  }, [debouncedValue])

  return (
    <Wrapper>
     <section>
        <button type="submit">
          See All Applications
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

        {/* <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button> */}
      {all.length > 0 &&
        all.map((x) =>
        <div className='outer-div b' key={x.id}> 
          <div className='grid-box b' onClick={() => listApplications(x.id)}>
            <div>{x.name}</div>
            <div>{x.resume_sent_date}</div>
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

`