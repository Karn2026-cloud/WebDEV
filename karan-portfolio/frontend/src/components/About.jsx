import { useEffect, useState } from "react";
import axios from "axios";

const About = () => {

  const [content, setContent] = useState({});

  useEffect(() => {

    axios
      .get("https://webdev-1-jsp7.onrender.com/api/content")
      .then((res) => {
        setContent(res.data);
      });

  }, []);

  return (

    <section
      id="about"
      className="about"
    >

      <div className="container">

        <h2 className="section-title">

          {content.aboutTitle ||
            "About Me"}

        </h2>

        <div className="about-card">

          <h3>

            {content.aboutTitle ||
              "Frontend Developer"}

          </h3>

          <p>

            {content.aboutDescription ||
              "Frontend Developer & Founder of KOMSYTE"}

          </p>

          <div className="stats">

            <div>
              <h4>3+</h4>
              <span>Projects</span>
            </div>

            <div>
              <h4>100%</h4>
              <span>Responsive</span>
            </div>

            <div>
              <h4>24/7</h4>
              <span>Support</span>
            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default About;
