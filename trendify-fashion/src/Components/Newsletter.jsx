const Newsletter = () => {
  return (
    <section className="newsletter">

      <div className="container-custom">

        <div className="newsletter-box">

          <h2>
            Subscribe For Exclusive Offers
          </h2>

          <p>
            Get updates on new arrivals and special discounts.
          </p>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;