import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(){
  const location = useLocation();
  const [ isOpen, setIsOpen ] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${isDarkMode ? "navbar-dark" : "navbar-light"}`}
      style={{
        backgroundColor: isDarkMode ? "#171c20" : "#f8f9fa", // ライトモード時に薄い灰色を適用
        borderBottom: isDarkMode ? "2px solid #444" : "2px solid #ddd",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
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
                className={`nav-link ${location.pathname === "/articles" ? "active" : ""}`}
              >
                記事
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apps"
                className={`nav-link ${location.pathname === "/apps" ? "active" : ""}`}
              >
                アプリ
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-dark ms-3"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );

}

export default Navbar;
