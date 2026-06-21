import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          BUILD YOUR
          <span className="text-red-500"> DREAM BODY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-subtitle mt-6"
        >
          Professional trainers, premium equipment,
          personalized workout plans and amazing results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <button className="btn-primary">
            Join Today
          </button>

          <button className="btn-outline">
            View Programs
          </button>
        </motion.div>

        <div className="stats-grid">

          <div className="stats-box">
            <h3>500+</h3>
            <p>Members</p>
          </div>

          <div className="stats-box">
            <h3>15+</h3>
            <p>Trainers</p>
          </div>

          <div className="stats-box">
            <h3>10+</h3>
            <p>Years</p>
          </div>

          <div className="stats-box">
            <h3>24/7</h3>
            <p>Support</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;