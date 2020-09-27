import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const contactForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <Form>
            <Form.Group controlId="controlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Jon Doe" />
            </Form.Group>
            <Form.Group controlId="controlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="controlTextArea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>          
            <Button variant="info" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>

    );
}

export default contactForm;