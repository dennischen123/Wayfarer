import React from 'react';
import Post from '../components/Post/Post';

export default class PostContainer extends React.Component {
    render() {
        let posts = this.props.posts.map((post) => { 
            return (<Post post={post} 
                        key={post._id} 
                        deletePostClicked={this.props.deletePostClicked} 
                        handlePostEdit={this.props.handlePostEdit}
                        postUpdateClicked={this.props.postUpdateClicked}
                        editPostClicked={this.props.editPostClicked} /> )})
        return (
            <div className="PostContainer container overflow-auto">
                {(posts.length >= 1)
                ? <>
                    {posts}
                    </>
                : <></>
                }
            </div>
        );
    }
}