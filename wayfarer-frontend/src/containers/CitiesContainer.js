import React from 'react';
import City from '../components/City/City';

export default class CitiesContainer extends React.Component {
    render() {
        return (
            <div className="PostContainer container">
                <h4>Cities Container</h4>
                {City}
            </div>
        );
    }
}