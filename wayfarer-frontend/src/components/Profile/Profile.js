import React from 'react';
import PostContainer from '../../containers/PostContainer';
import axios from 'axios';
export default class Profile extends React.Component {
    state = {
        user: {
            name: "",
            city: "",
            date: "",
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
            <div>
                <h1>Profile Page</h1>
                <p>Name: {this.state.user.name}</p>
                <p>Set City: {this.state.user.city} </p>
                <p>Join Date: {this.state.user.date}</p>
                <button className="button">Update Profile</button>
                <PostContainer posts={this.state.posts} user={this.state.user}/>
            </div>
        );
    }
}