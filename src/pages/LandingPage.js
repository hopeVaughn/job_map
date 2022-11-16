import React from "react";
import 'animate.css';



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




export default LandingPage;