import React from 'react';
import PostContainer from '../../containers/PostContainer';
import CityContainer from '../../containers/CityContainer';
import currentUser from '../../api/currentUser';
import CityHeading from '../CityHeading/CityHeading';
import axios from 'axios';

export default class CityPage extends React.Component {
    state = {
        currentCityId: "",
        currentCityPosts: [],
        //
        postEditClicked: false,
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
                _id: "3A123xdf2341",
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
                _id: "2A123sx2341",
                title:"title",
                content:"content"
            },
            {
                _id: "2A123sx2341",
                title:"title",
                content:"content"
            },
            {
                _id: "3A123sx341",
                title:"title2",
                content:"content2"
            }]
    }

    cityOnClick = (event) => {
        this.setState({
            currentCityId: event.target.id
        })
        // console.log(event.target.id)
    }
//
    deletePostClicked = (id) => {
        //make http request to delete post from db
        axios.delete(`http://localhost:4000/api/v1/posts/${id}`)
            .then((res) => {
                console.log(res.data, "post delete")
                 //remove post from state.currentCityPost
                let updatedPosts = this.state.currentCityPosts.filter((post) => post._id != id)
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
        let index = this.state.currentCityPosts.findIndex(post => post._id == id);
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
                                <PostContainer posts={this.state.currentCityPosts} deletePostClicked={this.deletePostClicked} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}