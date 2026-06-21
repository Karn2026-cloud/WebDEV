import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">

      <div className="container-custom flex items-center justify-between h-24">

        <h1 className="text-4xl font-black text-red-500">
          FitZone
        </h1>

        <div className="hidden md:flex gap-10 text-white text-lg">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-red-500 transition"
            >
              {link.name}
            </a>
          ))}

        </div>

        <button className="btn-primary hidden md:block">
          Join Now
        </button>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="bg-black text-white p-6 md:hidden">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;