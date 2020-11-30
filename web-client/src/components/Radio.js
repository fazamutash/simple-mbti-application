import React from "react";
import { Form } from "react-bootstrap"

const Radio = ({ name, value, handleChange }) => {
  return (
    <div className="col-sm">
      <Form.Check 
        type="radio"
        value={value}
        name={name}
        onChange={handleChange}
        id={name + "_" + value} />
    </div>
  );
};

export default Radio;