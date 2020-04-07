import React from 'react';
import City from '../components/City/City';

export default class CityContainer extends React.Component {
    render() {
         axios.get (`http://localhost:4000/api/v1/cities`)

        .then((res) => {
            console.log(res);
            // this.cities.map((city) => { return <City city={city} key={city._id} cityOnClick={this.props.cityOnClick}/>})
        })
        
        return (
            <div className="CityContainer overflow-auto">
                {cities}
            </div>
        );
    }
}
