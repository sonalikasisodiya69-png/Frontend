import React from "react";
import "./Projects.css";

import expenseImage from "../assets/expense-tracker.png";
import todoImage from "../assets/to-do list.png";
import calculatorImage from "../assets/calculator.png";
import agecalculator from "../assets/age calculator.png";

function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      description:
        "A simple expense management application to track daily expenses and manage spending.",
      tech: "HTML, CSS, JavaScript",
      image: expenseImage,
    },
    {
      title: "To-Do List",
      description:
        "A responsive task management application for adding, completing and deleting tasks.",
      tech: "HTML, CSS, JavaScript",
      image: todoImage,
    },
    {
      title: "Calculator",
      description:
        "A clean and user-friendly calculator application with basic arithmetic operations.",
      tech: "HTML, CSS, JavaScript",
      image: calculatorImage,
    },
    {
      title: "Age Calculator",
      description:
        "An application that calculates age based on the user's date of birth.",
      tech: "React, JavaScript",
      image: agecalculator,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <p className="section-tag">MY PROJECTS</p>

        <h2>
          Things I've <span>Built</span>
        </h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                <button>Live Demo</button>
                <button>GitHub</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

