import React from 'react';
import City from '../components/City/City';

export default class CitiesContainer extends React.Component {

    componentDidMount(){
        axios.put(`http://localhost:4000/api/v1/cities`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {console.log(err)})
    }


    render() {
        return (
            <div className=" Cities-Container container">
                <h4>Cities Container</h4>
                {City}
            </div>
        );
    }
}