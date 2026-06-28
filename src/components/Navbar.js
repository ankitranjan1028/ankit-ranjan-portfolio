import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span className="brand-text">AR.</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Item>
              <NavLink to="/" className={navLinkClass} onClick={() => updateExpanded(false)}>
                <AiOutlineHome /> Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/about" className={navLinkClass} onClick={() => updateExpanded(false)}>
                <AiOutlineUser /> About
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/project" className={navLinkClass} onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen /> Projects
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/resume" className="nav-link nav-cta" onClick={() => updateExpanded(false)}>
                <CgFileDocument /> Resume
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
