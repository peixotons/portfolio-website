import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    FaPhp,
    FaLaravel,
    FaJsSquare,
    FaGitAlt,
    FaDatabase,
    FaReact,
    FaAngular,
} from "react-icons/fa";
import { SiMysql, SiJava } from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaLaravel />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaJsSquare />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaGitAlt />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAngular />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJava />
            </Col>
        </Row>
    );
}

export default Techstack;
