import React, { Component } from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  render() {
    return (
      <div className="my-5 row d-flex flex-column align-item-start ">
        {this.props.sortedLeaders.map((leader) => (
          <div
            className="col-10 col-md-6 my-3 align-self-center "
            key={leader.id}
          >
            <div className="card p-4 d-flex justify-content-center">
              <div className="my-2 text-center">
                <Avatar
                  name={`${leader.firstName} ${leader.lastName}`}
                  size="70"
                  round={true}
                />
              </div>
              <div className="my-2 text-center">
                <h4>{`${leader.firstName} ${leader.lastName}`}</h4>
              </div>
              <div className="my-2 text-center">
                <h4>{`Answered Questions:  ${leader.answeredQuestions}`}</h4>
              </div>
              <div className="my-2 text-center">
                <h4>{`created Questions:  ${leader.createdQuestions}`}</h4>
              </div>
              <div className="my-2 text-center">
                <h4>{`Grade :  ${leader.grade}`}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const leaders = Object.values(users).map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    answeredQuestions: Object.keys(user.answers).length,
    createdQuestions: user.questions.length,
    grade: user.questions.length + Object.keys(user.answers).length,
  }));

  return {
    sortedLeaders: leaders.sort(function (a, b) {
      return b.grade - a.grade;
    }),
  };
};
export default connect(mapStateToProps)(LeaderBoard);
