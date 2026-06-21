import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container-custom">

        <h2 className="footer-logo">
          FitZone
        </h2>

        <p className="footer-text">
          Transform Your Body. Transform Your Life.
        </p>

        <div className="footer-socials">

          <FaInstagram />

          <FaFacebook />

          <FaLinkedin />

          <FaYoutube />

        </div>

        <p className="text-gray-500">
          © 2026 FitZone Gym. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;