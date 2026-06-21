import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container-custom">

        <h2 className="footer-logo">
          Trendify
        </h2>

        <p className="footer-text">
          Modern Fashion For Modern People
        </p>

        <div className="footer-socials">

          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />

        </div>

        <p className="copyright">
          © 2026 Trendify. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;