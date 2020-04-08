import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


export default class AddPostModal extends React.Component {
    state = {
        addModalStatus: false,
        title: "",
        content: "",
    }

    addModalClicked = () =>{
        this.setState({
            addModalStatus : this.state.addModalStatus ? false : true,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addPost = () => {
        //create new post and append city id to it
        let title = document.querySelector('#postTitle')
        let content = document.querySelector('#postContent')
        axios.post('http://localhost:4000/api/v1/posts', {
            title: this.state.title,
            content: this.state.content,
            cityId: this.props.currentCityId, 
            authorId: this.props.authorId,
        })
        .then((res) => {
            console.log(res.data);
            this.addModalClicked();
            let post = res.data;
            console.log("post = ", post)
            this.props.handleAddPost(post);
            
        })
        .catch((err) => {console.log(err)})
    }

    render() {
        return (
            <div>
            {this.props.currentCityId &&
                    <> 
                        <div className="row h-10">
                            <button onClick={this.addModalClicked} className="btn btn-primary">add</button>
                        </div>
                    </>}
            
                {this.state.addModalStatus &&  <>
                    <Modal show={this.state.addModalStatus} onHide={this.addModalClicked}>
                        <Modal.Header>
                            <Modal.Title>Add Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control 
                                        id="postTitle"
                                        type="text" 
                                        placeholder="Enter title" 
                                        name="title" 
                                        value={this.state.title}
                                        onChange={this.handleChange}
                                        />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control 
                                        id="postContent"
                                        type="text" 
                                        placeholder="Enter post content" 
                                        name="content" 
                                        value={this.state.content}
                                        onChange={this.handleChange}
                                        />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button 
                                variant="primary" 
                                onClick={this.addPost} >
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </> 
            }
        </div>
        )
    }
}