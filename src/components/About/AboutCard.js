import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Ranjan. </span>
            <br />
            I work as a <span className="purple">Software Development Engineer 1</span> at{" "}
            <span className="purple">Sunstone</span>, where I contribute to building
            production-grade educational platforms. I graduated in <span className="purple">2025</span> with
            a degree in <span className="purple">Computer Science and Engineering</span> from
            the Indian Institute of Information Technology Ranchi.
            <br />
            <br />
            I specialize in <i><b className="purple">React Native, Next.js, TypeScript, and Redux</b></i>,
            ensuring seamless UI/UX experiences. On the backend, I leverage{" "}
            <i><b className="purple">Node.js, Express, and MongoDB</b></i> to build robust
            and high-performance applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket & Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge-watching Web Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring New Places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;