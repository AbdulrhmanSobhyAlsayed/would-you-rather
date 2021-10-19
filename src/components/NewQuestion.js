import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };
  handleOptionOne = (event) => {
    this.setState({ optionOne: event.target.value });
  };
  handleOptionTwo = (event) => {
    this.setState({ optionTwo: event.target.value });
  };
  handleSubmit = () => {
    const { optionOne, optionTwo } = this.state;
    if (!optionOne || !optionTwo) {
      return toast.error("you must enter option one and option two");
    }

    this.props.dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState({ toHome: true });
  };
  render() {
    if (this.state.toHome) {
      return <Redirect to="/" />;
    }
    return (
      <div className="my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>New Question</h3>
              </div>
              <div className="card-body d-flex justify-content-center flex-column">
                <h4>Would You Rather ?</h4>
                <div className="my-3">
                  <label>Option One:</label>
                  <input
                    type="text"
                    onChange={this.handleOptionOne}
                    value={this.state.optionOne}
                    className="form-control"
                  />
                </div>
                <div className="my-3">
                  <label>Option Two:</label>
                  <input
                    type="text"
                    onChange={this.handleOptionTwo}
                    value={this.state.optionTwo}
                    className="form-control"
                  />
                </div>
                <button onClick={this.handleSubmit} className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
