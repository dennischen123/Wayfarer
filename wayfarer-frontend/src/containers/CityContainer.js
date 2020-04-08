import React from 'react';
import axios from 'axios';
import City from '../components/City/City';

export default class CityContainer extends React.Component {


    render() {
         axios.get (`http://localhost:4000/api/v1/cities`)
        .then((res) => {
            // let cities = (res.data)
            // cities = this.state.cities
            // let cities = this.state.cities.map((city) => { return <City city={city} key={city._id} />})
        })
        
        return (
            <div className="CityContainer overflow-auto">
                {/* {cities} */}
            </div>
        );
    }
}
