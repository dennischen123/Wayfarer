import React from 'react';
import PostContainer from '../../containers/PostContainer';
import CityContainer from '../../containers/CityContainer';
import currentUser from '../../api/currentUser';
import CityHeading from '../CityHeading/CityHeading';
import './CityPage.css';
import AddPostModal from '../AddPostModal/AddPostModal';


export default class CityPage extends React.Component {
    state = {
        currentCityId: "",
        currentCityPosts: [],
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
            }, 
            {
                _id: "3A123xdf2341",
                name: "San Francisco",
                country: "United States",
                image: "images/San-Francisco.jpg",
            },
            {
                _id: "5A234dsfgsdfd2",
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
            }
        ]
    }
    
    cityOnClick = (event) => {
        this.setState({
            currentCityId: event.target.id
        })
        // console.log(event.target.id)
    }


    componentDidMount(){
        //get cities from db
    }

    render() {
        return (
            <div className="CityPage container-lg">
                <div className="row">
                    <div className="col-5 bg-dark overflow-auto">
                        <CityContainer cities={this.state.cities} cityOnClick={this.cityOnClick}/>

                    </div>
                    <div className="col-7 bg-secondary overflow-auto">
                        <div className="container d-flex h-100 flex-column">
                            <div className="row h-25">
                                <CityHeading cities={this.state.cities}/>
                            </div>
                                <AddPostModal currentCityId = {this.state.currentCityId} authorId = {currentUser.getUserId()}/>
                            <div className="row h-50">
                                <PostContainer posts={this.state.currentCityPosts} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}