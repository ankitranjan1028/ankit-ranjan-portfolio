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
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food_delivery}
              isBlog={false}
              title="Instacart"
              description="A full-stack food delivery web app built with React.js, Express.js, and MongoDB, featuring secure authentication, cart management, order tracking, Stripe payment integration, and an admin panel for product management. Designed with a responsive UI for seamless user experience."
              ghLink="https://github.com/ankitranjan1028/food-delivery-app"
              demoLink="https://food-delivery-fronted.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptogpt}
              isBlog={false}
              title="CryptoGPT"
              description="CryptoGPT is a fully responsive cryptocurrency website built with React.js and the CoinGecko API. It provides real-time price tracking, market trends, and interactive data visualization, offering users up-to-date crypto insights with a sleek and user-friendly UI."
              ghLink="https://github.com/ankitranjan1028/cryptogpt"
              demoLink="https://cryptogpt-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code_editor}
              isBlog={false}
              title="Codezy"
              description="A full-stack online code editor built with Next.js, React, and MongoDB, featuring real-time multi-language code execution, secure authentication, email verification, password recovery, and an intuitive project/file management system with a responsive user interface."
              ghLink="https://github.com/ankitranjan1028/code-editor"
              demoLink="https://code-editor-ruddy-two.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinova}
              isBlog={false}
              title="Cinova"
              description="Cinova is a dynamic movie website built with React.js and Tailwind CSS, featuring real-time movie details, trending films, and seamless API integration for up-to-date information. It offers a sleek and responsive UI for an enhanced browsing experience.."
              ghLink="https://github.com/ankitranjan1028/cinova"
              demoLink="https://cinova-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coupon}
              isBlog={false}
              title="Round Robin Coupon Distribution"
              description="A real-time coupon management system using React, Node.js, and WebSockets. Users can claim coupons dynamically, receive instant updates, and track available and claimed coupons. Includes authentication, WebSocket notifications, and an intuitive UI for seamless coupon claiming."
              ghLink="https://github.com/ankitranjan1028/Coupon_distribution"
              demoLink="https://coupon-distribution-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini_clone}
              isBlog={false}
              title="Google Gemini-2.0"
              description="A Google Gemini clone built with React.js, offering AI-powered responses, real-time interactions, and an intuitive chat interface. It leverages modern UI/UX principles to provide a seamless and engaging user experience. Designed to be fully responsive, ensuring accessibility across all devices."
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
