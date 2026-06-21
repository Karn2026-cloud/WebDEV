import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')"
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container-custom hero-content">

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sale-badge"
        >
          New Collection 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-title"
        >
          WEAR YOUR
          <br />
          STYLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-text"
        >
          Discover premium fashion designed
          for everyday confidence.
        </motion.p>

        <button className="btn-primary">
          Shop Now
        </button>

      </div>
    </section>
  );
};

export default Hero;