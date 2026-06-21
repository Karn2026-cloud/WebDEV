const Contact = () => {
  return (
    <section
      id="contact"
      className="section bg-black text-white"
    >
      <div className="container-custom">

        <h2 className="section-title">
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          <div>

            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4 text-lg">

              <p>📍 Nashik, Maharashtra</p>

              <p>📞 +91 9876543210</p>

              <p>✉️ fitzone@gmail.com</p>

            </div>

            <div className="mt-8 rounded-3xl overflow-hidden">

              <iframe
                title="Gym Location"
                src="https://maps.google.com/maps?q=nashik&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
              />

            </div>

          </div>

          <div className="contact-form">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <textarea
                rows="7"
                placeholder="Message"
              />

              <button
                className="btn-primary w-full"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;