//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>React Portfolio</strong> - by{" "}
          <a href="https://github.com/vohoang2005" target="_blank" rel="noreferrer">
            Chuong Vo
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/chuonghvo/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://github.com/vohoang2005" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
