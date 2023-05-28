import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <nav className="header navbar navbar-dark bg-dark">
      <div className="container">
        <div>
          <Link
            style={{ textDecoration: "none" }}
            className={`${pathname === "/dashboard" && "active"}`}
            to="/dashboard"
          >
            DASHBOARD
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className={`${pathname === "/movie-list" && "active"} ml-4`}
            to="/movie-list"
          >
            MOVIE LIST
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
