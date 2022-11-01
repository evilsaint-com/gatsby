import React from "react";
import "./sidebar.css";

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <div className="sidebar">
      <a href="/" className="sticky-nav-button">
        Home
      </a>
      <div className="sticky-nav-stack">
        <a href="/blog" className="sticky-nav-button">
          Blog
        </a>
        <a href="/contact" className="sticky-nav-button">
          Contact{" "}
        </a>
        <a href="/about" className="sticky-nav-button">
          About us
        </a>
      </div>
    </div>
  );
};

export default Header;
