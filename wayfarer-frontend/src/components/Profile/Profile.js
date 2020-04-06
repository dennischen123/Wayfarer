import React from 'react';
import PostContainer from '../../containers/PostContainer';
// import axios from 'axios';
import currentUser from '../../api/currentUser';
// import UserUpdateModal from '../UserUpdateModal/UserUpdateModal';

export default class Profile extends React.Component {
    state = {
        user: {
            name: "",
            city: "",
            date: "",
        },
        // userUpdateModalStatus : false,
        // user = Session,
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
    userUpdateModalClicked = () => {
        this.setState({
            userUpdateModalStatus : this.state.userUpdateModalStatus ? false : true,
        })
    }
  

    render() {
        let user = currentUser.getUser();

        return (
            <div>
                <h1>Profile Page</h1>
                <p>Name: {user.username}</p>
                <p>Set City: {user.city} </p>
                <p>Join Date: {user.joinDate && user.joinDate.substring(0,10)}</p>
                <button className="button">Update Profile</button>
                <PostContainer posts={this.state.posts} user={this.state.user}/>
                {/* {this.state.userUpdateModalStatus && <UserUpdateModal 
                    userUpdateModalClicked={this.userUpdateModalClicked} 
                    userUpdateModalStatus={this.state.userUpdateModalStatus} 
                />} */}
            </div>
        );
    }
}