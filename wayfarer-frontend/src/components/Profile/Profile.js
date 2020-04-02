import React from 'react';

export default class Profile extends React.Component {
    state = {
        
    }

    render() {
        return (
            <div>
                <h1>Profile Page</h1>
                <p>Name: {this.props.name}</p>
                <p>Set City: {this.props.setCity} </p>
                <p>Join Date: {this.props.joinDate}</p>
            </div>
        );
    }
}
