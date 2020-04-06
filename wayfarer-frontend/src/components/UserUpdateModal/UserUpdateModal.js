import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';
import currentUser from '../../api/currentUser';

export default class UserUpdateModal extends React.Component {
    render() {
        return(
            <>
                <Modal show={this.props.signInModalStatus} onHide={this.props.signInModalClicked}>
                    <Modal.Header>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    className=""
                                    id="emailField"
                                    type="email" 
                                    placeholder="Enter email" 
                                    name="email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    id="passwordField"
                                    className=""
                                    type="password" 
                                    name="password" 
                                    value={this.state.password} 
                                    placeholder="Password"
                                    onChange={this.handleChange}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={this.props.signInModalClicked} >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.handleSignIn} >
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

