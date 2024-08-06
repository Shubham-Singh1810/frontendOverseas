import React, { useEffect, useState } from "react";
import { getCourseList, getTradeTestList } from "../services/institute.service";
import TradeTestCard from "../components/TradeTestCard";
function TradeTestingList() {
  const [courseList, setCourseList] = useState([]);
  const getTestTradeListFunc = async () => {
    try {
      let response = await getTradeTestList();
      setCourseList(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    getTestTradeListFunc();
  }, []);
  return (
    <div className="  mt-5 pt-5">
      <div className="mt-5 pt-md-5 container">
        <div className="row mx-3 mb-5 mt-3">
          <div className="col-md-6 col-12 my-auto   d-flex justify-content-center">
            <img
              className="img-fluid"
              src="/images/tiltedApp.png"
              style={{ height: "350px" }}
            />
          </div>
          <div className="col-md-6 col-12 my-auto">
            <div className="py-5">
              <h5 className="textBlue">UPGRADE YOUR SKILL</h5>
              <h1 className="heading ">
                Get testing certificate to get your dream job.
              </h1>
              <p>More than 200 tests | 100 centers</p>
            </div>
          </div>
        </div>
        <h5
          className="text-center my-md-5 pt-md-5 pb-3 textBlue"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: "600" }}
        >
          TRADE TESTING WE OFFER
        </h5>
        <div className="row mb-3">
          <div className="col-6">
            <input className="form-control" placeholder="Search" />
          </div>
          <div className="col-3">
            <select className="form-control">
              <option>Select Course Type</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div className="col-3">
            <select className="form-control">
              <option>Exam Mode</option>
              <option>Writen</option>
              <option>Viva</option>
              <option>Both</option>
            </select>
          </div>
        </div>

        <div className="row">
          {courseList?.length == 0 && (
            <div className="my-5 d-flex align-items-center justify-content-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {courseList?.map((v, i) => {
            return (
              <TradeTestCard v={v}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TradeTestingList;
