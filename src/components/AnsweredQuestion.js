import React from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import VotingPercentage from "./VotingPercentage";

const AnsweredQuestion = ({ question, authUserSelection, user }) => {
  const optionOneVoting = question.optionOne.votes.length;
  console.log(
    "🚀 ~ file: AnsweredQuestion.js ~ line 8 ~ AnsweredQuestion ~ optionOneVoting",
    optionOneVoting
  );
  const optionTwoVoting = question.optionTwo.votes.length;
  console.log(
    "🚀 ~ file: AnsweredQuestion.js ~ line 10 ~ AnsweredQuestion ~ optionTwoVoting",
    optionTwoVoting
  );
  const totalVoting = optionOneVoting + optionTwoVoting;
  console.log(
    "🚀 ~ file: AnsweredQuestion.js ~ line 12 ~ AnsweredQuestion ~ totalVoting",
    totalVoting
  );

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
        <h4>Results</h4>
      </div>
      <div className="text-center px-4">
        <VotingPercentage
          text={question.optionOne.text}
          isUserSelection={authUserSelection === "optionOne"}
          totalNumber={totalVoting}
          votingNumber={optionOneVoting}
        />
      </div>
      <div className="text-center px-4 mt-3">
        <VotingPercentage
          text={question.optionTwo.text}
          isUserSelection={authUserSelection === "optionTwo"}
          totalNumber={totalVoting}
          votingNumber={optionTwoVoting}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, questions, authUser }, { questionId }) => {
  const question = questions[questionId];
  const user = users[question.author];
  const authUserSelection = users[authUser].answers[questionId];
  return {
    question,
    user,
    authUserSelection,
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);
