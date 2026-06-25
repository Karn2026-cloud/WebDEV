import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Hero = () => {

  const [content, setContent] = useState({});

  useEffect(() => {

    axios
      .get("https://webdev-1-jsp7.onrender.com/api/content")
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <section id="home" className="hero">

      <div className="container hero-content">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="badge"
        >
          Available For Freelance Work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {content.heroTitle || "Hi, I'm Karan"}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {content.heroSubtitle ||
            "Frontend Web Developer"}
        </motion.h2>

        <p>
          {content.heroDescription ||
            "I build modern websites for local businesses."}
        </p>

        <div className="hero-buttons">

          <a
  href="#projects"
  className="btn-primary"
>
  View Projects
</a>
          <a
href={content.resume}
target="_blank"
rel="noreferrer"
className="btn-outline"
>
Resume
</a>
          <a
  href="#contact"
  className="btn-outline"
>
  Hire Me
</a>

        </div>

      </div>

    </section>
  );
};

export default Hero;
