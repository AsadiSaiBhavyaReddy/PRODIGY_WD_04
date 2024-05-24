// Projects.js
import React from 'react';
import projectsData from '../data/projects.json';
import './Projects.css';

const Projects = () => (
  <div className="projects">
    <h2>My Projects</h2>
    <div className="projects-list">
      {projectsData.map(project => (
        <div key={project.id} className="project-card">
         
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
