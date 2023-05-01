// •	Create a Navigation component that contains links styled like a navbar.
// •	The links don’t have to go anywhere.
// •	Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React, {Component} from "react";


export default class NavBar extends Component {

    render() {
        return (

<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedCont" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Products</a>
        <a className="nav-link" href="#">Contact Us</a>
      </div>
    </div>
  </div>
</nav>
        )
  }
}

