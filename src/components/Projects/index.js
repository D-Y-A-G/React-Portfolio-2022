import React from "react";
import { projectData } from "../../utils/projectSeed";

export default function projectCards() {
  //can pass props here if necessary

  return (
    <div
      className="main-container project-cards" // {projectData.map(projectData) => ("write code here for html and using seed file")}
      id="project-cards"
    >
      {projectData.map((project) => (
        <div className="card " id="recentWork">
          <div className="card-image">
            <figure className="image is-5by10">
              <img src={project.image} alt="application preview" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left is-rounded">
                {/* <figure className="image is-48x48 ">
                <img
                  className="is-rounded"
                  src={denisPortrait}
                  alt="Denis Portrait"
                />
              </figure> */}
              </div>
              <div className="media-content">
                <p className="title is-4">{project.title}</p>
                <p className="subtitle is-6">{project.subtitle}</p>
              </div>
            </div>

            <div class="content">
              {project.description}
              <a href={project.repo}>#Github-repo</a>{" "}
              <a href={project.demo}>& Demo App!</a>
              <br />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
