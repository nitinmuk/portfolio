import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./style.css";
import NM from "./Nitin_Mukesh_Passport_Photo_Front.jpg";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col md={8} id="about-me-pane">
                        <Row>
                            <Col md={4}>
                                <h4>About Me</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}> <hr></hr></Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <Image
                                    src={NM}
                                    alt="Nitin Mukesh"
                                    className="image"
                                />
                            </Col>
                            <Col md={10}>
                                <ul>
                                    <li>
                                        Full Stack Developer & AWS Certified Solution Architect Associate with 11 years of experience in the
                                        software development and implementation using Java, SQL and related technologies.
                                </li>
                                    <li>
                                        Currently working as a backend cloud developer with a strong focus on developing serverless
                                        Microservices on AWS following
                                        DevOps methodology.
                                </li>
                                    <li>
                                        Recently earned a certificate in full stack web development from the University of Western Australia,
                                        with newly developed skills in JavaScript, CSS, React, jQuery and Node.js.
                                </li>
                                    <li>
                                        Passionate about solving
                                        problems, learning new skills and developing robust applications.
                                </li>
                                    <li>
                                        Excellent written and verbal communication skills, high analytical and problem-solving skills, quick
                                        learner, strong relationship building and interpersonal skills and the ability to communicate easily
                                        with people at all levels.
                                </li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default About;