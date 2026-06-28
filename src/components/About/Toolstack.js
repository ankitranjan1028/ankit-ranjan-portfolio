import React from "react";
import { Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiVercel } from "react-icons/si";
import { FaGithubSquare, FaApple } from "react-icons/fa";
import SkillIcon from "./SkillIcon";

const tools = [
  { icon: <FaApple />, name: "macOS" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaGithubSquare />, name: "GitHub" },
  { icon: <SiVercel />, name: "Vercel" },
];

function Toolstack() {
  return (
    <Row className="tech-stack-row">
      {tools.map((tool) => (
        <SkillIcon key={tool.name} icon={tool.icon} name={tool.name} />
      ))}
    </Row>
  );
}

export default Toolstack;
