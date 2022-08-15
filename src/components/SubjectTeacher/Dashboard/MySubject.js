import React from "react";
import "./MySubject.css";

function MySubject() {
  return (
    
      <div className="d-flex flex-md-row flex-sm-column flex-wrap justify-content-left" id="row">
        <div className="sub1">
          <p className="subname">C</p>
          <p className="subcode">(22226)</p>
        </div>
        <div className="sub2">
          <p className="subname">Java</p>
          <p className="subcode">(22412)</p>
        </div>
        {/* <div className="sub3">
          <p className="subname">Java Script</p>
          <p className="subcode">123</p>
        </div>
        <div className="sub4">
          <p className="subname">Java Script</p>
          <p className="subcode">123</p>
        </div>
        <div className="it">
            <h3>Information Technology</h3>
        </div> */}
      </div>

  );
}

export default MySubject;
