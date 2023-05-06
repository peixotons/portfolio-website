import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gabriel Peixoto </span>
            from <span className="purple"> Natal, Brazil.</span>
            <br />
            I'm a developer chasing improvement in my code and professional challenges
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Running with my dog
            </li>
            <li className="about-activity">
              <ImPointRight /> Marvel/DC Lover
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I've found that the harder I work, the luckier I seem to be."{" "}
          </p>
          <footer className="blockquote-footer">Thomas Jefferson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
