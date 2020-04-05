import React from 'react'; 
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

class SignUp extends React.Component {

    state = {
        email: '',
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleRegister = () => {
        if (this.state.email && this.state.username && this.state.password){
            axios.post('http://localhost:4000/api/v1/register', {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
            })
            .then((res) => console.log(res))
            .catch((err) => {console.log(err)})
        } else{
            let email = document.querySelector('#regEmail')
            let username = document.querySelector('#regUsername')
            let password = document.querySelector('#regPassword')
            if  (!this.state.email)
                email.classList.add('alert-danger')
            
            if  (!this.state.username)
                username.classList.add('alert-danger')
            
            if  (!this.state.password)
                password.classList.add('alert-danger')
        }
    }




    render() {
        return (
            <>
                <Modal show={this.props.registerModalStatus} onHide={this.props.registerModalClicked}>
                    <Modal.Header>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    id="regEmail"
                                    type="email" 
                                    placeholder="Enter email" 
                                    name="email" 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                    id="regUsername"
                                    type="text" 
                                    placeholder="Enter username" 
                                    name="username" 
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    id="regPassword"
                                    type="password" 
                                    placeholder="Password" 
                                    name="password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    />
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
                            onClick={this.handleRegister} >
                            Register
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
};

export default SignUp