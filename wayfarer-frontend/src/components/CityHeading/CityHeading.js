import React from 'react';
import './CityHeading.css';

export default class CityHeading extends React.Component {
    divStyle = {
        backgroundImage: 'url(http://placebear.com/700/200)',
    }
    render() {
        return (
            <div className="CityHeading card-img-top" style={this.divStyle}>
                <div className="row">
                    <div className="col-7">
                        <h4>San Francisco</h4>
                        <h6>United States</h6>
                        <div className="shadow p-3 rounded" id="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Commodi, maxime quod. Voluptatibus animi odio deserunt? </p>
                        </div>
                        
                    </div>
                    <div className="col-5">
                    {/* <img class="city-hero hero-image" src="http://placebear.com/700/200"></img> */}
                        </div>
                </div>
            </div>
        );
    }
}
