import React from "react";

function ProjectsForm({ projects, setProjects }) {
  const handleAddProject = () => {
    setProjects([
      ...projects,
      { name: "", description: "", tech: "", link: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = projects.map((prj, i) =>
      i === index ? { ...prj, [field]: value } : prj
    );
    setProjects(updated);
  };

  const handleRemove = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((prj, i) => (
        <div key={i} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "8px" }}>
          <input
            type="text"
            placeholder="Project Name"
            value={prj.name}
            onChange={e => handleChange(i, "name", e.target.value)}
          /><br />
          <textarea
            placeholder="Description"
            value={prj.description}
            onChange={e => handleChange(i, "description", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={prj.tech}
            onChange={e => handleChange(i, "tech", e.target.value)}
          /><br />
          <input
            type="text"
            placeholder="Project Link"
            value={prj.link}
            onChange={e => handleChange(i, "link", e.target.value)}
          /><br />
          <button onClick={() => handleRemove(i)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
}

export default ProjectsForm;