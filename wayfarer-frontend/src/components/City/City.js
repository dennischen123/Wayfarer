import React from 'react';
import "./City.css";

export default class City extends React.Component {

    render() {
        return (
            <div className="City card mb-4" id={this.props.city._id} value={this.props.city.name}>
                <div className="card-body" name={this.props.city} id={this.props.city._id} value={this.props.city.name}>
                    <div className="row">
                        <div className="col-4" name={this.props.city} id={this.props.city._id} value={this.props.city.image}>
                            <img className="city-img" src={`images/${this.props.city.image}`}></img>
                        </div>
                        <div className="col-7" name={this.props.city} id={this.props.city._id} value={this.props.city.name}>
                            <h5 onClick={this.props.cityOnClick} id={this.props.city._id}>{this.props.city.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
