import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ContactForm from "../../components/ContactForm";
import "./style.css";
import ContactInfo from "../../components/ContactInfo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Contact = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col md={6} id="contact-pane">
                        <Row>
                            <Col md={4}>
                                <h4>
                                    Contact
                            </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <hr></hr>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <ContactForm></ContactForm>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2} />
                    <Col md={3} id="contact-info">
                        <ContactInfo />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Contact;