import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";
function MyProfile() {
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useGlobalState();
  const logoutFunc = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <div className="container mt-5 pt-5">
      <div className="mt-md-5 py-5 mb-5">
        <div className="row">
        <div className="col-4">
          <div className="p-3  shadow-sm border rounded">
            <div className="d-flex my-3 align-items-center">
              <div>
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.1S5uaNuMx81OHFB8GMJq5wHaLG&pid=Api&P=0&h=180"
                  style={{
                    height: "110px",
                    width: "110px",
                    borderRadius: "50%",
                  }}
                />
                <p className="text-center textBlue">
                  <u>Edit</u>
                </p>
              </div>

              <div className="ms-3">
                <h4 className="mb-1">Shubham Singh</h4>
                <h5 className="mb-0">
                  <i className="fa fa-star text-warning me-1"></i>
                  <i className="fa fa-star text-warning me-1"></i>
                  <i className="fa fa-star text-warning me-1"></i>
                </h5>
                <p className="mb-0">Driver / Operator - Dumper Driver</p>
                <p>
                  <i className="fa fa-phone"></i> 7762042085
                </p>
              </div>
            </div>
            <div className="border" style={{ marginTop: "-10px" }}>
              <div
                style={{ width: "70%", height: "7px", background: "green" }}
              ></div>
            </div>
            <span>Profile Strength</span>

            <div className="mt-3 mb-5 ms-2">
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" }}
              >
                <i className="fa fa-graduation-cap me-2"></i>
                <span>Courses Applied</span>
              </div>
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" }}
              >
                <i className="fa fa-briefcase me-2"></i>
                <span>Job Applied</span>
              </div>
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" }}
              >
                <i className="fa fa-file me-2"></i>
                <span>My Documents</span>
              </div>
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" }}
              >
                <i className="fa fa-save me-2"></i>
                <span>Saved Jobs</span>
              </div>
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" }}
              >
                <i className="fa fa-bell me-2"></i>
                <span>Notifications</span>
              </div>
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" }}
              >
                <i className="fa fa-briefcase me-2"></i>
                <span>Experience</span>
              </div>
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" ,cursor:"pointer"}}
                onClick={()=>navigate("/contact-us")}
              >
                <i className="fa fa-question-circle me-2"></i>
                <span>Need Help</span>
              </div>
              <div
                className="p-3"
                style={{ borderBottom: "1px solid gray", borderRadius: "6px" , cursor:"pointer"}}
                onClick={()=>logoutFunc()}
              >
                <i className="fa fa-sign-out me-2"></i>
                <span>Log Out</span>
              </div>
            </div>
          </div>
          </div>
          <div className="col-8  ">
            <div className="ms-2 rounded vh-100 border">
              {/* job slider start */}
              <div>
                <p>Favroite Jobs</p>
              </div>
              {/* job slider end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
