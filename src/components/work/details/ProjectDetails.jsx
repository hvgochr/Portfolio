import React from "react";
import { projectsData } from "../Data";
import { useParams } from "react-router-dom";
import "./projectdetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(item => item.id === parseInt(id));

  if (id >= 0 && id <= projectsData.length) {
    return (
      <section className="project__detail section">
        <h1 className="project__title">{project.title}</h1>
        <div className="project__container container">
          <div className="description__container">
            <h2 className="section__title">Description</h2>
            <span className="section__subtitle">What is it?</span>
            <p className="content text__content">{project.description}</p>
          </div>
          <div className="objectives__container">
            <h2 className="section__title">Objectives</h2>
            <span className="section__subtitle">The goals</span>
            <ul className="content list__content">
              {project.objectives.map((objective, index) => (
                <li className="list__item" key={index}>{objective}</li>
              ))}
            </ul>
          </div>
          <div className="process__container">
            <h2 className="section__title">Creation Process</h2>
            <span className="section__subtitle">How did I do it?</span>
            <p className="content text__content">{project.creationProcess}</p>
          </div>
          <div className="results__container">
            <h2 className="section__title">Results</h2>
            <span className="section__subtitle">The final product</span>
            <p className="content text__content">{project.results}</p>
          </div>
          <div className="images__container">
            <h2 className="section__title">Some screenshots</h2>
            <span className="section__subtitle">What does it look like?</span>
            <div className="images__content">
              {project.phoneScreen && (
                <img className="content img__phone" src={project.phoneScreen} alt="phone screen" />
              )}
              {project.desktopScreen && (
                <img className="content img__desktop" src={project.desktopScreen} alt="desktop screen" />
              )}
            </div>
          </div>
          <div className="links__container">
            <h2 className="section__title">Links</h2>
            <span className="section__subtitle">See it by yourself!</span>
            <div className="links__content">
              <a className="link" href={project.githubLink} target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
              {project.deploymentLink && (
                <a className="link" href={project.deploymentLink} target="_blank" rel="noreferrer">
                  Deployed Version
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="project__detail section">
        <h1>Error: Project id not in range.</h1>
      </section>
    );
  }
};

export default ProjectDetails;