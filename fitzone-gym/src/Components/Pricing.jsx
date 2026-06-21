const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: [
      "Gym Access",
      "Locker Facility",
      "Basic Support"
    ]
  },
  {
    name: "Standard",
    price: "₹1999",
    popular: true,
    features: [
      "Gym Access",
      "Personal Trainer",
      "Diet Plan",
      "Locker Facility"
    ]
  },
  {
    name: "Premium",
    price: "₹2999",
    features: [
      "Gym Access",
      "Personal Trainer",
      "Diet Plan",
      "Priority Support",
      "Supplement Guidance"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-gray-100 text-black">

      <div className="container-custom">

        <h2 className="section-title text-black">
          Membership Plans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((plan,index)=>(
            <div
              key={index}
              className={`pricing-card ${
                plan.popular ? "popular-plan" : ""
              }`}
            >
              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <h4 className="text-6xl font-black my-6">
                {plan.price}
              </h4>

              <ul className="space-y-3 mb-8">
                {plan.features.map((item,i)=>(
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>

              <button className="btn-primary w-full">
                Join Now
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Pricing;