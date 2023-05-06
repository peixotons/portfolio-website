import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reactapi from "../../Assets/Projects/react-api.png";
import contactbook from "../../Assets/Projects/contact-book.png";
import quote from "../../Assets/Projects/quote.png";
import ethereumchecker from "../../Assets/Projects/ethereum-checker.png";
import login from "../../Assets/Projects/login.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactapi}
              isBlog={false}
              title="React API Crypto"
              description="Web application that provides prices, volumes, market capitalization of the largest crypto assets in the world."
              ghLink="https://github.com/peixotons/react-api-crypto"
              demoLink="https://peixotons.github.io/react-api-crypto/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactbook}
              isBlog={false}
              title="Contact Book"
              description="Application that provides a contact book for the organization."
              ghLink="https://github.com/peixotons/laravel-9-crud"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7002479320912801792/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quote}
              isBlog={false}
              title="Quote generator"
              description="A quote generator that pulls information from a API that brings a new quote from people that was very wise."
              ghLink="https://github.com/peixotons/quote-generator"
              demoLink="https://peixotons.github.io/quote-generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Pizza Management with Auth"
              description="Pizza Debt Management System: This is a web application developed in Laravel that allows users to register and manage debts related to the purchase of pizzas and soft drinks."
              ghLink="https://github.com/peixotons/pizza-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ethereumchecker}
                isBlog={false}
                title="Ethereum Address Collider"
                description="Script that looks up Collision on Ethereum addresses."
                ghLink="https://github.com/peixotons/ethereum-checker"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
