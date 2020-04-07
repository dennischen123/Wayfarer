import React from 'react';
import PostContainer from '../../containers/PostContainer';
import CityContainer from '../../containers/CityContainer';
// import currentUser from '../../api/currentUser';
import CityHeading from '../CityHeading/CityHeading';
// import PostUpdateModal from '../PostUpdateModal/PostUpdateModal';
import axios from 'axios';

export default class CityPage extends React.Component {
    state = {
        currentCityId: "5e8ce960b8fab90867a17bf4",
        // currentCityPosts: [],
        currentCityPosts: [
            {
                _id: "5e8d022569265e15884e3c53",
                title: "post1",
                content: "post 1 content"
            },
            {
                _id: "5e8ceb0ab8fab90867a17bf7",
                title: "post2",
                content: "post 2 content"
            },
        ],
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
                image: "",
            },
            {
                _id: "5A234dsfgsdfd2",
                name: "London",
                country: "United States",
                image: "",
            },
            {
                _id: "4A123sxdf341",
                name: "Chicago",
                country: "United States",
                image: "",
            },
            {
                _id: "1A13sxdf2341",

                name: "Sydney",
                country: "Australia",
                image: "",
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
        console.log(event.target.id)
        let id = event.target.id;
        axios.get(`http://localhost:4000/api/v1//cities/${id}/posts`)
            .then((res) => {
                console.log(res.data)
            })
        .catch(err => console.log(err))
        // this.setState({
        //     currentCityId: event.target.id
        // })
        // console.log(event.target.id)
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

    render() {
        return (
            <div className="CityPage container">
                <h1>City Page</h1>
                <div className="row">
                    <div className="col-5 bg-dark">
                        <CityContainer cities={this.state.cities} cityOnClick={this.cityOnClick}/>

                    </div>
                    <div className="col-7 bg-secondary">
                        <div className="container d-flex h-100 flex-column">
                            <div className="row h-25">
                                <CityHeading />
                            </div>
                            <div className="row h-10">
                                <button className="btn btn-primary">add</button>
                            </div>
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