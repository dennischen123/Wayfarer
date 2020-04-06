import React from 'react';
import PostContainer from '../../containers/PostContainer';
// import axios from 'axios';
import currentUser from '../../api/currentUser';

export default class Profile extends React.Component {
    state = {
        user: {
            name: "",
            city: "",
            date: "",
        },
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

    // getUser = (data) => {
    //     set.state({
    //         user: data,
    //     })
    // }
    // componentDidMount = () => {
    //     axios.get('http://localhost:4000/api/v1/users', {
    //         withCredentials: true
    //     })
    //         .then((res) => {
    //             console.log(res.data)
    //         })
    //         .catch(err => console.log(err))
    // } 
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
        let user = currentUser.getUser();

        return (
            <div>
                <h1>Profile Page</h1>
                <p>Name: {user.username}</p>
                <p>Set City: {user.city} </p>
                <p>Join Date: {user.joinDate && user.joinDate.substring(0,10)}</p>
                <button className="button">Update Profile</button>
                <PostContainer posts={this.state.posts} user={this.state.user}/>
            </div>
        );
    }
}