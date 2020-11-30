import React from "react";
import Question from "./Question";

const Questionnaire = ({ handleSubmit, errors, handleChange }) => {
  const questions = [
    { name: "question_one", question: "You find it takes effort to introduce yourself to other people.", error: errors.question_one },
    { name: "question_two", question: "You consider yourself more practical than creative.", error: errors.question_two },
    { name: "question_three", question: "Winning a debate matters less to you than making sure no one gets upset.", error: errors.question_three },
    { name: "question_four", question: "You get energized going to social events that involve many interactions.", error: errors.question_four },
    { name: "question_five", question: "You often spend time exploring unrealistic and impractical yet intriguing ideas.", error: errors.question_five },
    { name: "question_six", question: "Deadlines seem to you to be of relative rather than absolute importance.", error: errors.question_six },
    { name: "question_seven", question: "Logic is usually more important than heart when it comes to making important decisions.", error: errors.question_seven },
    { name: "question_eight", question: "Your home and work environments are quite tidy.", error: errors.question_eight },
    { name: "question_nine", question: "You do not mind being at the center of attention.", error: errors.question_nine },
    { name: "question_ten", question: "Keeping your options open is more important than having a to-do list.", error: errors.question_ten },
  ]
  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question,index) => {
        return <Question key={index} name={question.name} question={question.question} errorMessage={question.error} handleChange={handleChange} />
      })}

      <div className="form-group">
        <label>
          <h4>Your Email</h4>
        </label>
        <input 
          type="text" 
          name="email"
          onChange={handleChange}
          className="form-control" 
          placeholder="Enter email" 
          id="email" />

          <div className="text-danger">{errors.email}</div>
      </div>
        
      <input type="submit" value="Submit & Continue" class="btn btn-success" />
    </form>
  );
};

export default Questionnaire;