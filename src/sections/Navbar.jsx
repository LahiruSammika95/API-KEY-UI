import "./navbar.css";
import React, { useState, useEffect, useRef } from "react";
export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent this click from bubbling up to the document
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    console.log("logging out");
    setIsLoggedIn(false);
    setIsOpen(false);
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-title">API KEY APPLICATION</div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <div onClick={toggleDropdown} className="navbar-user">
            <img
              className="user-icon"
              src="./images/profile-picture.png"
              alt="User-image"
            />
            <span>Admin</span>
            {!isOpen ? (
              <img
                className="arrow-img"
                src="./images/down-arrow.png"
                alt="down-arrow"
              />
            ) : (
              <img
                className="arrow-img"
                src="./images/up-arrow.png"
                alt="up-arrow"
              />
            )}
          </div>
        ) : (
          <span className="login-button" onClick={handleLogin}>
            Login
          </span>
        )}
        <div
          ref={dropdownRef}
          className={isOpen ? "user-dropdown" : "user-dropdown-display-none"}
          id="userDropdown"
        >
          <a onClick={handleLogout} id="logout">
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}
