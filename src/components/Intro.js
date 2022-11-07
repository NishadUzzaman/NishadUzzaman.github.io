import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hey, "}
            <span className="intro-name">{"Nishad"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I am an aspiring frontend developer.</div>
          <div className="intro-desc">
          I am an aspiring frontend developer who recently 
          graduated with a 2:1 grade in Computer Science and 
          Mobile Computing. I am keen to learning more and 
          gaining more experience in the technology industry by 
          offering my full commitment and being a friendly 
          addition to your company. Therefore, I am looking for a 
          frontend developer position in your company.
          </div>
          <a
            href="mailto:nishad20081@hotmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hi!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;