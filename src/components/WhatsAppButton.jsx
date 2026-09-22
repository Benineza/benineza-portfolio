const WhatsAppButton = () => {
  const phoneNumber = '250780539886';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly with Moise on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
    </a>
  );
};

export default WhatsAppButton;