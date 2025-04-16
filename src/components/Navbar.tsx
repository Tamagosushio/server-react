import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { useEffect, useState } from "react";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // 高さに応じてハンバーガー表示を切り替える
  const [useHamburger, setUseHamburger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setUseHamburger(width < 700); // 700px未満でハンバーガー
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 初期判定

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbarItems:string[][] 
    = [["/articles", "記事"], ["/apps", "アプリ"], ["/words", "単語帳"]];

  return (
    <nav
      className={`navbar fixed-top ${isDarkMode ? "navbar-dark" : "navbar-light"}`}
      style={{
        backgroundColor: isDarkMode ? "#171c20" : "#f8f9fa",
        borderBottom: isDarkMode ? "2px solid #444" : "2px solid #ddd",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-3">
          <img src="/favicon.ico" alt="logo" height="30" className="me-2" />
          たまごすし
        </Link>

        {useHamburger ? (
          <>
            {/* ハンバーガーボタン */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* オフキャンバスメニュー（右側） */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              style={{
                backgroundColor: isDarkMode ? "#171c20" : "#f8f9fa",
                color: isDarkMode ? "#fff" : "#000",
                width: "240px"
              }}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">メニュー</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  {navbarItems.map((item) => (
                    <li className="nav-item" key={item[0]}>
                      <Link
                        to={item[0]}
                        className={`nav-link ${location.pathname === item[0] ? "active" : ""}`}
                      >
                        {item[1]}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${isDarkMode ? "btn-outline-light" : "btn-outline-dark"} mt-3`}
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? "🌙" : "☀️"}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* 通常メニュー（横並び） */}
            <ul className="navbar-nav ms-auto me-3 d-flex flex-row align-items-center">
              {navbarItems.map((item) => (
                <li className="nav-item me-3" key={item[0]}>
                  <Link
                    to={item[0]}
                    className={`nav-link ${location.pathname === item[0] ? "active" : ""}`}
                  >
                    {item[1]}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className={`btn ${isDarkMode ? "btn-outline-light" : "btn-outline-dark"}`}
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? "🌙" : "☀️"}
                </button>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
