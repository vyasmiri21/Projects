import React from "react";
import styles from "./Project.module.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Portfolio Generator",
    description: "Generate and download resumes.",
    link: "/projects/resume",
    tech: ["React", "FastAPI", "Azure"],
  }
];

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.navbar}>
        <div className={styles.buttons}>
          <button onClick={() => navigate("/")}>About</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
          <button onClick={() => navigate("/")}>Contact</button>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.heading}>
            <h1>My Projects</h1>
          </div>
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <div key={i} className={styles.projectCard}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectDesc}>{project.description}</div>
                <div className={styles.skillsList}>
                  {project.tech.map((t, j) => (
                    <span key={j} className={styles.skillItem}>
                      <div className={styles.bullet}></div>
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
                <button
                  className={styles.cardButton}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  Open Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;