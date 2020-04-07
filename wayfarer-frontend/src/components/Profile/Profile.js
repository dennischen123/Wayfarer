import React from 'react';
import PostContainer from '../../containers/PostContainer';
import axios from 'axios';
import currentUser from '../../api/currentUser';
import UserUpdateModal from '../UserUpdateModal/UserUpdateModal';

import './Profile.css'


export default class Profile extends React.Component {
    state = {
        userUpdateModalStatus : false,
    }
    userUpdateModalClicked = () => {
        this.setState({
            userUpdateModalStatus : this.state.userUpdateModalStatus ? false : true,
        })
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/v1/users/${currentUser.getUserId()}/posts`)
            .then((res) => {
                currentUser.setPosts(res.data);
                this.forceUpdate();
            })
            .catch(err => console.log(err))
    }
    

    render() {
        let user = currentUser.getUser();
        let posts = currentUser.getPosts();
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
                    <PostContainer posts={posts} user={this.state.user}/>
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

