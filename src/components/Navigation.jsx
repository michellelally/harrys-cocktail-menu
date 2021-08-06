import React from "react";
// for navigation
import { Link, withRouter } from "react-router-dom";
// importing the logos so I use the name instead of path for the img src
import logo from '../shared/harrys.png'
import user from '../shared/icons8-user-60.png'


function Navigation(props) {
  return (
    // using a bootstrap navbar and giving it the dark theme
    <nav className="navbar navbar-dark bg-dark">
      <div>
        {/* creating a link element with the logo inside so when its clicked it will direct you to the homepage */}
        <Link to="/">
          <img src={logo} alt="Harrys Logo" className="logo-header center" />
        </Link>
        {/* creating a link element with a user icon inside so when its clicked it will direct you to the login page */}
        <Link to="/login">
          {/* Image source <a target="_blank" href="https://icons8.com/icon/98957/user">User</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
          <img src={user} alt="Login" style={{ float: "right", width: '3%' }} />
        </Link>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);