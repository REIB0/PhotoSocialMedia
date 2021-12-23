import React from "react";
import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export class Navigation extends Component {
  handleLogout= () => {
    localStorage.clear();
    this.props.setUser(null);
  };
  render() {
    let viewResult;
    if (this.props.user) {
      viewResult = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={"/"}
              onClick={this.handleLogout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      );
    } else {
      viewResult = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/login"}>
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/register"}>
              Sign up
            </NavLink>
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to={"/"}>
            Home
          </NavLink>
          <div className="collapse navbar-collapse">{viewResult}</div>
        </div>
      </nav>
    );
  }
}
