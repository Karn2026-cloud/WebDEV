import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";


const API_URL = "https://webdev-1-jsp7.onrender.com/api/projects";

function Projects() {
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(false);
const [submitting, setSubmitting] = useState(false);
const [editingId, setEditingId] = useState(null);

const [form, setForm] = useState({
title: "",
description: "",
image: "",
liveDemo: "",
github: "",
});

useEffect(() => {
fetchProjects();
}, []);

const fetchProjects = async () => {
try {
setLoading(true);
const res = await axios.get(API_URL);
setProjects(res.data);
} catch (err) {
console.error(err);
alert("Failed to load projects");
} finally {
setLoading(false);
}
};

const resetForm = () => {
setForm({
title: "",
description: "",
image: "",
liveDemo: "",
github: "",
});


setEditingId(null);

};

const addProject = async () => {
try {
if (!form.title || !form.description || !form.image) {
return alert("Please fill all required fields");
}

  setSubmitting(true);

  await axios.post(API_URL, form);

  alert("Project Added");

  resetForm();

  fetchProjects();
} catch (err) {
  console.error(err);
  alert("Failed to add project");
} finally {
  setSubmitting(false);
}


};

const editProject = (project) => {
setEditingId(project._id);


setForm({
  title: project.title || "",
  description: project.description || "",
  image: project.image || "",
  liveDemo: project.liveDemo || "",
  github: project.github || "",
});

window.scrollTo({
  top: 0,
  behavior: "smooth",
});


};

const updateProject = async () => {
try {
setSubmitting(true);


  await axios.put(
    `${API_URL}/${editingId}`,
    form
  );

  alert("Project Updated");

  resetForm();

  fetchProjects();
} catch (err) {
  console.error(err);
  alert("Failed to update project");
} finally {
  setSubmitting(false);
}


};

const deleteProject = async (id) => {
try {
const confirmDelete = window.confirm(
"Delete this project?"
);


  if (!confirmDelete) return;

  await axios.delete(
    `${API_URL}/${id}`
  );

  alert("Project Deleted");

  fetchProjects();
} catch (err) {
  console.error(err);
  alert("Failed to delete project");
}

};

return (
  <>
    <Sidebar />

    <div className="page"> <h1>Projects Management</h1>

  <div className="form-card">
    <h2>
      {editingId
        ? "Edit Project"
        : "Add New Project"}
    </h2>

    <input
      type="text"
      placeholder="Project Title"
      value={form.title}
      onChange={(e) =>
        setForm({
          ...form,
          title: e.target.value,
        })
      }
    />

    <textarea
      placeholder="Project Description"
      value={form.description}
      onChange={(e) =>
        setForm({
          ...form,
          description: e.target.value,
        })
      }
    />

    <input
      type="text"
      placeholder="Image URL"
      value={form.image}
      onChange={(e) =>
        setForm({
          ...form,
          image: e.target.value,
        })
      }
    />

    <input
      type="text"
      placeholder="Live Demo URL"
      value={form.liveDemo}
      onChange={(e) =>
        setForm({
          ...form,
          liveDemo: e.target.value,
        })
      }
    />

    <input
      type="text"
      placeholder="GitHub URL"
      value={form.github}
      onChange={(e) =>
        setForm({
          ...form,
          github: e.target.value,
        })
      }
    />

    <div className="form-buttons">
      {editingId ? (
        <>
          <button
            className="update-btn"
            onClick={updateProject}
            disabled={submitting}
          >
            {submitting
              ? "Updating..."
              : "Update Project"}
          </button>

          <button
            className="cancel-btn"
            onClick={resetForm}
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          className="add-btn"
          onClick={addProject}
          disabled={submitting}
        >
          {submitting
            ? "Adding..."
            : "Add Project"}
        </button>
      )}
    </div>
  </div>

  <h2 style={{ marginTop: "40px" }}>
    All Projects
  </h2>

  {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="projects-grid">
      {projects.map((project) => (
        <div
          key={project._id}
          className="project-card"
        >
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x250";
            }}
          />

          <div className="project-content">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-links">
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

            <div className="action-buttons">
              <button
                className="edit-btn"
                onClick={() =>
                  editProject(project)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteProject(project._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

</>
);
}

export default Projects;
