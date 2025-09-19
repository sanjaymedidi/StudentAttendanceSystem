import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Layout.css"; 


const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <header className="logo">
          <span className="highlight">S</span>martAttend
        </header>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/summary">Attendance summary</Link></li>
          <li><Link to="/studenthistory">StudentDashBoard</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
