import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return <h2>Loading Projects...</h2>;
  }

  return (
    <section className="projects">

      <h2>My Projects</h2>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            key={project._id}
            className="project-card"
          >

            <img
              src={project.image}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <div className="buttons">

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Projects;