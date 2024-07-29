import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
function JobsSliderList({ title, backgroundColor, rounded, data }) {
  const navigate = useNavigate()
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024, // screen width up to 1024px (tablet)
        settings: {
          slidesToShow: 2,
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
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center" style={{ background: backgroundColor }} ref={container}>
      <div className="container">
        <div className="">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{
              duration: 1,
            }}
            className=" text-center mb-5 mt-5 textBlue"
          >
            {/* Direct <span className="textBlue">Hiring</span> App for Founders, Team Leaders and Hiring Managers */}
            <b>{title}</b>
          </motion.h1>
          <div className="my-5 py-4">
            <Slider {...settings}>
              {data?.map((v, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 100,
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                    }}
                    className=""
                  >
                    <div className="mx-2 d-flex justify-content-center">
                      <img
                        src={v?.img}
                        
                        className=" "
                        style={{
                          height: "230px",
                          width: "230px",
                          borderRadius:rounded? "50%":"0px",
                        }}
                      />
                    </div>
                    <p className="text-center my-3"><b>{v?.label}</b></p>
                  </motion.div>
                );
              })}
            </Slider>
          </div>
          <div className="d-flex justify-content-center ">
          <button className="btn btn-outline-primary " style={{ width: "200px" }} onClick={()=>navigate("/jobs")}>
            View All
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default JobsSliderList;