import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import code_editor from "../../Assets/Projects/code-editor.png";
import coupon from "../../Assets/Projects/coupon-distribution.jpg";
import gemini_clone from "../../Assets/Projects/gemini-clone.jpg";
import cinova from "../../Assets/Projects/cinova.png";
import cryptogpt from "../../Assets/Projects/cryptogpt.png";
import food_delivery from "../../Assets/Projects/food-delivery.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="project-section-header">
          <span className="section-label">Portfolio</span>
          <h1 className="project-heading">
            My Recent <span className="purple">Works</span>
          </h1>
          <p className="section-subtitle">
            A curated selection of projects showcasing full-stack development,
            real-time systems, and modern UI craftsmanship.
          </p>
        </div>

        <Row style={{ justifyContent: "center" }}>
          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={food_delivery}
              isBlog={false}
              title="Instacart"
              description="A full-stack food delivery web app built with React.js, Express.js, and MongoDB, featuring secure authentication, cart management, order tracking, Stripe payment integration, and an admin panel."
              ghLink="https://github.com/ankitranjan1028/food-delivery-app"
              demoLink="https://food-delivery-fronted.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={cryptogpt}
              isBlog={false}
              title="CryptoGPT"
              description="A fully responsive cryptocurrency website built with React.js and the CoinGecko API. Real-time price tracking, market trends, and interactive data visualization with a sleek UI."
              ghLink="https://github.com/ankitranjan1028/cryptogpt"
              demoLink="https://cryptogpt-seven.vercel.app/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={code_editor}
              isBlog={false}
              title="Codezy"
              description="A full-stack online code editor built with Next.js, React, and MongoDB — real-time multi-language execution, secure auth, email verification, and intuitive project management."
              ghLink="https://github.com/ankitranjan1028/code-editor"
              demoLink="https://code-editor-ruddy-two.vercel.app/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={cinova}
              isBlog={false}
              title="Cinova"
              description="A dynamic movie website built with React.js and Tailwind CSS — real-time movie details, trending films, and seamless API integration for an enhanced browsing experience."
              ghLink="https://github.com/ankitranjan1028/cinova"
              demoLink="https://cinova-five.vercel.app/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={coupon}
              isBlog={false}
              title="Coupon Distribution"
              description="A real-time coupon management system using React, Node.js, and WebSockets. Dynamic claiming, instant updates, authentication, and WebSocket notifications."
              ghLink="https://github.com/ankitranjan1028/Coupon_distribution"
              demoLink="https://coupon-distribution-frontend.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} className="project-card">
            <ProjectCard
              imgPath={gemini_clone}
              isBlog={false}
              title="Google Gemini 2.0"
              description="A Google Gemini clone built with React.js — AI-powered responses, real-time interactions, and an intuitive chat interface. Fully responsive across all devices."
              ghLink="https://github.com/ankitranjan1028/google-gemini-2.0"
              demoLink="https://google-gemini-2-0-sepia.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
