import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { unsetAuthUser } from "../actions/authUser";

class Logout extends Component {
  componentDidMount() {
    if (this.props.authUser) {
      this.props.dispatch(unsetAuthUser());
    }
  }
  render() {
    return <Redirect to="/login" />;
  }
}
const mapStatToProps = ({ authUser }) => ({
  authUser,
});
export default connect(mapStatToProps)(Logout);
