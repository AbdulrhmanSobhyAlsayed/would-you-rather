import React, { Component } from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { handleAddQuestionAnswer } from "../actions/questions";

class UnansweredQuestion extends Component {
  state = {
    selectedOption: "optionOne",
  };
  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };
  handleSubmit = () => {
    const { question, dispatch } = this.props;
    dispatch(handleAddQuestionAnswer(question.id, this.state.selectedOption));
  };
  render() {
    const { user, question } = this.props;
    return (
      <div className="card my-3 d-flex justify-content-center flex-column py-3 px-5">
        <div className="my-2 text-center">
          <Avatar
            name={`${user.firstName} ${user.lastName}`}
            size="70"
            round={true}
          />
        </div>
        <div className="my-2 text-center">
          <h4>Would You Rather ?</h4>
        </div>
        <div className="my-4 text-center">
          <label className="d-block">
            <input
              type="radio"
              value="optionOne"
              onChange={this.handleOptionChange}
              checked={this.state.selectedOption === "optionOne"}
            />
            <span className="ml-3">{question.optionOne.text}</span>
          </label>
          <label className="d-block">
            <input
              type="radio"
              value="optionTwo"
              onChange={this.handleOptionChange}
              checked={this.state.selectedOption === "optionTwo"}
            />
            <span className="ml-3">{question.optionTwo.text}</span>
          </label>
        </div>
        <button className="btn btn-success" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ users, questions }, { questionId }) => {
  const question = questions[questionId];
  const user = users[question.author];
  return {
    question,
    user,
  };
};

export default connect(mapStateToProps)(UnansweredQuestion);
