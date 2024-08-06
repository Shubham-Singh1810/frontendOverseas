import React from 'react'

function TradeTestCard({v}) {
  return (
    <div className="col-12 col-md-6">
                <div className="shadow mx-3 my-4 p-4 rounded">
                  <div className="d-flex  justify-content-start mb-3">
                    <span className="bg-success badge">
                      Total Seats: {v?.total_seats}
                    </span>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-4 ">
                      <img
                        src={
                          v?.course_image ==
                          "https://overseas.ai/placeholder/course.jpg"
                            ? "/images/institute.png"
                            : v?.course_image
                        }
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-12 col-md-8">
                      <p className="mb-0">
                        <span>Test Name : </span> {v?.course_name}
                      </p>
                      <p className="mb-0">
                        <span>Duration : </span> {v?.course_duration}
                      </p>
                      <p className="mb-0">
                        <span>Fee : </span> {v?.course_fee}
                      </p>
                      <p className="mb-0">
                        <span>Videography Facility : </span>{" "}
                        {v?.videographyAvlQ}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <a href="">Read More</a>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      style={{ width: "30%" }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
  )
}

export default TradeTestCard