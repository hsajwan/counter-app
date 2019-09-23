// import React, { Component } from "react";
import React from "react";
// Stateless Functional Component
// const NavBar = props => {
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* {this.props.totalCounters} */}
          {/* {props.totalCounters} */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {}
// }

export default NavBar;
