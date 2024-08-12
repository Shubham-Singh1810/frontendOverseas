import React, { useEffect, useState } from "react";
import { getCountriesForJobs, getOccupations } from "../services/info.service";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
function SearchComponent({ fullWidth }) {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  const handleSearchNavigate = () => {
    const formattedSearchKey = searchKey.trim().replace(/\s+/g, "-");
    console.log(formattedSearchKey);
    navigate("/jobs/" + formattedSearchKey);
  };

  return (
    <div className="row justify-content-center">
      <div
        className={
          " col-10  d-flex justify-content-between p-2 bg-light " +
          (fullWidth ? "col-md-10" : "col-md-8")
        }
        style={{ borderRadius: "30px" }}
      >
        <input
          className="ms-2 bg-light"
          placeholder="Search jobs"
          style={{ width: "70%", border: "none", outline: "none" }}
          onChange={(e) => setSearchKey(e.target.value)}
        />

        <div className="d-flex align-items-center">
          <button
            className="btn btn-primary bgBlue"
            style={{ border: "none" }}
            onClick={() => handleSearchNavigate()}
            value={transcript}
          >
            Search
          </button>

          <div
            className="ms-2 shadow"
            style={{
              height: "45px",
              width: "45px",
              border: "1px solid #17487F",
              background: "#F6F6F6",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={listening ? stopListening : startListening}
          >
            <img
              src={
                listening
                  ? "https://cdn-icons-png.flaticon.com/128/59/59120.png"
                  : "https://tse4.mm.bing.net/th?id=OIP.lFtxYRQ6fiHaesf9Hg0XjQAAAA&pid=Api&P=0&h=180"
              }
              style={{ height: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
