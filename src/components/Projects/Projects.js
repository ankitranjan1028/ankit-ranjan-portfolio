import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProjectCard from "./ProjectCards";
import ProductionSystems from "./ProductionSystems";
import Particle from "../Particle";
import personalProjects from "../../data/projectsData";
import code_editor from "../../Assets/Projects/code-editor.png";
import coupon from "../../Assets/Projects/coupon-distribution.jpg";
import gemini_clone from "../../Assets/Projects/gemini-clone.jpg";
import cinova from "../../Assets/Projects/cinova.png";
import cryptogpt from "../../Assets/Projects/cryptogpt.png";
import food_delivery from "../../Assets/Projects/food-delivery.png";

const personalImages = {
  "food-delivery": food_delivery,
  cryptogpt,
  "code-editor": code_editor,
  cinova,
  "coupon-distribution": coupon,
  "gemini-clone": gemini_clone,
};

function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [location]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-section-header">
          <span className="section-label">Portfolio</span>
          <h1 className="project-heading">
            Projects & <span className="purple">Work</span>
          </h1>
        </div>

        <div id="production-systems" className="projects-group">
          <Row className="justify-content-center">
            <Col lg={10}>
              <ProductionSystems />
            </Col>
          </Row>
        </div>

        <div id="personal-projects" className="projects-group">
          <div className="projects-group-header">
            <h2 className="projects-group-title">
              Personal <span className="purple">Projects</span>
            </h2>
          </div>
          <Row style={{ justifyContent: "center" }}>
            {personalProjects.map((project) => (
              <Col lg={4} md={6} className="project-card" key={project.id}>
                <ProjectCard
                  {...project}
                  imgPath={personalImages[project.imgPath]}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
