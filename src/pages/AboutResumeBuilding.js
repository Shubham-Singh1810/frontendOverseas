import React from "react";
import { useNavigate } from "react-router-dom";
function AboutResumeBuilding() {
    const navigate = useNavigate()
  return (
    <div className="mt-5 py-5">
      <div className="mt-5 py-5 container">
        <div className="row mx-3 mb-5 my-3">
          <div className="col-md-6 col-12 my-auto order-md-1 order-2">
            <div className="py-5">
              <h5 className="textBlue">RESUME BUILDER</h5>
              <h1 className="heading ">Get your customised resume builder</h1>
              <p>With Overseas resume builder</p>
              <button className="btn btn-primary" onClick={()=>navigate("/resume-building")}>Create Now</button>
            </div>
          </div>
          <div className="col-md-6 col-12 my-auto order-md-1  d-flex justify-content-center">
            <img
              className="img-fluid"
              src="https://cdn-icons-png.flaticon.com/256/14477/14477419.png"
              style={{ height: "350px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutResumeBuilding;
