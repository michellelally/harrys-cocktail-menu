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
            <li class="nav-item">
              Admin
             </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to="/">
    <img src={logo} alt="Harrys Logo" className="logo-header" />
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">Pricing</a>
    </div>
  </div>
</nav>

// return (
//   <div className="navigation" style={{display: 'flex'}}>
//     <nav class="navbar navbar-expand navbar-dark bg-dark">
//       <div class="container">
//         <Link class="navbar-brand" to="/">
//         <img src={logo} alt="Harrys Logo" className="logo-header"/>
//         </Link>
//         <Link class="navbar-brand" to="/">
//         <img src={logo} alt="Harrys Logo" className="logo-header"/>
//         </Link>
//       </div>
//     </nav>
//   </div>
// );