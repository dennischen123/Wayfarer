import React from 'react';
import './CityHeading.css';

export default class CityHeading extends React.Component {
    render() {
        let divStyle = {
            backgroundImage: `url(images/${this.props.cities.image})`,
        }
        return (
            <div className="CityHeading card-img-top" style={divStyle}>
                <div className="row">
                    <div className="col-7">
                        <h4>{this.props.cities.name}</h4>
                        <h6>{this.props.cities.country}</h6>
                        <h3>{this.props.cities.description}</h3>
                    </div>
                    <div className="col-5">
                        </div>
                </div>
            </div>
        );
    }
}
