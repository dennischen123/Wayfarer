import React from 'react';
import PostContainer from '../../containers/PostContainer';

export default class Profile extends React.Component {
    state = {
        user: {
            name: "dennis",
            city: "san francisco",
            date: "2/22/2020",
        },
        posts: [
        {
            id: "asd1123asd",
            title: "post1",
            content: "post1 content"
        },
        {
            id: "asd2asd134asd",
            title: "post2",
            content: "post2 content"        
        }],
    }


    render() {
        return (
            <div>
                <h1 className="display-1">Profile Page</h1>
                <p>Name: {this.state.user.name}</p>
                <p>Set City: {this.state.user.city} </p>
                <p>Join Date: {this.state.user.date}</p>
                <button className="button">Update Profile</button>
                <PostContainer posts={this.state.posts} user={this.state.user}/>
            </div>
        );
    }
}