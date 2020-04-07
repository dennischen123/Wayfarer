import React from 'react';
import Post from '../components/Post/Post';
import currentUser from '../api/currentUser';
import axios from 'axios';

export default class PostContainer extends React.Component {
    
    // componentDidMount() {
    //     axios.get(`http://localhost:4000/api/v1/users/${currentUser.getUserId()}/posts`)
    //         .then((res) => {
    //             currentUser.setPosts(res.data);
    //             this.forceUpdate();
    //         })
    //         .catch(err => console.log(err))
    // }

    render() {
        // let posts = currentUser.getPosts();
        // if (posts)
            // posts = posts.map((post) => { return <Post post={post} key={post._id} /> })
        let posts = this.props.posts.map((post) => { return <Post post={post} key={post._id} /> })
        return (
            <div className="PostContainer container">
                {(posts.length > 1)
                ? <>
                    <h6 className="text-center mb-4">See what others are saying about [insert city here]!</h6> 
                    {posts}
                    </>
                : <></>
                }
            </div>
        );
    }
}