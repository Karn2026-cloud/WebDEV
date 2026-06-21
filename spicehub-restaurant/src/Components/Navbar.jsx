const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-500">
          SpiceHub
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-yellow-500 px-5 py-2 rounded text-black font-semibold">
          Book Table
        </button>
      </div>
    </nav>
  );
};

export default Navbar;