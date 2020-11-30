import React from 'react';
import Questionnaire from "./components/Questionnaire";
import Result from "./components/Result";
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Container, Jumbotron } from "react-bootstrap";
import axios from "axios";
  
class Main extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      testResult: {},
      showResult: false,
      loading: false
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if (this.validate()) {
      this.setState({ loading: true });
      axios.post(`http://localhost:5000/api/submit`, this.state.input)
        .then(res => {
          if (res) {
            console.log(res.data)
            this.setState({ loading: false, showResult: true, testResult: res.data });
          }
        }).catch(error => {
          console.log(error.response);
          let errMessage = "error";
          if (error.response) {
            errMessage = error.response.data.message;
          }
          this.setState({ loading: false });
          alert(errMessage);
        })
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["question_one"]) {
        isValid = false;
        errors["question_one"] = "Please enter your answer.";
      }

      if (!input["question_two"]) {
        isValid = false;
        errors["question_two"] = "Please enter your answer.";
      }

      if (!input["question_three"]) {
        isValid = false;
        errors["question_three"] = "Please enter your answer.";
      }

      if (!input["question_four"]) {
        isValid = false;
        errors["question_four"] = "Please enter your answer.";
      }

      if (!input["question_five"]) {
        isValid = false;
        errors["question_five"] = "Please enter your answer.";
      }

      if (!input["question_six"]) {
        isValid = false;
        errors["question_six"] = "Please enter your answer.";
      }

      if (!input["question_seven"]) {
        isValid = false;
        errors["question_seven"] = "Please enter your answer.";
      }

      if (!input["question_eight"]) {
        isValid = false;
        errors["question_eight"] = "Please enter your answer.";
      }

      if (!input["question_nine"]) {
        isValid = false;
        errors["question_nine"] = "Please enter your answer.";
      }

      if (!input["question_ten"]) {
        isValid = false;
        errors["question_ten"] = "Please enter your answer.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <MemoryRouter>
        <Container className="p-3" style={{ textAlign: "center" }}>
          <Jumbotron>
            <Switch>
              <Route path="/result">
                { (!this.state.showResult && !this.state.loading) ? <Redirect to="/" /> : <Result testResult={this.state.testResult} /> }
              </Route>
              <Route path="/">
                { (this.state.showResult && !this.state.loading) ? <Redirect to="/result" /> : <Questionnaire handleSubmit={this.handleSubmit} handleChange={this.handleChange} errors={this.state.errors} /> }
              </Route>
            </Switch>
            { this.state.loading && 
              <div>loading...</div>}
          </Jumbotron>
        </Container>
      </MemoryRouter>
    );
  }
}
  
export default Main;