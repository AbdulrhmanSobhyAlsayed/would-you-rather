import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-redux-loading";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Register from "./components/Register";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import QuestionDetails from "./components/QuestionDetails";

class APP extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <ToastContainer />
          {this.props.authUser && <NavBar />}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/add" component={NewQuestion} />
            <ProtectedRoute path="/leaderboard" component={LeaderBoard} />
            <ProtectedRoute path="/logout" component={Logout} />
            <ProtectedRoute path="/questions/:id" component={QuestionDetails} />
            <ProtectedRoute path="/not-found" component={NotFound} />
            <ProtectedRoute path="/" exact component={Dashboard} />
            <Redirect to="/not-found" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStatToProps = ({ authUser }) => ({
  authUser,
});
export default connect(mapStatToProps)(APP);
