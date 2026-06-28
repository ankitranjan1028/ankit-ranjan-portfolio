import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { HiArrowRight, HiOutlineDocumentText } from "react-icons/hi";

function Home() {
  return (
    <section className="home-page">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} className="home-header">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Available for opportunities
              </div>

              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                I'm <br />
                <strong className="main-name">Ankit Ranjan</strong>
              </h1>

              <div className="typewriter-wrapper">
                <div className="typewriter-inner">
                  <Type />
                </div>
              </div>

              <div className="hero-cta-group">
                <Link to="/project#production-systems" className="btn-primary-gradient">
                  View My Work <HiArrowRight />
                </Link>
                <Link to="/resume" className="btn-outline-glass">
                  <HiOutlineDocumentText /> View Resume
                </Link>
              </div>
            </Col>

            <Col lg={5} className="hero-image-col">
              <div className="hero-image-wrapper">
                <img
                  src={homeLogo}
                  alt="Developer illustration"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
