import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar(){
  const location = useLocation();
  const[isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/favicon.ico" alt="logo" height="30" className="me-2" />
          たまごすし
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/articles"
                className={`nav-link ${
                  location.pathname === "/articles" ? "active" : ""
                }`}
              >
                記事
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apps"
                className={`nav-link ${
                  location.pathname === "/apps" ? "active" : ""
                }`}
              >
                アプリ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
