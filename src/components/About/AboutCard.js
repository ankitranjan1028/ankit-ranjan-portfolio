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
            I am currently a final year <span className="purple">Computer Science and Engineering</span>  student at Indian Institute of Information Technology Ranchi.
            <br />
            <br />
            I am actively seeking internship and full-time opportunities in <span className="purple">Software Development</span> , where 
            I can leverage my technical skills, problem-solving ability, and enthusiasm for learning 
            to contribute meaningfully to a team.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
