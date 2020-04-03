import React from 'react';
import Login from '../Login/Login';
import SignUp from '../Signup/Signup';
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
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/profile'}>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'} onClick={this.signInModalClicked}>Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'} onClick={this.registerModalClicked}>Register</Link>
                    </li>
                </ul>
                {this.state.signInModalStatus && <Login signInModalClicked={this.signInModalClicked} signInModalStatus={this.state.signInModalStatus} />}
                {this.state.registerModalStatus && <SignUp registerModalClicked={this.registerModalClicked} registerModalStatus={this.state.registerModalStatus} />}
            </nav>
        );
    }
}