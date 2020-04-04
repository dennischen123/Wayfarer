import React from 'react';
import Post from '../components/Post/Post';

export default class PostContainer extends React.Component {
    render() {
        let posts = this.props.posts.map((post, index) => {return <Post post={post} key={post.id}/>})
        return (
            <div className="PostContainer container">
                <h4>post container</h4>
                {posts}
            </div>
        );
    }
}