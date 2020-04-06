import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';
import currentUser from '../../api/currentUser';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSignIn = () => {
        if (this.state.username && this.state.password){
            axios.post('http://localhost:4000/api/v1/login', {
                withCredentials: true,
                username: this.state.username,
                password: this.state.password
            })
            .then((res) => {

                currentUser.setUser(res.data);
                this.props.signedIn();
                this.props.signInModalClicked();
            })
            .catch((err) => {console.log(err)})
        } 
        else {
            let username = document.querySelector('#usernameField');
            let password = document.querySelector('#passwordField');

            !this.state.username && username.classList.add("alert-danger")
            !this.state.password && password.classList.add("alert-danger")
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
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    className=""
                                    id="usernameField"
                                    type="username" 
                                    placeholder="Enter username" 
                                    name="username" 
                                    value={this.state.username} 
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