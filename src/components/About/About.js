import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="align-items-center about-intro-row">
          <Col lg={7}>
            <div className="about-section-header">
              <span className="section-label">Who I Am</span>
              <h1>
                Know Who <span className="purple">I'm</span>
              </h1>
            </div>
            <Aboutcard />
          </Col>
          <Col lg={5} className="about-img">
            <img src={laptopImg} alt="About illustration" className="img-fluid" />
          </Col>
        </Row>

        <div className="section-header-block">
          <span className="section-label section-label-center">
            Expertise
          </span>
          <h1 className="project-heading">
            Professional <span className="purple">Skillset</span>
          </h1>
        </div>
        <Techstack />

        <div className="section-header-block section-header-block-spaced">
          <span className="section-label section-label-center">
            Workflow
          </span>
          <h1 className="project-heading">
            <span className="purple">Tools</span> I Use
          </h1>
        </div>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
