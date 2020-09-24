import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Header = () => {
    return (
        <Navbar bg="light" variant="light" expand="md">
            <Navbar.Brand href="#home"><h3>Nitin Mukesh</h3></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto" />
                <Nav>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
