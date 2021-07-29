import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../shared/assets/images/harrys.png'


function Navigation(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        <img src={logo} alt="Harrys Logo" className="logo-header" />
      </Link>
      <div>
        <ul class="navbar-nav">
          <Link class="navbar-link" to="/login">
            <li style={{ fontSize: '1.3vh'}} class="nav-item">
              Admin
             </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);