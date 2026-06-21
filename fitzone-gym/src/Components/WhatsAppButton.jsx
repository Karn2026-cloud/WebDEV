import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;