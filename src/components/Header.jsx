import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
