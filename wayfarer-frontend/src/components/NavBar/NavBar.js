import React from 'react';
import Login from '../Login/Login';
// import Signup from '../Signup/Signup';
// import Profile from '../Profile/Profile';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
    state = {
        signInModalStatus : false,
        registerModalStatus : false,
    }

    signInModalClicked = () => {
        this.setState({
            signInModalStatus : this.state.signInModalStatus ? false : true,
        })
    }

    registerModalClicked = () => {
        this.setState({
            registerModalStatus : this.state.registerModalStatus ? false : true,
        })
    }


    render() {
        return (
            <nav>
                <ul className="nav" id="myTab" role="tablist">
                    <li>
                        <Link to={'/'}>Home </Link>
                    </li>
                    <li>
                        <Link to={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/'} onClick={this.signInModalClicked}>Sign In</Link>
                    </li>
                    <li>
                        <Link to={'/'} onClick={this.registerModalClicked}>Register</Link>
                    </li>
                </ul>
                {/* <Login /> */}
                {this.state.signInModalStatus && <Login signInModalClicked={this.signInModalClicked} signInModalStatus={this.state.signInModalStatus} />}
            </nav>
        );
    }
}