import {
  FaDumbbell,
  FaHeartbeat,
  FaRunning
} from "react-icons/fa";

const programs = [
  {
    icon: <FaDumbbell size={55} />,
    title: "Weight Training",
    desc: "Build strength and gain muscle efficiently."
  },
  {
    icon: <FaHeartbeat size={55} />,
    title: "Cardio Fitness",
    desc: "Improve endurance and heart health."
  },
  {
    icon: <FaRunning size={55} />,
    title: "CrossFit",
    desc: "High intensity functional training."
  }
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="section bg-gray-100 text-black"
    >
      <div className="container-custom">

        <h2 className="section-title text-black">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {programs.map((program, index) => (
            <div
              key={index}
              className="card bg-white text-center"
            >
              <div className="text-red-500 flex justify-center mb-6">
                {program.icon}
              </div>

              <h3 className="text-3xl font-bold mb-4">
                {program.title}
              </h3>

              <p className="text-gray-600">
                {program.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Programs;