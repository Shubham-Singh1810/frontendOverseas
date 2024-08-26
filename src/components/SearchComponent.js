import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function SearchComponent({ fullWidth }) {

  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const handleSearchNavigate = () => {
    const formattedSearchKey = searchKey.trim().replace(/\s+/g, "-");
    navigate("/jobs/" + formattedSearchKey);
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
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
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />

        <div className="d-flex align-items-center">
          <button
            className="btn btn-primary bgBlue"
            style={{ border: "none" }}
            onClick={handleSearchNavigate}
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
            
          >
            <img
              src={
                false
                  ? "https://cdn-icons-png.flaticon.com/128/59/59120.png"
                  : "https://tse4.mm.bing.net/th?id=OIP.lFtxYRQ6fiHaesf9Hg0XjQAAAA&pid=Api&P=0&h=180"
              }
              style={{ height: "30px" }}
              alt="mic-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
