import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthUser } from "../actions/authUser";

class Login extends Component {
  state = {
    selectedUser: "",
  };
  handleChange = (event) => {
    this.setState({ selectedUser: event.target.value });
  };
  handleLogin = () => {
    if (!this.state.selectedUser) {
      return toast.error("you must select user");
    }

    this.props.dispatch(setAuthUser(this.state.selectedUser));
  };
  render() {
    if (this.props.authUser)
      return (
        <Redirect
          to={
            this.props.location.state
              ? this.props.location.state.from.pathname
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
                <h3>Login</h3>
              </div>
              <div className="card-body d-flex justify-content-center flex-column">
                <div className="my-3">
                  <label>Please Select User:</label>
                  <select
                    onChange={this.handleChange}
                    value={this.state.selectedUser}
                    className="form-control"
                  >
                    <option value="" disabled>
                      select user
                    </option>
                    {this.props.users.map((user) => (
                      <option value={user.id} key={user.id}>
                        {user.firstName} {user.lastName}
                      </option>
                    ))}
                  </select>
                </div>
                <button onClick={this.handleLogin} className="btn btn-primary">
                  Login
                </button>
                <Link
                  to={{
                    pathname: "/register",
                    state: { from: this.props.location },
                  }}
                  className="btn btn-secondary mt-3"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatToProps = ({ users, authUser }) => ({
  users: Object.values(users),
  authUser,
});
export default connect(mapStatToProps)(Login);
