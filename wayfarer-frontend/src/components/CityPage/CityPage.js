import React from 'react';
import PostContainer from '../../containers/PostContainer';
import CityContainer from '../../containers/CityContainer';
import currentUser from '../../api/currentUser';
import CityHeading from '../CityHeading/CityHeading';

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
                                <PostContainer posts={this.state.currentCityPosts} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}