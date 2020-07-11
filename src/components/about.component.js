import React from "react";

const About = () => {
  return (
    <section className="o-grid c-about__section" id="about">
      <div className="c-about__background"></div>
      <div className="o-grid__item--wide">
        <div className="c-about__cards">
          <div className="c-about__card c-about__card--left">
            <h2>Hello!</h2>
            <p className="c-about__description">
              I'm Tam, a developer who is driven to create beautiful, usable products that please the eye and delight the user.
              <br /><br />
              My knowledge of full-stack development, meticulous attention to detail, and focus on best practices enable me to build clean, scalable, and performant applications.
              <br /><br />
              Currently, I'm working towards a BS. Computer Science with a minor in Mathematics.            
            </p>
          </div>
          <div className="c-about__card c-about__card--right">
            <div className="c-about__right-content">
              <h2>Tech</h2>
              <div className="c-about__grid">
                <div className="c-about__column">
                  <h4>Languages</h4>
                  <ul className="c-about__list">
                    <li className="c-about__list-item">HTML</li>
                    <li className="c-about__list-item">(S)CSS + BEM</li>
                    <li className="c-about__list-item">JavaScript</li>
                    <li className="c-about__list-item">TypeScript</li>
                    <li className="c-about__list-item">Python</li>
                    <li className="c-about__list-item">C#</li>
                  </ul>
                </div>
                <div className="c-about__column">
                  <h4>Tools</h4>
                  <ul className="c-about__list">
                    <li className="c-about__list-item">React</li>
                    <li className="c-about__list-item">Redux</li>
                    <li className="c-about__list-item">Node.js</li>
                    <li className="c-about__list-item">Express</li>
                    <li className="c-about__list-item">WordPress</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> {/* .c-about__cards */}
      </div>
    </section>
  );
};

export default About;