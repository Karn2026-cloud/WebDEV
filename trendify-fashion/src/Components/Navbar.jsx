import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingBag
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "Home",
    "Shop",
    "Collection",
    "About",
    "Contact"
  ];

  return (
    <nav className="navbar">

      <div className="container-custom nav-content">

        <h1 className="logo">
          Trendify
        </h1>

        <div className="nav-links">

          {links.map((item) => (
            <a href="/" key={item}>
              {item}
            </a>
          ))}

        </div>

        <div className="nav-actions">

          <FaShoppingBag />

          <button
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="mobile-menu">

          {links.map((item) => (
            <a href="/" key={item}>
              {item}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;