import React from 'react';
import logo from './logo.svg';
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CrawlMySite.com</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/page1">Page 1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/page2">Page 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
