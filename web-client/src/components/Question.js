import React from "react";
import Radio from "./Radio";

const Question = ({ question, name, errorMessage, handleChange }) => {
  const values=[ '1', '2', '3', '4', '5', '6', '7' ];
  return (
    <div className="form-group">
      <h4 style={{ marginBottom: "20px" }}>{question}</h4>
      <div style={{ marginBottom: "40px" }} className="row">
        <div className="col-sm">
          <label style={{ color: "red" }}>Disagree</label>
        </div>
        {values.map((value,index) => {
          return <Radio key={index} name={name} value={value} handleChange={handleChange} />
        })}
        <div className="col-sm">
          <label style={{ color: "green" }}>Agree</label>
        </div>
      </div>
   
      <div className="text-danger">{errorMessage}</div>
    </div>
  );
};

export default Question;