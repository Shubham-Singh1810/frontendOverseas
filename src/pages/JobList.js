import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { getJobList } from "../services/job.service";
import SearchComponent from "../components/SearchComponent";
import { useParams } from "react-router-dom";
import JobFilter from "../components/JobFilter";
// import SearchForm from "../components/SearchForm";
function JobList() {
  const params = useParams();
  const [jobArr, setJobArr] = useState([]);
  
  const [showLoader, setShowLoader] = useState(false);
  
  
  const [payload, setPayload] = useState({
    jobLocationCountry: [],
    jobOccupation: [],
    passportType: "",
    languageRequired: [],
    contractPeriod: "",
    jobExpTypeReq: "",
    sortBy: "",
  });
  const getJob = async () => {
    setShowLoader(true);
    try {
        // Create a new FormData object
        const formData = new FormData();
        
        // Append payload values to the FormData object
        for (const key in payload) {
          if (Array.isArray(payload[key])) {
              if (payload[key].length > 0) {
                  // Convert non-empty arrays to JSON strings
                  formData.append(key, JSON.stringify(payload[key]));
              }
          } else if (payload[key] !== "") {
              formData.append(key, payload[key]);
          }
      }
        formData.append("pageNo", pageNo)
        // Send the FormData object in the request
        let response = await getJobList(formData);
        setJobArr(response?.jobs);
        
        pageNumber(response?.totalJobs);
        setShowLoader(false);
    } catch (error) {
        console.error('Error fetching job list:', error);
        setShowLoader(false);
    }
};

  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    getJob();
  }, [pageNo, payload]);
  const [totalPage, setTotalPage] = useState([]);
  const pageNumber = async (totalJobs) => {
    try {
      let totalPage = Math.ceil(totalJobs / 10);
      let arr = [];
      for (let i = 1; i <= totalPage; i++) {
        arr[i - 1] = i;
      }
      setTotalPage(arr);
    } catch (error) {}
  };
  const [showFilter, setShowFilter] = useState(
    window.innerWidth > 700 ? true : false
  );
  return (
    <div className="container mt-md-5 pt-5">
      <div className="mt-5 pt-5 mx-0">
        <div className="row m-0 p-0">
          {showFilter && (
            <JobFilter setShowFilter={setShowFilter} setPayload={setPayload} payload={payload} showFilter={showFilter} />
          )}

          {showLoader ? (
            <div className="vh-100 row col-md-8 col-lg-6 col-12 justify-content-center align-items-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row col-md-8 col-lg-6 col-12 m-0 p-0 ">
              <div className="col-12 p-0 p-md-2">
                <div className="d-flex align-items-center justify-content-between  border p-2 rounded">
                  <input
                    style={{
                      border: "none",
                      width: "80%",
                      paddingLeft: "10px",
                    }}
                    placeholder="Search By Job Title"
                  />
                  <h3 className="mb-0">
                    <i
                      className="fa fa-filter"
                      onClick={() => setShowFilter(true)}
                    ></i>
                  </h3>
                </div>
              </div>
              {jobArr?.map((v, i) => {
                return <JobCard value={v} />;
              })}
            </div>
          )}

          <div className="col-lg-3 d-none d-md-none d-lg-block">
            <img className="img-fluid" src="/images/fullMobileNew.png" />
            <div className="row mx-2">
              <div className="col-4">
                <img className="img-fluid" src="/images/appQR.png" />
              </div>
              <div className="col-8 my-auto border rounded">
                <img
                  className="img-fluid"
                  src="https://overseas.ai/newfrontend/image/google-play.png"
                />
              </div>
            </div>
          </div>
        </div>

        <nav
          aria-label="Page navigation example"
          className=" d-flex justify-content-center my-5"
        >
          <ul className="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Prev
              </a>
            </li>
            {totalPage?.map((v, i) => {
              return (
                <li className="page-item" onClick={() => setPageNo(v)}>
                  <a className="page-link" href="#">
                    {v}
                  </a>
                </li>
              );
            })}
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default JobList;
