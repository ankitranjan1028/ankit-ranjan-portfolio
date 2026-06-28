import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ overflow: "hidden" }}>
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="project-card-actions">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
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
