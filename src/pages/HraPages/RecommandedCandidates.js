import React, { useEffect, useState } from "react";
import { candidateByJobRecommanded } from "../../services/hra.service";
import { useGlobalState } from "../../GlobalProvider";
import { useNavigate } from "react-router-dom";
import CandidateCard from "../../components/CandidateCard";
function RecommandedCandidates() {
  const { globalState, setGlobalState } = useGlobalState();
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [applicationList, setApplicationList] = useState([]);
  const getRecommandedCandidate = async (id) => {
    setLoader(true);
    try {
      let response = await candidateByJobRecommanded(
        globalState?.user.access_token,
        id
      );
      console.log(response?.data?.empdata);
      setApplicationList(response.data);
      setLoader(false);
    } catch (error) {}
  };
  useEffect((v, i) => {
    getRecommandedCandidate(836);
  }, []);
  return (
    <div className="mt-5 pt-md-5">
      <div className="mt-5  container">
        <div className="d-flex my-5 pt-5" style={{ cursor: "pointer" }}>
          <div className="d-flex align-items-center justify-content-start  borderBlue">
            <div
              className="p-2 px-md-4 px-3"
              onClick={() => {
                navigate("/");
              }}
            >
              <i className="fa textBlue fa-home"></i>
            </div>

            <div
              className="p-2 px-md-4 px-3 borderLeft"
              onClick={() => {
                navigate("/hra-dashboard");
              }}
            >
              <i className="fa textBlue fa fa-suitcase me-2"></i>
              <span className="textBlue">Dashboard</span>
            </div>
            <div className="p-2 bgBlue px-md-4 px-3 borderRadiusLeft20">
              <i className="fa fa-suitcase text-light me-2"></i>
              <span className="text-light">Recommended Candidates</span>
            </div>
          </div>
        </div>
        {loader ? (
          <div className="vh-100 row col-12 justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            {applicationList?.bestMatch && (
              <div>
                <h2>Best Matching</h2>
                <div className="row m-0 p-0">
                  <div className="row m-0 p-0">
                    {applicationList?.bestMatch?.data?.map((v, i) => {
                      return <CandidateCard value={v} />;
                    })}
                  </div>
                </div>
              </div>
            )}
            {applicationList?.goodMatch && (
              <div>
                <h2>Good Matching</h2>
                <div className="row m-0 p-0">
                  <div className="row m-0 p-0">
                    {applicationList?.goodMatch?.data?.map((v, i) => {
                      return <CandidateCard value={v} />;
                    })}
                  </div>
                </div>
              </div>
            )}
            {applicationList?.partialMatch && (
              <div>
                <h2>Partial Matching</h2>
                <div className="row m-0 p-0">
                  <div className="row m-0 p-0">
                    {applicationList?.partialMatch?.data?.map((v, i) => {
                      return <CandidateCard value={v} />;
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecommandedCandidates;
