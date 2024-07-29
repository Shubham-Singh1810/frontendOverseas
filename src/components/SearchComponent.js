import React, { useEffect, useState } from "react";
import { getCountriesForJobs, getOccupations } from "../services/info.service";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
function SearchComponent({ fullWidth }) {

  return (
    <div className="row justify-content-center">
      <div
        className={
          " col-10  d-flex justify-content-between p-2 bg-light " +
          (fullWidth ? "col-md-10" : "col-md-8")
        }
        style={{ borderRadius: "30px" }}
      >
        <input
          className="ms-2 bg-light"
          placeholder="Search jobs"
          style={{ width: "70%", border: "none", outline: "none" }}
        />

        <div className="d-flex align-items-center">
          <button className="btn btn-primary bgBlue" style={{ border: "none" }}>
            Search
          </button>
          <div
            className="ms-2 shadow"
            style={{
              height: "45px",
              width: "45px",
              border: "1px solid #17487F",
              background: "#F6F6F6",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={
                "https://tse4.mm.bing.net/th?id=OIP.lFtxYRQ6fiHaesf9Hg0XjQAAAA&pid=Api&P=0&h=180"
              }
              style={{ height: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
