import React from 'react';
import "./City.css";

export default class City extends React.Component {

    onClick = (event) => {
        console.log(event.target)
    }

    render() {
        return (
                <div onClick={this.onClick}className="City card mb-4" value={this.props.city.name}>
                <div className="card-body" value={this.props.city.name}>
                            <div className="row">
                        <div className="col-4" value={this.props.city.name}>
                                    <img class="city-img" src={this.props.city.image}></img>
                                </div>
                        <div className="col-7" value={this.props.city.name}>
                                    <h5>{this.props.city.name}</h5>
                                </div>
                            </div>
                        </div>
                </div>
        );
    }
}