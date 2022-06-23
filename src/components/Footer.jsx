import React from "react";

function Footer() {
    return (
      <footer class="footer text-center"><strong>TECHNOLOGIES</strong>
        <div class="text-center">
          <p class="tech">
            <section>
                <ul class="tools">
                    <li>HTML</li>
                    <li>CSS/Bulma/Bootstrap</li>
                    <li>Javascript/Python</li>
                    <li>Restful API</li>
                </ul>
                <ul class="tools"> 
                    <li>Node.js/Express.js</li>
                    <li>Git/GitHub</li>
                    <li>DOM</li>
                    <li>EJS/React</li>
                </ul>
            </section>
            </p>
        </div>
            {" "}
            <a href="https://www.linkedin.com/in/chuonghvo/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>{" "}|{" "}
            <a href="https://github.com/vohoang2005" target="_blank" rel="noopener noreferrer">
              Github
            </a>
      </footer>
    );
  }

export default Footer;