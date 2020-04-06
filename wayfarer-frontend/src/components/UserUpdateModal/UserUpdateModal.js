import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';
import currentUser from '../../api/currentUser';

export default class UserUpdateModal extends React.Component {
    state={
        username: this.props.user.username,
        email: this.props.user.email,
        city: this.props.user.currentCity,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleUserUpdate = () => {
        axios.put(`http://localhost:4000/api/v1/users/${this.props.user._id}`, {
            email: this.state.email,
            username: this.state.username,
            currentCity: this.state.city,
        })
        .then((res) => {
            console.log(res);
            currentUser.setUser({
                _id: this.props.user._id,
                email: this.state.email,
                username: this.state.username,
                currentCity: this.state.city,
                joinDate: this.props.user.joinDate,
                })
        
            this.props.userUpdateModalClicked();
            
        })
        .catch((err) => {console.log(err)})
    }

   
    render() {
        return(
            <>
                <Modal show={this.props.userUpdateModalStatus} onHide={this.props.userUpdateModalClicked}>
                    <Modal.Header>
                        <Modal.Title>Profile Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    id="usernameUpdateField"
                                    type="text" 
                                    placeholder="Enter new username" 
                                    name="username" 
                                    defaultValue={this.state.username} 
                                    onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control

                                    id="emailUpdateField"
                                    type="email" 
                                    placeholder="Enter email" 
                                    name="email" 
                                    defaultValue={this.state.email} 
                                    onChange={this.handleChange}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Current City</Form.Label>
                                <Form.Control 
                                    id="city"
                                    type="text" 
                                    name="city" 
                                    defaultValue={this.state.currentCity} 
                                    placeholder="Enter current city"
                                    onChange={this.handleChange}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={this.props.userUpdateModalClicked} >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            onClick={this.handleUserUpdate} >
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

