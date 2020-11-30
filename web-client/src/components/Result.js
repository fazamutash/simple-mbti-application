import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Result.css";

const dimension = [
  [{name: "Extraversion (E)", letter: "E"}, {name: "Introversion (I)", letter: "I"}],
  [{name: "Sensing (S)", letter: "S"}, {name: "Intuition (N)", letter: "N"}],
  [{name: "Thinking (T)", letter: "T"}, {name: "Feeling (F)", letter: "F"}],
  [{name: "Judging (J)", letter: "J"}, {name: "Perceiving (P)", letter: "P"}]
];

const Result = ({ testResult }) => {
  const characters = testResult.testResult.split("");
  console.log("result", testResult.email)
  console.log(characters)
  return (
    <Row>
      <Col>
        <h4>Your Perspective</h4>
        <p>Your Perspective Type is: {testResult.testResult}</p>
      </Col>
      <Col>
      {dimension.map((value,index) => {
        console.log(value[0])
        const firstBarStyle = {
          width: "50%",
          backgroundColor: (characters.includes(value[0].letter) ? "purple" : "grey")
        };
        const secondBarStyle = {
          width: "50%",
          backgroundColor: (characters.includes(value[1].letter) ? "purple" : "grey")
        };
        return (
          <Row key={index}>
            <Col>
              {value[0].name}
            </Col>
            <Col xs={5}>
              <div className="progress">
                <div style={firstBarStyle} className="progress-bar" role="progressbar" />
                <div style={secondBarStyle} className="progress-bar" role="progressbar" />
              </div>
            </Col>
            <Col>
            {value[1].name}
            </Col>
          </Row>
        )})}
      </Col>
    </Row>
  );
};

export default Result;