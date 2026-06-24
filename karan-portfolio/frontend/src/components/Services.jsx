import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {

  const [content, setContent] =
    useState({});

  const [plans, setPlans] =
    useState([]);

  useEffect(() => {

    loadContent();
    loadPlans();

  }, []);

  const loadContent = async () => {

    try {

      const res =
      await axios.get(
        "http://localhost:5000/api/content"
      );

      setContent(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const loadPlans = async () => {

    try {

      const res =
      await axios.get(
        "http://localhost:5000/api/pricing"
      );

      setPlans(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <section
      id="services"
      className="services-section"
    >

      <div className="container">

        <h2 className="section-title">

          {content.servicesTitle ||
            "Services"}

        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#94a3b8"
          }}
        >

          {content.servicesDescription ||
            "Professional Website Development"}

        </p>

        <div className="services-grid">

          {plans.length > 0 ? (

            plans.map((plan) => (

              <div
                key={plan._id}
                className={`service-card ${
                  plan.featured
                    ? "featured-service"
                    : ""
                }`}
              >

                <h3>
                  {plan.title}
                </h3>

                <h4>
                  {plan.price}
                </h4>

                <ul>

                  {plan.features?.map(
                    (feature, i) => (

                      <li key={i}>
                        ✓ {feature}
                      </li>

                    )
                  )}

                </ul>

              </div>

            ))

          ) : (

            <h3>
              No Pricing Plans Found
            </h3>

          )}

        </div>

      </div>

    </section>

  );

};

export default Services;