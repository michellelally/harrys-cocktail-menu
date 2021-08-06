import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../shared/harrys.png'
import user from '../shared/icons8-user-60.png'


function Navigation(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <Link to="/">
          <img src={logo} alt="Harrys Logo" className="logo-header center" />
        </Link>
        <Link to="/login">
        {/* Image source <a target="_blank" href="https://icons8.com/icon/98957/user">User</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
          <img src={user} alt="Login"   style={{ float: "right", width: '3%'}} />
        </Link>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);