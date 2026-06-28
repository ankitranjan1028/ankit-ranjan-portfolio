import React from "react";
import { Col } from "react-bootstrap";

function SkillIcon({ icon, name }) {
  return (
    <Col xs={4} sm={3} md={2} className="tech-icon-col">
      <div className="tech-icon-item">
        <div className="tech-icons">{icon}</div>
        <span className="tech-icon-label">{name}</span>
      </div>
    </Col>
  );
}

export default SkillIcon;
