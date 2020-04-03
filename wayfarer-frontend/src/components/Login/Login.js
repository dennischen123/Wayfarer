import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends React.Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSignIn = () => {
        if (this.state.email && this.state.password){
            axios.post('/user/login', {
                email: this.state.email,
                password: this.state.password
            })
            .then((res) => {res.status(200)})
            .catch((err) => {console.log(err)})
        } 
        else {
            let email = document.querySelector('#emailField');
            let password = document.querySelector('#passwordField');

            !this.state.email && email.classList.add("alert-danger")
            !this.state.password && password.classList.add("alert-danger")
            console.log(email)
            console.log(password)
        }
    }

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

};

export default Login