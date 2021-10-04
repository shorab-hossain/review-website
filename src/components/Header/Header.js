import React from 'react'
import { Link } from 'react-router-dom';
import ('./Header.css')

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
  <div className="container fw-bold ">
    <a className="navbar-brand" href="#">Blood Donation Club</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item fw-bold">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item fw-bold">
          <Link className="nav-link active" to="/services">Services</Link>
        </li>
        <li className="nav-item fw-bold">
          <Link className="nav-link active" to="/facility">Facility</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
};

export default Header;