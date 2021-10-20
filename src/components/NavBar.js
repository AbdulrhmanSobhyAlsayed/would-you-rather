import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import Avatar from "react-avatar";
import { connect } from "react-redux";

const NavBar = ({ firstName, lastName }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        Would You Rather
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/add">
              New Question
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/leaderboard">
              Leader Board
            </NavLink>
          </li>
        </ul>
        <div>
          <span className="mr-2 text-white">
            {firstName} {lastName}
          </span>
          <Avatar name={`${firstName} ${lastName}`} round={true} size="30" />
          <Link to="/logout" className="mx-3  text-white">
            <FaSignOutAlt fontSize="20" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapStatToProps = ({ users, authUser }) => {
  const user = users[authUser];

  return {
    firstName: user.firstName,
    lastName: user.lastName,
  };
};
export default connect(mapStatToProps)(NavBar);
