import React from 'react';
import PostContainer from '../../containers/PostContainer';
import CityContainer from '../../containers/CityContainer';
import currentUser from '../../api/currentUser';
import CityHeading from '../CityHeading/CityHeading';
import AddPostModal from '../AddPostModal/AddPostModal';
import './CityPage.css';
// import PostUpdateModal from '../PostUpdateModal/PostUpdateModal';
import axios from 'axios';

export default class CityPage extends React.Component {
    state = {
        currentCityId: "",
        // currentCityPosts: [],
        currentCityPosts: [],
        //
        postUpdateClicked: false,
        //
        cityClickedPosts: [{
            _id: "2A123sx2341",
            title: "title",
            content: "content"
        },
            {
                _id: "2A123sx2341",
                title: "title",
                content: "content"
            },],
        cities : [
            {
                _id: "5e8ce960b8fab90867a17bf4",
                name: "San Francisco",
                country: "United States",
                image: "images/San-Francisco.jpg",
            },
            {
                _id: "5e8d24d79e9b6318c004506d",
                name: "London",
                country: "United States",
                image: "images/London.jpg",
            },
            {
                _id: "5e8d250a9e9b6318c004506f",

                name: "Chicago",
                country: "United States",
                image: "images/chicago.jpeg",
            }],
        posts : [
            {
                _id: "5e8ce9b4b8fab90867a17bf5",
                title:"post1",
                content:"post 1 content"
            },
            {
                _id: "5e8cea26b8fab90867a17bf6",
                title:"post2",
                content:"post 2 content"
            },
        ]
    }

    cityOnClick = (event) => {
        let id = event.target.id;
        axios.get(`http://localhost:4000/api/v1/cities/${id}/posts`)
            .then((res) => {
                console.log(res.data, "post get")
                let updatedPosts = res.data
                this.setState({
                    currentCityId: id,
                    currentCityPosts: updatedPosts
                })
            })
            .catch(err => console.log(err))
    }
//
    handlePostEdit = () => {
        // console.log("post edit clicked")
        this.setState({
            postUpdateClicked: this.state.postUpdateClicked ? false : true
        })
    }

    deletePostClicked = (id) => {
        //make http request to delete post from db
        axios.delete(`http://localhost:4000/api/v1/posts/${id}`)
            .then((res) => {
                console.log(res.data, "post delete")
                 //remove post from state.currentCityPost
                let updatedPosts = this.state.currentCityPosts.filter((post) => post._id !== id)
                //set state with new posts[] 
                this.setState({
                    currentCityPosts: updatedPosts
                })
            })
            .catch(err => console.log(err))
    }
//

    editPostClicked = (id, body) => {
        //find index of post inside currentCityPosts
        let index = this.state.currentCityPosts.findIndex(post => post._id === id);
        //make http request to update post /posts/:id params:body
        axios.put(`http://localhost:4000/api/v1/posts/${id}`, {
            title: body.title,
            content: body.content,
        })
        .then((res) => {
            console.log(res.data);
        //update body with currentCityPosts[index]
            let updatedPost = this.state.currentCityPosts;
            updatedPost[index] = res.data;
            this.setState({
                currentCityPosts: updatedPost
            })
        })
    }
    componentDidMount(){
        //get cities from db
    }

    handleAddPost = (post) => {
        this.state.currentCityPosts.push(post);
        this.forceUpdate()
    }


    render() {
        console.log(currentUser.getCities())
        return (
            <div className="CityPage container-lg">
                <div className="row">
                    <div className="col-5 bg-dark overflow-auto">
                        <CityContainer cities={currentUser.getCities()} cityOnClick={this.cityOnClick}/>

                    </div>
                    <div className="col-7 bg-secondary overflow-auto">
                        <div className="container d-flex h-100 flex-column">
                            <div className="row h-25">
                                <CityHeading cities={this.state.cities}/>
                            </div>
                            <AddPostModal currentCityId={this.currentCityId} handleAddPost={this.handleAddPost} currentCityId = {this.state.currentCityId} authorId = {currentUser.getUserId()}/>
                            <div className="row h-50">
                                <PostContainer editPostClicked={this.editPostClicked} handlePostEdit={this.handlePostEdit} posts={this.state.currentCityPosts} deletePostClicked={this.deletePostClicked} postUpdateClicked={this.state.postUpdateClicked} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* {this.state.postUpdateClicked && <PostUpdateModal handlePostEdit={this.handlePostEdit} postUpdateClicked={this.state.postUpdateClicked}/>} */}
            </div>
        );
    }
}