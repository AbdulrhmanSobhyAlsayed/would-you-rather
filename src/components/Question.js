import React from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = ({ user, question }) => {
  return (
    <div className="row align-self-center ">
      <div className="">
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
            <h6>{question.optionOne.text}</h6>
            <h6>{question.optionTwo.text}</h6>
          </div>
          <Link to={`/questions/${question.id}`} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, questions }, { questionId }) => {
  const question = questions[questionId];
  const user = users[question.author];
  return {
    question,
    user,
  };
};

export default connect(mapStateToProps)(Question);
