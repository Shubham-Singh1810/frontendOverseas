import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
function JobCard({ value }) {
  const navigate = useNavigate();
  return (
    <div
      className=" col-12 "
      onClick={() =>
        navigate(
          `/job/${value?.jobLocationCountry?.name
            ?.trim()
            .replace(/\s+/g, "-")
            .replace(/\//g, "-")}/${value?.jobTitle
            ?.trim()
            .replace(/\s+/g, "-")
            .replace(/\//g, "-")}/${value?.id}`
        )
      }
    >
      <div className="mx-2 my-3 card p-3 shadow">
        <h5>{value?.jobTitle}</h5>

        <div className="d-flex justify-content-between mb-2">
          <div className="d-block d-md-flex justify-content-between w-100">
            <p className="mb-0 text-sm">
              {value?.jobWages} {value?.jobLocationCountry?.currencyName} ={" "}
              {Math.round(
                value?.jobWages * value?.jobLocationCountry?.currencyValue
              )}{" "}
              INR
            </p>
            <p className="mb-0 text-sm">
              <small class=" text-success">
                Apply Before - {value?.jobDeadline}
              </small>
            </p>
          </div>
        </div>

        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-lg-8 col-md-8 col-8">
            <div className="d-flex align-items-center mb-2">
              <img
                className="flagIcon"
                src={
                  "https://overseas.ai/storage/uploads/countryFlag/" +
                  value?.jobLocationCountry?.countryFlag
                }
              />
              <p className="mb-0 ms-2">{value?.jobLocationCountry?.name}</p>
            </div>
            <p className="my-1">Department : {value?.occupation}</p>
            <p className="my-1">Age Limit : {value?.jobAgeLimit}</p>
            <p className="my-1">Passport Type : {value?.passportType}</p>
            <p className="my-1">Experience Type : {value?.jobExpTypeReq}</p>
          </div>
          <div className="col-4  col-md-4">
            <img
              className="img-fluid rounded"
              src={value?.jobPhoto}
              // src="https://overseasdata.s3.ap-south-1.amazonaws.com/JobData/3/JOB030538.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWDCXZNCOULZNVOK6%2F20240508%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240508T122934Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Signature=2c3b3cf4f0c4b096dc4a451a7e23d8b82929f50b99d67792465dcc8dc51ce572"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary bgBlue">Apply Now</button>
          <p className="mb-0 mt-4 text-primary" style={{cursor:"pointer"}}>Read Details</p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;