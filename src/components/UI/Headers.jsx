import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar-grid grid">
          <div className="logo">
            <NavLink to="/" onClick={handleMenuClose}>
              🌍 World Atlas
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="menu-web">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Hamburger */}
          <div className="ham-menu">
            <button
              style={{ background: "transparent", border: "none", fontSize: "2.4rem", cursor: "pointer", color: "#fff", marginTop: 0 }}
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="menu-mobile">
          <ul>
            <li><NavLink to="/" onClick={handleMenuClose}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleMenuClose}>About</NavLink></li>
            <li><NavLink to="/country" onClick={handleMenuClose}>Country</NavLink></li>
            <li><NavLink to="/contact" onClick={handleMenuClose}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
};
