import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Levels() {

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
    <div>
      <div className="statistics">
        <div className="statistics_btn all_companies_btn" onClick={() => navigate("/companies")}>All Companies</div>
        <div className="statistics_btn offers_btn" onClick={() => navigate("/companies/:id")}>{`${state[3]} Offers`}</div>
        <div className="statistics_btn tech_iterviews_btn">{`${state[2]} Tech Interviews`}</div>
        <div className="statistics_btn hr_iterviews_btn">{`${state[1]} HR Interviews`}</div>
        <div className="statistics_btn resume_btn">{`${state[0]} Resumes Sent`}</div>
      </div>
    </div>
  )
}

export default Levels