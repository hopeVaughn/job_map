import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Levels(props) {

  const [quantity, setQuantity] = useState([]);

  const fetchData = () => {
    try {
      Axios.get(`http://localhost:8080/api/applications`).then((res) => {
        setQuantity(res.data)
      })

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

  return (
    <div>
      <div className="statistics">
        <div 
          className="statistics_btn all_companies_btn" 
          onClick={() => buttonClicked("all")}
          >All Companies
        </div>
        
        <div 
        className="statistics_btn offers_btn" 
        onClick={() => buttonClicked("offers")}
        >{`${quantity[3]} Offers`}
        </div>

        <div 
        className="statistics_btn tech_iterviews_btn"
        onClick={() => buttonClicked("tech")}
        >{`${quantity[2]} Tech Interviews`}
        </div>

        <div 
        className="statistics_btn hr_iterviews_btn"
        onClick={() => buttonClicked("hr")}
        >{`${quantity[1]} HR Interviews`}
        </div>

        <div 
        className="statistics_btn resume_btn"
        onClick={() => buttonClicked("resumes")}
        >{`${quantity[0]} Resumes Sent`}
        </div>

      </div>
    </div>
  )
}

export default Levels