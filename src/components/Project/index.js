import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaGithubSquare } from "react-icons/fa";
import "./style.css";

const Project = (props) => {
    return (
        <Carousel>
            {getCarouselItems(props)}
        </Carousel>

    );
}

function getCarouselItems(props) {
    const carouselItems = props.projectDetails.map(
        projectItem => {
            return (
                <Carousel.Item key={projectItem.id}>
                    <a href={projectItem.deployedAppUrl} target="_blank" rel="noopener noreferrer">
                        <img
                            className="d-block w-100"
                            src={projectItem.image}
                            alt={projectItem.title}
                        />
                    </a>
                    
                    <Carousel.Caption>
                    <h5><a className="projectLink" href={projectItem.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a></h5>
                    <p><a className="projectLink" href={projectItem.deployedAppUrl} target="_blank" rel="noopener noreferrer">{projectItem.title}</a> : {projectItem.summary}</p>
                    <p> Technologies: {projectItem.techUsed}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        }
    );
    return carouselItems;

}

export default Project;