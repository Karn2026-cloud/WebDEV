import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="section bg-white text-black"
    >
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
              alt="Gym"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              About FitZone
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              At FitZone, we combine modern equipment,
              expert trainers, and personalized fitness
              programs to help members achieve outstanding
              results.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">

              <div>
                <h3 className="text-5xl font-black text-red-500">
                  500+
                </h3>
                <p>Active Members</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-red-500">
                  15+
                </h3>
                <p>Expert Trainers</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-red-500">
                  10+
                </h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-red-500">
                  24/7
                </h3>
                <p>Support</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;