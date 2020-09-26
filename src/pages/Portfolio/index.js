import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";
import projects from "./projectDetails.json";
import timelessRecipe from "./images/Timeless_Recipes.png";
import maraValidator from "./images/Mara_Validator.JPG";
import employeeDir from "./images/Employee_Directory.JPG";
import budgetTracker from "./images/Budget_Tracker.JPG";
import fitnessTracker from "./images/workout-dashboard.JPG";
import eatDaBurger from "./images/Eat_Da_Burger.JPG";
import Project from "../../components/Project";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const Portfolio = () => {
    populateImage();
    return (
        <div>
            <Header />
            <Container  id="portfolioPane">
                <Row>
                    <Col md={12}>
                        <Row>
                            <Col md={4}>
                                <h4>
                                    Portfolio
                                </h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <hr />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                    <Project projectDetails={projects} />
                
            </Container>
            <Footer />
        </div>
    )
}
function populateImage() {
    projects[0].image = timelessRecipe;
    projects[1].image = maraValidator;
    projects[2].image = employeeDir;
    projects[3].image = budgetTracker;
    projects[4].image = fitnessTracker;
    projects[5].image = eatDaBurger;
}

export default Portfolio;