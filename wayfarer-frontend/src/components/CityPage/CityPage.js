import React from 'react';
import PostContainer from '../../containers/PostContainer';
import CityContainer from '../../containers/CityContainer';
import currentUser from '../../api/currentUser';
import CityHeading from '../CityHeading/CityHeading';
import './CityPage.css';


export default class CityPage extends React.Component {
    state = {
        cityClicked: "3A123xdf2341",
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
                image: "images/San-Francisco.jpg",
            },
            {
                name: "London",
                country: "United States",
                image: "images/London.jpg",
            },
            {
                _id: "4A123sxdf341",

                name: "Chicago",
                country: "United States",
                image: "images/chicago.jpeg",
            },
            {
                _id: "1A13sxdf2341",

                name: "Sydney",
                country: "Australia",
                image: "images/Sydney.jpg",
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

    componentDidMount(){
        //get cities from db
    }

    render() {
        return (
            <div className="CityPage">
                <h1>City Page</h1>
                <div className="row">
                    <div className="col-5 bg-dark">
                        <CityContainer cities={this.state.cities}/>

                    </div>
                    <div className="col-7 bg-secondary">
                        <div className="container d-flex h-100 flex-column">
                            <div className="row h-25">
                                <CityHeading cities={this.state.cities}/>
                            </div>
                            <div className="row h-10">
                                <button className="btn btn-primary">add</button>
                            </div>
                            <div className="row h-50">
                                <PostContainer posts={this.state.posts} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}