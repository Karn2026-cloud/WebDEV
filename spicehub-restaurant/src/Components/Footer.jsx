import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-500 mb-4">
          SpiceHub
        </h2>

        <p className="text-gray-400 mb-6">
          Delicious food, memorable experiences.
        </p>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaTwitter />
          </a>

          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>

        <hr className="border-gray-700 mb-4" />

        <p className="text-gray-500">
          © 2026 SpiceHub Restaurant. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;