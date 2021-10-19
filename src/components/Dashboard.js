import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  state = {
    displayAnswered: false,
  };
  changeSection = () => {
    this.setState((oldState) => ({
      displayAnswered: !oldState.displayAnswered,
    }));
  };
  render() {
    const { displayAnswered } = this.state;
    const { answeredQuestions, unansweredQuestions } = this.props;

    return (
      <div className="my-3 d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center flex-row">
          <div
            className="card p-3 mr-3"
            style={{
              backgroundColor: displayAnswered ? "#007bff" : "#fff",
              color: displayAnswered ? "#fff" : "#000",
              cursor: "pointer",
            }}
            onClick={this.changeSection}
          >
            Answered Questions
          </div>
          <div
            className="card p-3 mr-3"
            style={{
              backgroundColor: !displayAnswered ? "#007bff" : "#fff",
              color: !displayAnswered ? "#fff" : "#000",
              cursor: "pointer",
            }}
            onClick={this.changeSection}
          >
            Unanswered Questions
          </div>
        </div>
        <div className="my-3 d-flex flex-column align-item-start">
          {displayAnswered &&
            answeredQuestions.map((question) => (
              <Question questionId={question} key={question} />
            ))}
        </div>
        <div className="my-3 d-flex justify-content-center flex-column text-center  align-content-center">
          {!displayAnswered &&
            unansweredQuestions.map((question) => (
              <Question questionId={question} key={question} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, authUser, users }) => {
  const sortedQuestions = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const userAnswers = Object.keys(users[authUser].answers);

  const answeredQuestions = sortedQuestions.filter((question) =>
    userAnswers.includes(question)
  );

  const unansweredQuestions = sortedQuestions.filter(
    (question) => !answeredQuestions.includes(question)
  );
  return {
    answeredQuestions,
    unansweredQuestions,
  };
};
export default connect(mapStateToProps)(Dashboard);
