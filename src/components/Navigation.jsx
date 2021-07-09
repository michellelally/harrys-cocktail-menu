import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from './assets/harrys.png'


function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
          <img src={logo} alt="Harrys Logo" className="logo-header"/>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);