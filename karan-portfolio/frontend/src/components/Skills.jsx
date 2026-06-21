const skills = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Responsive Design",
  "Git & GitHub",
  "UI/UX Design"
];

const Skills = () => {
  return (
    <section className="skills-section">

      <div className="container">

        <h2 className="section-title">
          Skills & Technologies
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;