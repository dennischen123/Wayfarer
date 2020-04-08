import React from 'react';
import Login from '../Login/Login';
import SignUp from '../Signup/Signup';
import './Navbar.css'
import { Link, Redirect } from 'react-router-dom';

export default class NavBar extends React.Component {
    state = {
        signInModalStatus : false,
        registerModalStatus : false,
        loggedIn: false,
        redirect: "/profile",
    }

    signedIn = () => {
        this.setState({
            loggedIn : this.state.loggedIn ? false : true,
        })
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
            <>
            {
                this.state.loggedIn ?
                <>
                <Redirect to={this.state.redirect} /> 
                        <nav className="navbar navbar-light navbar-fixed-top">
                            <span className="navbar-brand mb-0 h1 text-white">WAYFARER</span>
                            <ul className="nav" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>Home </Link>
                                </li>
                                {this.state.loggedIn ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to={'/profile'}>Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={this.signedIn} className="nav-link text-white" to={'/'}>Log Out </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to={'/cities'}>Cities</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to={'/'} onClick={this.signInModalClicked}>Sign In</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to={'/'} onClick={this.registerModalClicked}>Register</Link>
                                        </li>

                                    </>
                                }
                            </ul>
                            {this.state.signInModalStatus && <Login signInModalClicked={this.signInModalClicked} signInModalStatus={this.state.signInModalStatus} signedIn={this.signedIn} />}
                            {this.state.registerModalStatus && <SignUp registerModalClicked={this.registerModalClicked} registerModalStatus={this.state.registerModalStatus} />}
                        </nav> 
                        </>
                :
                    <nav className="navbar navbar-light navbar-fixed-top">
                        <span className="navbar-brand mb-0 h1 text-white">WAYFARER</span>
                        <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'/'}>Home </Link>
                            </li>
                            {this.state.loggedIn ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to={'/profile'}>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to={'/'}>Log Out </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to={'/cities'}>Cities</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to={'/'} onClick={this.signInModalClicked}>Sign In</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to={'/'} onClick={this.registerModalClicked}>Register</Link>
                                    </li>
                                </>
                            }
                        </ul>
                        {this.state.signInModalStatus && <Login signInModalClicked={this.signInModalClicked} signInModalStatus={this.state.signInModalStatus} signedIn={this.signedIn} setUser={this.props.setUser}/>}
                        {this.state.registerModalStatus && <SignUp registerModalClicked={this.registerModalClicked} registerModalStatus={this.state.registerModalStatus} />}
                    </nav> 
            }
            </>
            
        );
    }
}