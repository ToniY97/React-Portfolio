// ProjectGallery.js
import React from 'react';
import Project from './Project';
import projectsData from './projects.json';
import './ProjectGallery.css';

function ProjectGallery() {
  return (
    <div className="project-gallery">
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectGallery;
