const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SpiceHub Restaurant
            </h3>

            <p className="mb-3">
              📍 College Road, Nashik, Maharashtra
            </p>

            <p className="mb-3">
              📞 +91 9876543210
            </p>

            <p>
              ✉️ info@spicehub.com
            </p>
          </div>

          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;