import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';
//import logo from './images/philanthropa-transparent.png';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container"> 
          <Link className="navbar-brand" to="/">
          <img className="logo" src="./philanthropa-transparent.png" alt="p-logo"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Donate">Donate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewCampaign">New Campaign</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
