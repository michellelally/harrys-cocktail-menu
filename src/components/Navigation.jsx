import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../shared/harrys.png'


function Navigation(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="center">
        <Link to="/">
          <img src={logo} alt="Harrys Logo" className="logo-header" />
        </Link>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);