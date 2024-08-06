import React from "react";
import {useGlobalState} from '../GlobalProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CourseCard({ v }) {
    const { globalState, setGlobalState} = useGlobalState();
    const handleCourseApply = ()=>{
       if(globalState.user){

       }else{
        toast.warning("Please login to apply for the course")
       }
    }
  return (
    <div className="col-12 col-md-6">
      <div className="shadow mx-3 my-4 p-4 rounded">
        <div className="d-flex justify-content-start mb-3">
          <span className="bg-success badge">
            Applied Before: {v?.submission_date}
          </span>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-4 ">
            <img
              src={
                v?.course_image == "https://overseas.ai/placeholder/course.jpg"
                  ? "/images/institute.png"
                  : v?.course_image
              }
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-8">
            <p className="mb-0">
              <span>Course Name : </span> {v?.course_name}
            </p>
            <p className="mb-0">
              <span>Duration : </span> {v?.course_duration}
            </p>
            <p className="mb-0">
              <span>Exam Mode : </span> {v?.assessment_type}
            </p>
            <p className="mb-0">
              <span>Course Type : </span> {v?.course_type}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <a href="">Read More</a>
          <button
            className="btn btn-sm btn-outline-primary"
            style={{ width: "30%" }}
            onClick={()=>handleCourseApply()}
          >
            Apply
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default CourseCard;
