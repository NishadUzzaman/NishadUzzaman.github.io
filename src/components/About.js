import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I have just graduated in <b>Computer Science from </b>
        <a href="https://www.cardiffmet.ac.uk/Pages/default.aspx">
          {" "}
          Cardiff Metropolitan University
        </a>
        . I am currently seeking a frontend developer role as i want to gain as much experience as i can to better my understanding in the different tech stacks companies use.{" "}
      </p>
    );
    const two = (
      <p>
          Aside from learning about the new developements in technology, i love to play sports (golf specifically) and also have a huge heart for video games. 
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:nishad20081@hotmail.com">
          nishad20081@hotmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript",
      "Python",
      "React.js",
      "Java",
      "C++",
      "C#",
      "HTML",
      "CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/grad1.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;