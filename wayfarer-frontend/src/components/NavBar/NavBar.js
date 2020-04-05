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
        loggedIn: false,
    }

    signedIn = () => {
        console.log("logged in")
        // this.setState({
        //     loggedIn : this.state.loggedIn ? false : true
        // })
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
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Wayfarer</span>
                <ul className="nav" id="myTab" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Home </Link>
                    </li>
                    {this.state.loggedIn ? 
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/profile'}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Log Out </Link>
                        </li>
                    </>
                    :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'} onClick={this.signInModalClicked}>Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'} onClick={this.registerModalClicked}>Register</Link>
                        </li>
                    </>
                    }                    



                </ul>
                {this.state.signInModalStatus && <Login signInModalClicked={this.signInModalClicked} signInModalStatus={this.state.signInModalStatus} signedIn={this.state.signedIn}/>}
                {this.state.registerModalStatus && <SignUp registerModalClicked={this.registerModalClicked} registerModalStatus={this.state.registerModalStatus} />}
            </nav>
        );
    }
}