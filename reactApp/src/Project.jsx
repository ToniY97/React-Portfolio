import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function Project({ project }) {
  const { id, title, deployedLink, githubLink, screenshot } = project;

  return (
    <div className="project">
      <h2>{title}</h2>
      <p>Link to deployed version: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a></p>
      <p>Link to GitHub repository: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
      <img src={screenshot} alt={`${title} Screenshot`} />
      <p><Link to={`/project/${id}`}>View Project Details</Link></p>
    </div>
  );
}

export default Project;
