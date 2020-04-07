import React from 'react';
import PostContainer from '../../containers/PostContainer';
import axios from 'axios';
import currentUser from '../../api/currentUser';
import UserUpdateModal from '../UserUpdateModal/UserUpdateModal';
import './Profile.css'


export default class Profile extends React.Component {
    state = {
    
        userUpdateModalStatus : false,
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

    // getUserPosts = () => {
    //     axios.get(`http://localhost:4000/api/v1/users/${user.id}/posts'`)
    // }
    

    render() {
        let user = currentUser.getUser();
        return (
            <div className="user-container">
                <div>
                    <button className="btn btn-secondary float-right update-btn" onClick={this.userUpdateModalClicked}>Update Profile</button>
                </div>
                <div className="user-info w-50 align-content-center text-center">
                    <img className="rounded-circle profile-image" src="https://placekitten.com/200/200"/>
                    <h5 className="text-white">{user.username}</h5>
                    <h5 className="text-white">{user.currentCity} </h5>
                    <h5 className="text-white">{user.joinDate && user.joinDate.substring(0,10)}</h5>
                </div>
                <div className="posts">
                    <PostContainer posts={this.state.posts} user={this.state.user}/>
                    {this.state.userUpdateModalStatus && <UserUpdateModal 
                    userUpdateModalClicked={this.userUpdateModalClicked} 
                    userUpdateModalStatus={this.state.userUpdateModalStatus} 
                    user={user}
                />}
                </div>
            </div>
        );
    }
}

