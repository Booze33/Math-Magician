import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="h1">Math Magic</h1>
      <nav className="nav">
        <button type="button">
          <Link to="/" className="button">Home</Link>
        </button>
        <button type="button">
          <Link to="/calculator" className="button">Calculator</Link>
        </button>
        <button type="button">
          <Link to="/quote" className="button">Quote</Link>
        </button>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
