import React from 'react';
import PostContainer from '../../containers/PostContainer';
import axios from 'axios';
import './Profile.css'

export default class Profile extends React.Component {
    state = {
        user: {
            name: "Brock",
            city: "San Francisco",
            date: "4.5.2020",
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
    componentDidMount = () => {
        axios.get('http://localhost:4000/api/v1/user', {
            withCredentials: true
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    } 
    // getUser = () => {
    //     axios.get('http://localhost:4000/api/v1/user', {
    //         withCredentials: true
    //     })
    //     .then((res) => {
    //         console.log(res.data)
    //     })
    //     .catch(err => console.log(err))

    // }

    render() {
        // let user = this.getUser();
        // console.log(user)

        return (
            <div className="user-container">
                <div>
                    <button className="btn btn-secondary float-right update-btn">Update Profile</button>
                </div>
                <div className="user-info w-50 align-content-center text-center">
                    <img className="rounded-circle profile-image" src="https://placekitten.com/200/200"/>
                    <h5 className="text-white">{this.state.user.name}</h5>
                    <h5 className="text-white">{this.state.user.city} </h5>
                    <h5 className="text-white">{this.state.user.date}</h5>
                </div>
                <div className="posts">
                    <PostContainer posts={this.state.posts} user={this.state.user}/>
                </div>
            </div>
        );
    }
}

