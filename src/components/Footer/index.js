import React from "react";
import resume from "../../images/DA-Resume-2022.pdf";

function Footer() {
  return (
    <footer className="footer rows mt-5">
      <div className="columns">
        <div className="column is-one-third is-offset-2">
          <h2 className="footer__title">
            <strong>Contact</strong>
          </h2>
          <ul>
            <li>
              <i className="uil uil-github"></i>
              Github
            </li>
            <li>
              <a
                className="icon mt-2 footer__icon"
                href="https://www.linkedin.com/in/denis-arce-81163a6b/"
                target="_blank"
              >
                <i className="uil uil-linkedIn"></i>
                LinkedIn
              </a>
            </li>
            <li>
              {/* <a
                className="icon mt-2 footer__icon"
                href="https://twitter.com/foodtruckfixco"
                target="_blank"
              >
                <i className="uil uil-twitter"></i>
                Twitter
              </a> */}
            </li>
            <li>
              <a className="icon mt-2 footer__icon" href="/Contact">
                <i className="uil uil-envelope-upload"></i>
                Email
              </a>
            </li>
          </ul>
        </div>
        <div className="column is-3">
          <h2 className="footer__title">
            <strong>Resources</strong>
          </h2>
          <ul>
            <li>
              <a className="footer__icon mt-2" href={resume}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="control level-item">
          <a href="https://github.com/D-Y-A-G">
            <div className="tags has-addons">
              <span className="tag is-success">By Denis Arce</span>
              <span className="tag is-info">MIT license</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
