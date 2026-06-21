const testimonials = [
  {
    name: "Aarav Sharma",
    review:
      "Amazing quality and stylish designs. Highly recommended!"
  },
  {
    name: "Priya Patel",
    review:
      "The clothes fit perfectly and delivery was super fast."
  },
  {
    name: "Rahul Verma",
    review:
      "Trendify has become my favorite fashion brand."
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-gray-50">

      <div className="container-custom">

        <h2 className="section-title">
          What Customers Say
        </h2>

        <div className="testimonials-grid">

          {testimonials.map((item,index)=>(
            <div
              key={index}
              className="testimonial-card"
            >
              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p>{item.review}</p>

              <h4>{item.name}</h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;