import React from 'react';
import About from  '../About/About'
// import Login from '../Login/Login'

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
            <div>
                <h1>Home Page</h1>
                <img src="https://placebear.com/800/300" alt=""></img>
                <About />
            </div>
        );
    }
}

export default Home;