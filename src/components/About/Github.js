import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="github-section">
      <span className="section-label section-label-center">
        Activity
      </span>
      <h1 className="project-heading">
        Days I <span className="purple">Code</span>
      </h1>

      <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
        <img
          src="https://leetcard.jacoblin.cool/ranjann_aankit28?theme=dark&font=Karma&ext=contest"
          alt="LeetCode Stats"
          style={{
            maxWidth: "800px",
            width: "100%",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      </Row>

      <Row style={{ justifyContent: "center" }}>
        <GitHubCalendar
          username="ankitranjan1028-vedam"
          blockSize={14}
          blockMargin={4}
          color="#22d3ee"
          fontSize={14}
        />
      </Row>
    </div>
  );
}

export default Github;
