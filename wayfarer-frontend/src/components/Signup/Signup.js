import React from 'react';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

class SignUp extends React.Component {

    render() {
        return (
            <>
                <Modal show={this.props.registerModalStatus} onHide={this.props.registerModalClicked}>
                    <Modal.Header>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            variant="danger" 
                            onClick={this.props.registerModalClicked} >
                            Cancel
                        </Button>
                        <Button 
                            variant="primary" 
                            onClick={this.props.registerModalClicked} >
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
};

export default SignUp