import React, { useEffect, useState } from "react";
import { getUserDetails } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";
import CourseCard from "../components/CourseCard";
import AppliedCourseCard from "../components/AppliedCourseCard";
import Slider from "react-slick";
import AppliedJobCard from "../components/AppliedJobCard";
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
  const [navItems, setNavItems] = useState([
    {
      name: "Courses Applied",
      icon: "fa fa-graduation-cap",
      path: "/applied-courses",
    },
    {
      name: "Job Applied",
      icon: "fa fa-graduation-cap",
      path: "/applied-jobs",
    },
    {
      name: "My Documents",
      icon: "fa fa-file",
      path: "/my-documents",
    },
    {
      name: "Saved Jobs",
      icon: "fa fa-save",
      path: "/saved-jobs",
    },
    {
      name: "Notifications",
      icon: "fa fa-bell",
      path: "/notifications",
    },
    {
      name: "Experience",
      icon: "fa fa-briefcase",
      path: "/candidate-experiences",
    },
    {
      name: "Need Help",
      icon: "fa fa-question-circle",
      path: "/contact-us",
    },
  ]);
  const [userData, setUserData] = useState();
  const getUserDetailsFunc = async () => {
    try {
      let response = await getUserDetails(globalState?.user?.access_token);
      setUserData(response?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getUserDetailsFunc();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1300, // screen width up to 1024px (tablet)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900, // screen width up to 1024px (tablet)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screen width up to 600px (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          <div className="col-8  ">
            <div className="ms-2  p-2 ">
            <h4 className="text-center py-1 bgBlue text-light">Applied Jobs</h4>
              <div className="row">
                <Slider {...settings}>
                  {userData?.applied_jobs?.map((v, i) => {
                    return (
                      <div className="">
                        <AppliedJobCard value={v} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="d-flex justify-content-end mt-2 mb-5 me-4"><button className="btn btn-sm btn-outline-primary">View All</button></div>
              
              <h4 className="text-center py-1 bg-warning text-dark">Applied Courses</h4>
              <div className="row">
                <Slider {...settings}>
                  {userData?.applied_courses?.map((v, i) => {
                    return (
                      <div className="">
                        <AppliedCourseCard v={v} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="d-flex justify-content-end mt-2 mb-5 me-4"><button className="btn btn-sm btn-outline-primary">View All</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
