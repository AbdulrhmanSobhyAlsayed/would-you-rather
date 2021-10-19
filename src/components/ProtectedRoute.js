import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends Component {
  render() {
    const { authUser, component: Component, path, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          authUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps(
  { authUser },
  { component: Component, path, ...rest }
) {
  return {
    authUser,
    component: Component,
    path,
    ...rest,
  };
}
export default connect(mapStateToProps)(ProtectedRoute);
