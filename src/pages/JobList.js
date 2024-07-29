import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { getJobList } from "../services/job.service";
import SearchComponent from "../components/SearchComponent";
import { useParams } from "react-router-dom";
// import SearchForm from "../components/SearchForm";
function JobList() {
  const params = useParams();
  const [jobArr, setJobArr] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [jobFilter, setJobFilter] = useState({
    jobOccupation:
      new URLSearchParams(params.filter).get("job-departmemt") || "",
    jobLocationCountry:
      new URLSearchParams(params.filter).get("job-location-id") || "",
  });
  useEffect(() => {
    
    setJobFilter({
      jobOccupation:
        new URLSearchParams(params.filter).get("job-departmemt") || "",
      jobLocationCountry:
        new URLSearchParams(params.filter).get("job-location-id") || "",
    });
  }, [params]);
  const getJob = async () => {
    console.log("fgjkbdfk", jobFilter)
    setShowLoader(true);
    try {
      let response = await getJobList({ pageNo, ...jobFilter });
      setJobArr(response?.jobs);
      setTotalJobs(response.totalJobs);
      pageNumber(response?.totalJobs);
      setShowLoader(false);
    } catch (error) {}
  };
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    getJob();
  }, [pageNo, jobFilter]);
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

  return (
    <div className="container mt-5 pt-5">
      <div className="mt-5 pt-5 mx-0">
        <div className="row">
          <div
            className="col-3 p-3 rounded filterDiv"
            style={{ background: "whitesmoke", overflow: "auto" }}
          >
            <h5 className="">
              <i className="fa fa-filter me-1"></i>Filters
            </h5>
            <div className="ms-2 mt-3">
              <h6 className="mt-2">Sort By</h6>
              <div className="d-flex mb-2 align-items-center">
                <input type="checkbox" className="me-2" />
                <span>Service Charge - Low to high</span>
              </div>
              <div className="d-flex mb-2 align-items-center">
                <input type="checkbox" className="me-2" />
                <span>Salary - High to Low</span>
              </div>
              <div className="d-flex mb-2 align-items-center">
                <input type="checkbox" className="me-2" />
                <span>Experience - Fresher to Experienced</span>
              </div>

              <div className="d-flex mb-2 align-items-center">
                <input type="checkbox" className="me-2" />
                <span>Age limit - High to Low</span>
              </div>
              <div className="d-flex mb-2 align-items-center">
                <input type="checkbox" className="me-2" />
                <span>Date posted - New to Old</span>
              </div>
              <div className="d-flex mb-2 align-items-center">
                <input type="checkbox" className="me-2" />
                <span>Working Hours - low to High</span>
              </div>
            </div>
            <hr />
            <div className="ms-2 mt-3">
              <h6>Department</h6>
              <input className="form-control" placeholder="Search Department" />
              <div className="mt-2">
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Administration and office</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Air Conditioning</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Carpentry</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Civil</span>
                </div>
                <h6 className="textBlue">
                  <u>12 more department</u>
                </h6>
              </div>
            </div>
            <hr />
            <div className="ms-2 mt-3">
              <h6>Country</h6>
              <input className="form-control" placeholder="Search Country" />
              <div className="mt-2">
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>United Arab Emirates</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Kuwait</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Uzbekistan</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Saudi Arabia</span>
                </div>
                <h6 className="textBlue">
                  <u>6 more countries</u>
                </h6>
              </div>
            </div>
            <hr />
            <div className="ms-2 mt-3">
              <h6>Passport Type</h6>

              <div className="mt-2">
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>All</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>ECR</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>ECNR</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="ms-2 mt-3">
              <h6>Experience Type</h6>

              <div className="mt-2">
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>N/A</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Indian</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>International</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Indian/International</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="ms-2 mt-3">
              <h6>Language Required</h6>

              <div className="mt-2">
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>English</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Arabic</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Japanese</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>German</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Hindi</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="ms-2 mt-3">
              <h6>Contract Period</h6>

              <div className="mt-2">
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>0 to 12 months</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>0 to 24 months</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>0 to 36 months</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="ms-2 mt-3">
              <h6>Free Accommodation</h6>

              <div className="mt-2">
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>Yes</span>
                </div>
                <div className="d-flex mb-2 align-items-center">
                  <input type="checkbox" className="me-2" />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
          {showLoader ? (
            <div className="vh-100 row col-6 justify-content-center align-items-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row col-6">
              <SearchComponent fullWidth={true} />
              {jobArr?.map((v, i) => {
                return <JobCard value={v} />;
              })}
            </div>
          )}

          <div className="col-3">
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
