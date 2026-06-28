import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handleChange = (e) => setIsMobile(e.matches);
    handleChange(media);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [breakpoint]);

  return isMobile;
}

function Home2() {
  const isMobile = useIsMobile();

  const avatar = (
    <div className="avatar-wrapper">
      <img src={myImg} alt="Ankit Ranjan" />
    </div>
  );

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="home-about-description">
            <span className="section-label">About Me</span>
            <h1>
              Let Me <span className="purple">Introduce</span> Myself
            </h1>
            <p className="home-about-body">
              I'm a Software Engineer who loves transforming ideas into reliable,
              scalable products. I've grown from a curious programmer into a
              professional engineer with hands-on experience shipping production
              applications, backed by a strong foundation in{" "}
              <i><b className="purple">TypeScript, React, Next.js, and Node.js</b></i>{" "}
              and a deep understanding of data structures and algorithms.
              <br /><br />
              I'm at my best building things that are scalable, type-safe, and fast
              — from <i><b className="purple">server-rendered Next.js frontends</b></i>{" "}
              to <i><b className="purple">React Native mobile apps</b></i> and
              robust{" "}
              <i><b className="purple">Node.js + MongoDB backends</b></i>.
            </p>
          </Col>
          <Col lg={4} className="myAvtar">
            {isMobile ? (
              avatar
            ) : (
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02}>
                {avatar}
              </Tilt>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ankitranjan1028"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/AnkitRanjan1028"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankit-ranjan-a73b9a228/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:aankitrn17@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  aria-label="Email"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
