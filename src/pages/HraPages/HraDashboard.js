import React, {useState} from "react";
import { useGlobalState } from "../../GlobalProvider";
import { useNavigate } from "react-router-dom";
function HraDashboard() {
    const navigate = useNavigate()
  const { globalState, setGlobalState } = useGlobalState();
  const statice = [
    {
      name: "Job Application",
      count: "50",
      icon: "fa fa-list me-2",
    },
    {
      name: "Posted Jobs",
      count: "24",
      icon: "fa fa-suitcase me-2",
    },

    {
      name: "Candidates",
      count: "24",
      icon: "fa fa-user me-2",
    },
  ];
  const renderStart = (star) => {
    // Create an array with the length equal to the star number
    const starArray = Array.from({ length: star }, (_, i) => i);
  
    return (
      <h5 className="mb-0">
        {starArray.map((_, i) => (
          <i key={i} className="fa fa-star text-warning me-1"></i>
        ))}
      </h5>
    );
  };
  const logoutFunc = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  const [navItems, setNavItems] = useState([
    {
      name: "Create Job",
      icon: "fa fa-suitcase",
      path: "/create-jobs",
    },
    {
      name: "Bulk Hire",
      icon: "fa fa-users",
      path: "/applied-jobs",
    },
    {
      name: "View Jobs",
      icon: "fa fa-briefcase",
      path: "/my-documents",
    },
    {
      name: "View Application",
      icon: "fa fa-list",
      path: "/saved-jobs",
    },
    {
      name: "Recommended Candidate",
      icon: "fa fa-user",
      path: "/notifications",
    },
    {
      name: "Notification",
      icon: "fa fa-bell",
      path: "/candidate-experiences",
    },
    {
      name: "Need Help",
      icon: "fa fa-question-circle",
      path: "/contact-us",
    },
  ]);
  return (
    <div className="container mt-5 pt-5">
      <div className="mt-md-5 py-md-5 mb-5">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="p-3  shadow-sm border rounded">
              <div className="d-flex my-3 align-items-center">
                <div>
                  <img
                    src={globalState?.user?.cmpData?.cmpLogoS3}
                    style={{
                      height: "110px",
                      width: "110px",
                      borderRadius: "50%",
                    }}
                  />
                  <p
                    className="text-center textBlue"
                    style={{ cursor: "pointer" }}
                    onClick={() => alert("Work in progress")}
                  >
                    <u>Edit</u>
                  </p>
                </div>

                <div className="ms-3">
                  <h4 className="mb-1">
                    {globalState?.user?.cmpData?.cmpName}
                  </h4>
                  {renderStart(parseInt(globalState?.user?.cmpData?.cmpRating))}
                  
                  <p>
                    <i className="fa fa-phone"></i>{" "}
                    {globalState?.user?.cmpData?.cmpPhone}
                  </p>
                </div>
              </div>
              {/* <div className="border" style={{ marginTop: "-10px" }}>
                <div
                  style={{
                    width: parseInt(
                      globalState?.user?.empData?.profileStrength
                    ),
                    height: "7px",
                    background: "green",
                  }}
                ></div>
              </div>
              <span>Profile Strength</span> */}

              <div className="mt-3 mb-5 ms-2">
                {navItems?.map((v, i) => {
                  return (
                    <div
                      className="p-3"
                      style={{
                        borderBottom: "1px solid gray",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(v?.path)}
                    >
                      <i className={"me-2 " + v?.icon}></i>
                      <span>{v?.name}</span>
                    </div>
                  );
                })}

                <div
                  className="p-3"
                  style={{
                    borderBottom: "1px solid gray",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                  onClick={() => logoutFunc()}
                >
                  <i className="fa fa-sign-out me-2"></i>
                  <span>Log Out</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-8 row d-none d-md-flex custom-myProfile-scrollbar">
            {statice?.map((v, i) => {
              return (
                <div className="col-lg-4">
                  <div className="shadow-sm p-4 ">
                    <h5 className="text-secondary">{v?.name}</h5>
                    <div className="d-flex">
                      <h2 className="text-secondary">
                        <i className={v?.icon}></i>
                      </h2>
                      <h2 className="text-secondary">{v?.count}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HraDashboard;
