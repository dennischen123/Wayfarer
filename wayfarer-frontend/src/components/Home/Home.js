import React from 'react';
import About from  '../About/About'
// import Login from '../Login/Login'
import './Home.css'

class Home extends React.Component {
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
            <div className="wrapper">
                <div className="jumbotron jumbotron-fluid">
                    <div className= "container">
                        <h1 className="display-2 hero-text font-weight-normal">Welcome to Wayfarer!</h1>
                    </div>
                </div>
                <About />
            </div>
        );
    }
}

export default Home;