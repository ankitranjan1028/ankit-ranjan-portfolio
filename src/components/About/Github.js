import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <img
        src="https://leetcard.jacoblin.cool/ranjann_aankit28?theme=dark&font=Karma&ext=contest"
        alt="LeetCode Stats"
        style={{ maxWidth: "800px", width: "100%", marginBottom: "50px" }}
      />

      <GitHubCalendar
        username="ankitranjan1028-vedam"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;