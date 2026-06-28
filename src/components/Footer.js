import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built by{" "}
            <span className="footer-brand">Ankit Ranjan</span>
          </p>
          <p className="footer-text">© {year} All rights reserved</p>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ankitranjan1028"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/AnkitRanjan1028"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ankit-ranjan-a73b9a228/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:aankitrn17@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
