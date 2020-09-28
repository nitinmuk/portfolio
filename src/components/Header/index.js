import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="md">
            <Navbar.Brand>
                <Link to="/"
                    className={
                        window.location.pathname === "/" || window.location.pathname === "/about"
                            ? "nav-link active"
                            : "nav-link"
                    }>
                <h3>Nitin Mukesh</h3>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto" />
                <Nav>
                    <Link to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/about"
                                ? "nav-link active"
                                : "nav-link"
                        }><h6>About</h6>
                    </Link>
                    <Link to="/portfolio"
                        className={
                            window.location.pathname === "/portfolio"
                                ? "nav-link active"
                                : "nav-link"
                        }><h6>Portfolio</h6>
                    </Link>
                    <Link to="/contact"
                        className={
                            window.location.pathname === "/contact"
                                ? "nav-link active"
                                : "nav-link"
                        }><h6>Contact</h6>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
