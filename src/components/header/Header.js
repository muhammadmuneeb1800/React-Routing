import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary text-white">
        <div className="container">
          <Link to="/" className="navbar-brand text-white">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link  text-white">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link  text-white">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="dashboard/home" className="nav-link  text-white">
                  DashBoard/Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="dashboard/services" className="nav-link  text-white">
                  Dashboard/Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="dashboard/carts" className="nav-link  text-white">
                  Dashboard/Carts
                </Link>
              </li>
            </ul>
            <form className="d-flex gap-4 align-items-center" role="search">
              <Link to="/auth/login" className="btn btn-success">
                Login
              </Link>
              <Link to="/auth/register" className="btn btn-danger">
                Register
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
