import React, { useEffect, useState } from "react";
import {useNavigate, Link} from "react-router-dom"
import { getHraList } from "../services/hra.service";
function Companies() {
  const navigate = useNavigate()
  const [hraList, setHraList] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const getHraListFunc = async () => {
    try {
      let response = await getHraList();
      setHraList(response?.data?.cmpData);
      setFilteredArray(response?.data?.cmpData)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHraListFunc();
  }, []);
  const renderStars = (numRatings) => {
    const stars = [];
    for (let i = 0; i < numRatings; i++) {
      stars.push(<i className="fa fa-star text-warning me-1"></i>);
    }
    return stars;
  };
  const [searchKey, setSearchKey] = useState("");
  
  const searchResultFunc = (key) => {
    if (key.length != 0) {
      setFilteredArray(
        hraList.filter((item) =>
          item?.cmpName.toLowerCase().includes(key.toLowerCase())
        )
      );
    } else {
      setFilteredArray(hraList);
    }
  };
  const sinceSort = order => {
    if (order == 'asc') {
        setFilteredArray(
        hraList.sort((a, b) => {
          // Handle null values for cmpWorkingFrom
          const workingFromA = a.cmpWorkingFrom || '0000-00-00'; // Use a default date if cmpWorkingFrom is null
          const workingFromB = b.cmpWorkingFrom || '0000-00-00';

          // Compare dates
          return workingFromA.localeCompare(workingFromB);
        }),
      );
    } else if (order == 'desc') {
        setFilteredArray(
        hraList.sort((b, a) => {
          // Handle null values for cmpWorkingFrom
          const workingFromA = a.cmpWorkingFrom || '0000-00-00'; // Use a default date if cmpWorkingFrom is null
          const workingFromB = b.cmpWorkingFrom || '0000-00-00';

          // Compare dates
          return workingFromA.localeCompare(workingFromB);
        }),
      );
    }else{
        setFilteredArray(hraList)
    }
  };
  return (
    <div className="mt-5 pt-5">
      <div className="mt-5 pt-5 container ">
        <div className="row mx-3 mb-5 mt-3">
          <div className="col-md-6 col-12 my-auto">
            <div className="py-5">
            <h5 className="textBlue">INDIA’S #1 HIRING PLATFORM</h5>
            <h1 className="heading ">Find the right
            candidate. Fast.</h1>
            <p>Trusted by 5 Cr+ Candidates | 7 Lakh+ Employers</p>
            </div>
          </div>
          <div className="col-md-6 col-12 my-auto order-md-1 ">
            <div className="shadow rounded bg-light p-md-4 p-3 m-md-3 m-0">
              <h3 className="mb-4">
                <i className="fa fa-users me-2"></i>Employer Register
              </h3>
              <label>Company/Office</label>
              <input className="form-control" />
              <br />
              <label>Official Phone Number</label>
              <div className="d-flex">
                <input className="form-control" style={{ width: "17%" }} placeholder="+91" />
                <input className="form-control" style={{ width: "83%" }} placeholder=""/>
              </div>
              <br/>
              <div className="align-items-center d-flex mb-3 justify-content-center">
                <input type="checkbox"/>
                <span className="ms-2" style={{fontWeight:"500", position:"relative", bottom:"1px"}}>I agree with overseas Terms & Conditions And The Privacy Policy</span>
              </div>
              <button className="btn btn-success w-100">Sign Up</button>
              <p className="text-center mt-3">Already have an account ? <Link to="/login">Login</Link></p>
              
            </div>
          </div>
        </div>
        <h5 className="text-center my-5 pt-5 pb-3 textBlue" style={{fontFamily:"Inter, sans-serif", fontWeight:"600"}}>COMPANIES THAT HIRE FROM US</h5>
        <div className="row mx-3 mb-4">
          <div className="col-6">
            <input
              className="form-control"
              placeholder="Search By Name"
              value={searchKey}
              onChange={(e) => {
                searchResultFunc(e.target.value);
                setSearchKey(e.target.value);
              }}
            />
          </div>
         
          <div className="col-3">
            <select
              class="customSelect text-secondary form-control   "
              aria-label="Default select example"
            >
              <option value="">Sort By</option>

              <option value="">Name : A To Z</option>
              <option value="">Name : Z To A</option>
            </select>
          </div>
          <div className="col-3">
            <select
              class="customSelect text-secondary form-control   "
              aria-label="Default select example"
              onChange={(e) => {
                sinceSort(e.target.value);
              }}
            >
              <option value="">Since</option>

              <option value="asc">Oldest to Newest</option>
              <option value="desc">Newest to Oldest</option>
            </select>
          </div>
        </div>
        <div className="row m-0 p-0">
          {filteredArray?.map((v, i) => {
            return (
              <div className="col-12 col-md-6" onClick={()=>navigate(`/company/${v?.id}`)}>
                <div className="p-4 m-3 shadow rounded">
                  <div className="row">
                    <div className="col-4">
                      <img src={v?.cmpLogoS3=="placeholder/logo.png"? "https://overseasdata.s3.ap-south-1.amazonaws.com/Company/6/logo.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240729%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240729T095743Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=e2da4312025d2bbb07f3d67f3db3b9b60690369085896b11a4ef29b02ca0e4ed" : v?.cmpLogoS3} className="img-fluid" />
                    </div>
                    <div className="col-8 my-auto">
                      <h5>{v?.cmpName}</h5>
                      <p className="mb-0">Since {v?.cmpWorkingFrom}</p>
                      <div>{renderStars(v?.cmpRating)}</div>
                      <a
                        href={v?.cmpWebsiteLink}
                        target="blank"
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "600",
                        }}
                      >
                        Visit Website
                      </a>
                    </div>
                    <div className="col-12">
                      <p className="my-3" style={{height:"90px"}}>
                        {v?.cmpDescription?.substring(0, 200)}{" "}
                        {v?.cmpDescription?.length > 200 && "..."}
                      </p>
                      <div className="d-flex ">
                        <button className="btn btn-outline-primary">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Companies;
