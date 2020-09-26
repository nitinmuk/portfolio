import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { SiMinutemailer, SiLinkedin } from "react-icons/si";
import { IoIosContact, IoIosDocument } from "react-icons/io";
import { FaMobile, FaGithubSquare } from "react-icons/fa";
import Collapse from "react-bootstrap/Collapse";
import "./style.css";

const ContactInfo = () => {
    const [open, setOpen] = useState(false);
    return (
        <ListGroup variant="flush">
            <ListGroup.Item><IoIosContact className="iconStyle" /></ListGroup.Item>
            <ListGroup.Item><a className="iconStyle" href="mailto:nitinmukes@gmail.com"><SiMinutemailer /></a></ListGroup.Item>
            <ListGroup.Item>
                <FaMobile
                    className="iconStyle mobile"
                    onClick={() => setOpen(!open)}
                    aria-controls="mobileNo"
                    aria-expanded={open}
                />
                <Collapse in={open}>
                    <div id="mobileNo">0406105475</div>
                </Collapse>
            </ListGroup.Item>
            <ListGroup.Item><a className="iconStyle" href="https://linkedin.com/in/nitin-mukesh-2019"><SiLinkedin /></a></ListGroup.Item>
            <ListGroup.Item><a className="iconStyle" href="https://github.com/nitinmuk"><FaGithubSquare /></a></ListGroup.Item>
            <ListGroup.Item><a className="iconStyle" href="https://drive.google.com/file/d/18epOcoPo_HbZnjlnBq0Vo6xNh1Tdcx4e/view?usp=sharing"><IoIosDocument /></a></ListGroup.Item>
        </ListGroup>

    );

}

export default ContactInfo;