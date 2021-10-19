import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import { handleAddUser } from "../actions/users";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleAddNewUser = () => {
    const { firstName, lastName } = this.state;
    if (!firstName || !lastName) {
      return toast.error("you must enter first and last name");
    }

    this.props.dispatch(handleAddUser(firstName, lastName));
  };
  render() {
    if (this.props.authUser)
      return (
        <Redirect
          to={
            this.props.location.state.from.state
              ? this.props.location.state.from.state.from.pathname
              : "/"
          }
        />
      );
    return (
      <div className="my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Register</h3>
              </div>
              <div className="card-body d-flex justify-content-center flex-column">
                <div className="my-3">
                  <label>First Name:</label>
                  <input
                    type="text"
                    onChange={this.handleFirstNameChange}
                    value={this.state.firstName}
                    className="form-control"
                  />
                </div>
                <div className="my-3">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    onChange={this.handleLastNameChange}
                    value={this.state.lastName}
                    className="form-control"
                  />
                </div>
                <button
                  onClick={this.handleAddNewUser}
                  className="btn btn-primary"
                >
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

const mapStatToProps = ({ authUser }) => ({
  authUser,
});
export default connect(mapStatToProps)(Register);
