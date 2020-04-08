import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';
// import currentUser from '../../api/currentUser';

export default class PostUpdateModal extends React.Component {
    state = {
        title: this.props.post.title,
        content: this.props.post.content,
    }
    handlePostUpdate = () => {
        // this.props.editPostClicked(id, body)
        let updatedPost = this.props.post;
        updatedPost.title = this.state.title;
        updatedPost.content = this.state.content;
        this.props.editPostClicked(this.props.post._id, updatedPost);
        this.props.handlePostEdit();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        // console.log(this.props.post)
        return (
            // <div className="PostUpdateModal">
                // <>
                    <Modal show={this.props.postUpdateClicked} onHide={this.props.handlePostEdit}>
                        <Modal.Header>
                            <Modal.Title>Post Update</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        id="titleUpdateField"
                                        type="text"
                                        placeholder="New Title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.handleChange} 
                                        />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control
                                        id="postUpdateField"
                                        type="text"
                                        placeholder="New content"
                                        name="content"
                                        value={this.state.content}
                                        onChange={this.handleChange}
                                        />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="danger"
                                onClick={this.props.handlePostEdit} >
                                Cancel
                        </Button>
                            <Button
                                variant="primary"
                                onClick={this.handlePostUpdate} >
                                Update
                        </Button>
                        </Modal.Footer>
                    </Modal>
                // </>
            // </div>
        );
    }
}
