import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Navbar() {
    return (  
      // change the navbar colours from here  
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#87CEEB' }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color: '#000080'}}>Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">Employees</a>
          <a className="nav-link" href="#">Meds</a>
        </div>
      </div>
    </div>
  </nav>);
  }
  export default Navbar;