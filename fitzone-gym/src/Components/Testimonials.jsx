const testimonials = [
  {
    name:"Rahul Sharma",
    text:"Lost 15kg in 4 months. Amazing trainers!"
  },
  {
    name:"Priya Patel",
    text:"The atmosphere is fantastic and motivating."
  },
  {
    name:"Amit Singh",
    text:"Best gym equipment and coaching."
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-black">

      <div className="container-custom">

        <h2 className="section-title">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item,index)=>(
            <div
              key={index}
              className="testimonial-card"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300">
                "{item.text}"
              </p>

              <h4 className="mt-5 font-bold text-lg">
                - {item.name}
              </h4>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;