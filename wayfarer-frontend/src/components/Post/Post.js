import React from 'react';
import PostUpdateModal from '../PostUpdateModal/PostUpdateModal';

export default class Post extends React.Component {
    //
    handleDelete = () => {
        this.props.deletePostClicked(this.props.post._id)
    }

    //
    render() {
        return (
            <div className="accordion Post" id="profilePosts">
                <div className="Post card mb-4">
                    <div className="card-header">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#A${this.props.post._id}`} aria-expanded="false" aria-controls="collapseOne">
                            <p>{this.props.post.title}</p>
                        </button>
                    </div>
                    <div id={`A${this.props.post._id}`} className="collapse hide" aria-labelledby="headingOne" data-parent="#profilePosts">
                        <div className="card-body">
                            {this.props.post.content && <p>{this.props.post.content}</p>}
                            <button className="btn btn-primary" onClick={this.props.handlePostEdit}>Edit</button>
                            <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
                {this.props.postUpdateClicked && 
                <PostUpdateModal 
                    handlePostEdit={this.props.handlePostEdit} 
                    postUpdateClicked={this.props.postUpdateClicked}
                    post={this.props.post}
                    editPostClicked={this.props.editPostClicked}
                />}
            </div>
        );
    }
}