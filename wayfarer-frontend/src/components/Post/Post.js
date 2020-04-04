import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <div className="accordion" id="profilePosts">
                <div className="Post card mb-4">
                    <div className="card-header">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${this.props.post.id}`} aria-expanded="false" aria-controls="collapseOne">
                            <p>{this.props.post.title}</p>
                        </button>
                    </div>
                    <div id={`${this.props.post.id}`} className="collapse hide" aria-labelledby="headingOne" data-parent="#profilePosts">
                        <div className="card-body">
                            {this.props.post.content && <p>{this.props.post.content}</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}