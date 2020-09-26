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
                    <img
                        className="d-block w-100"
                        src={projectItem.image}
                        alt={projectItem.title}
                    />
                    <Carousel.Caption>
                        <h5><a className="projectLink" href={projectItem.deployedAppUrl}>{projectItem.title}</a></h5>
                        <h5>{projectItem.summary}</h5>
                        <h5>Technologies: {projectItem.techUsed}</h5>
                        <h5><a className="projectLink" href={projectItem.githubUrl}><FaGithubSquare className="icon" /></a></h5>                        
                    </Carousel.Caption>
                </Carousel.Item>
            );
        }
    );
    return carouselItems;

}

export default Project;