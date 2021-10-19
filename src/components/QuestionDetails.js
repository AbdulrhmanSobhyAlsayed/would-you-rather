import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";

const QuestionDetails = ({ isAnswered, id, isFound }) => {
  if (!isFound) {
    return <Redirect to="/not-found" />;
  }
  return (
    <div className="my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-md-6">
          {isAnswered && <AnsweredQuestion questionId={id} />}
          {!isAnswered && <UnansweredQuestion questionId={id} />}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ users, authUser, questions }, props) => {
  const { id } = props.match.params;
  const isFound = questions[id];
  return {
    isAnswered: Object.keys(users[authUser].answers).includes(id),
    id,
    isFound,
  };
};
export default connect(mapStateToProps)(QuestionDetails);
