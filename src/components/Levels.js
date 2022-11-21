import React from 'react'

function Levels(props) {
  return (
    <div>
      <div className="statistics">
        <div className="statistics_btn all_companies_btn" onClick={() => props.navigate("/companies")}>All Companies</div>
        <div className="statistics_btn offers_btn" onClick={() => props.navigate("/companies/:id")}>{`${props.state[3]} Offers`}</div>
        <div className="statistics_btn tech_iterviews_btn">{`${props.state[2]} Tech Interviews`}</div>
        <div className="statistics_btn hr_iterviews_btn">{`${props.state[1]} HR Interviews`}</div>
        <div className="statistics_btn resume_btn">{`${props.state[0]} Resumes Sent`}</div>
      </div>
    </div>
  )
}

export default Levels