const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">
            About Us
          </h2>

          <p className="text-gray-600 leading-8">
            SpiceHub is a premium restaurant serving
            authentic Indian and international cuisine.
            We combine fresh ingredients with expert chefs
            to create unforgettable dining experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;