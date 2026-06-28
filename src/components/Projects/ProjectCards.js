import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, imgPath, ghLink, demoLink, isBlog = false }) {
  return (
    <Card className="project-card-view">
      <div style={{ overflow: "hidden" }}>
        <Card.Img variant="top" src={imgPath} alt={title} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="project-card-actions">
          <a
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <BsGithub /> {isBlog ? "Blog" : "GitHub"}
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary-outline"
            >
              <CgWebsite /> Live Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
