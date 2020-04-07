import React from 'react';
import './CityHeading.css';

export default class CityHeading extends React.Component {
    render() {
        return (
            <div className="CityHeading">
                <div className="row">
                    <div className="col-7">
                        <h5>San Francisco</h5>
                        <h6>United States</h6>
                    </div>
                    <div className="col-5">
                    <img class="city-hero" src="http://placebear.com/400/200"></img>
                        </div>
                </div>
            </div>
        );
    }
}