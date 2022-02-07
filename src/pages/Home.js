import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import fix from "../images/FTF.jpg";

const Home = () => {
  return (
    <div className="">
      <section className="container">
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-check nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4 className="home-card__title">About me...</h4>
                  <Link to="/AboutMe">
                    A Full stack web developer with Business Management and
                    Finance experience educated at University of Texas at San
                    Antonio. Skills in HTML, CSS, and JavaScript and strengths
                    in managing teams, learning technology, creativity, and
                    teamwork.
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-dollar-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4>Skills</h4>
                  <p>ADD HERE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <i className="uil uil-lightbulb-alt nav__icon"></i>
              </div>
              <div className="card-content">
                <div className="content home-card__title">
                  <h4>Projects</h4>
                  <img src={fix} alt="portrait"></img>
                  <Link className="project-card" to="/Projects">
                    View My Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
