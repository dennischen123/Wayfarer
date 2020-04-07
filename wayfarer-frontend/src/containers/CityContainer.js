import React from 'react';
import City from '../components/City/City';

export default class CityContainer extends React.Component {
    render() {
        let cities = this.props.cities.map((city) => { return <City city={city} key={city._id} />})
        return (
            <div className="CityContainer overflow-auto">
                {cities}
            </div>
        );
    }
}
