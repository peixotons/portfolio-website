import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {CgGitFork} from "react-icons/cg";
import {ImBlog} from "react-icons/im";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineDownload
} from "react-icons/ai";

import {CgFileDocument} from "react-icons/cg";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <span style={{ marginRight: "5px", color:"#c770f0",fontWeight: "bold", fontSize: "28px" }}>Peixoto</span>
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{marginBottom: "2px"}}/> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{marginBottom: "2px"}}/> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{marginBottom: "2px"}}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{marginBottom: "2px"}}/> Resume
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://raw.githubusercontent.com/peixotons/react-api-crypto/6f62e8a81f56d6aec874123a0f2015627cdde6b1/public/GabrielPeixotoResume-English.pdf"
                                className="fork-btn-inner"
                                download
                            >
                                <AiOutlineDownload style={{fontSize: "1.2em"}}/>{" "}
                                Download CV
                            </Button>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
