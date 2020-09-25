import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="md">
            <Navbar.Brand href="about"><h3>Nitin Mukesh</h3></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto" />
                <Nav>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
